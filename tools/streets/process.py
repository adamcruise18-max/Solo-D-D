import pyarrow.parquet as pq, shapely, json, math, collections, struct, gzip, sys, os
import numpy as np
from shapely import STRtree
D='/tmp/claude-0/dl-overture/'; OUT=sys.argv[1]
LAT0,LON0=45.4826,-122.8738
S,W,N,E=45.473602,-122.886591,45.491598,-122.861009
p=math.radians(LAT0)
MLAT=111132.92-559.82*math.cos(2*p)+1.175*math.cos(4*p); MLON=111412.84*math.cos(p)-93.5*math.cos(3*p)
def loc(g): return shapely.transform(g, lambda c: np.column_stack([(c[:,0]-LON0)*MLON,(c[:,1]-LAT0)*MLAT]))
def rd(g): return shapely.set_precision(g,0) if False else shapely.transform(g, lambda c: np.round(c,6))
def load(n): return pq.read_table(D+n+'.parquet').to_pylist()
def nm(r): return (r.get('names') or {}).get('primary')
def ds(r): return sorted({s['dataset'] for s in (r.get('sources') or [])})
def feat(g,props):
    return {"type":"Feature","geometry":json.loads(shapely.to_geojson(rd(g))),"properties":{k:v for k,v in props.items() if not (v is None or (isinstance(v,(list,str)) and len(v)==0))}}
def dump(name,feats):
    with open(OUT+name,'w') as f: json.dump({"type":"FeatureCollection","features":feats},f,separators=(',',':'))
C=collections.Counter
def pct(n,t): return round(100*n/t,1) if t else 0
def q(a,x): return round(float(np.quantile(a,x)),1) if len(a) else None
stats={"area":{"center":[LAT0,LON0],"bbox":{"south":S,"west":W,"north":N,"east":E},"size_km":2.0,"overture_release":"2026-11-18.0"}}
# ---------- places & addresses ----------
places=load('place'); addrs=load('address')
pl_geo=[shapely.from_wkb(r['geometry']) for r in places]
ad_geo=[shapely.from_wkb(r['geometry']) for r in addrs]
# ---------- buildings ----------
B=load('building'); BP=load('building_part')
bgeo=[shapely.from_wkb(r['geometry']) for r in B]
tree_pl=STRtree(pl_geo); tree_ad=STRtree(ad_geo)
bfe=[]; areas=[]; heights=[]
for r,g in zip(B,bgeo):
    a=float(shapely.area(loc(g))); areas.append(a)
    if r['height'] is not None: heights.append(r['height'])
    pls=[places[i] for i in tree_pl.query(g,predicate='contains')]
    ads=[addrs[i] for i in tree_ad.query(g,predicate='contains')]
    shop=[{"name":nm(x),"cat":(x.get('basic_category') or ((x.get('taxonomy') or {}).get('primary')))} for x in pls if nm(x)]
    addr=None
    if ads: addr=f"{ads[0]['number'] or ''} {ads[0]['street'] or ''}".strip()
    bfe.append(feat(g,{"id":r['id'],"height":r['height'],"min_height":r['min_height'],"num_floors":r['num_floors'],"subtype":r['subtype'],"class":r['class'],
      "roof_shape":r['roof_shape'],"roof_height":r['roof_height'],"roof_color":r['roof_color'],"roof_material":r['roof_material'],
      "facade_color":r['facade_color'],"facade_material":r['facade_material'],"name":nm(r),"has_parts":r['has_parts'] or None,
      "is_underground":r['is_underground'] or None,"area_m2":round(a,1),"sources":ds(r),"places":shop[:5] or None,"addr":addr}))
for r in BP:
    g=shapely.from_wkb(r['geometry'])
    bfe.append(feat(g,{"id":r['id'],"part_of":r.get('building_id'),"part":True,"height":r['height'],"min_height":r['min_height'],"num_floors":r['num_floors'],
      "roof_shape":r['roof_shape'],"roof_height":r['roof_height'],"roof_color":r['roof_color'],"roof_material":r['roof_material'],
      "facade_color":r['facade_color'],"facade_material":r['facade_material'],"sources":ds(r)}))
dump('buildings.geojson',bfe)
nb=len(B); has=lambda k: sum(r[k] is not None for r in B)
srcrec=C(); srcprop=C()
for r in B:
    for s in r['sources'] or []:
        (srcrec if s['property']=='' else srcprop)[f"{s['dataset']} ({s['license']})"]+=1
def cls(r):
    c=r['class']; st=r['subtype']
    if c in ('house','detached','semidetached_house','terrace','bungalow','residential'): return 'house'
    if c in ('garage','garages','carport','shed'): return 'garage/shed'
    if c in ('apartments','dormitory'): return 'apartments'
    if c in ('retail','commercial','office','supermarket','warehouse','industrial') or st in ('commercial','industrial'): return 'commercial/industrial'
    if c or st: return 'other ('+(c or st)+')' if False else 'other civic/school/etc'
    return 'unknown'
A=np.array(areas)
stats['buildings']={"count":nb,"building_parts":len(BP),
 "attribute_coverage":{k:{"count":has(k),"pct":pct(has(k),nb)} for k in ['height','num_floors','min_height','roof_shape','roof_height','roof_color','roof_material','facade_color','facade_material','class','subtype']},
 "with_name":sum(1 for r in B if nm(r)),
 "with_place_inside":sum(1 for f in bfe if f['properties'].get('places')),
 "with_address_inside":sum(1 for f in bfe if f['properties'].get('addr')),
 "height_m":{"min":q(heights,0),"p10":q(heights,.1),"median":q(heights,.5),"p90":q(heights,.9),"max":q(heights,1)},
 "class_raw":dict(C(r['class'] or 'none' for r in B).most_common()),
 "subtype_raw":dict(C(r['subtype'] or 'none' for r in B).most_common()),
 "class_mix":dict(C(cls(r) for r in B).most_common()),
 "roof_shape":dict(C(r['roof_shape'] for r in B if r['roof_shape']).most_common()),
 "footprint_m2":{"min":q(A,0),"p10":q(A,.1),"median":q(A,.5),"p90":q(A,.9),"max":q(A,1),"buckets":{
    "<20":int((A<20).sum()),"20-50":int(((A>=20)&(A<50)).sum()),"50-100":int(((A>=50)&(A<100)).sum()),"100-200":int(((A>=100)&(A<200)).sum()),
    "200-500":int(((A>=200)&(A<500)).sum()),"500-2000":int(((A>=500)&(A<2000)).sum()),">=2000":int((A>=2000).sum())}},
 "sources_whole_record":dict(srcrec.most_common()),"sources_single_property":dict(srcprop.most_common()),
}
# height by area bucket (for rule-based guesses)
hb={}
for lo,hi in [(0,50),(50,100),(100,200),(200,500),(500,1e9)]:
    hs=[r['height'] for r,a in zip(B,areas) if r['height'] is not None and lo<=a<hi]
    hb[f"{lo}-{int(hi) if hi<1e9 else 'up'}"]={"n":len(hs),"median":q(hs,.5),"p90":q(hs,.9)}
stats['buildings']['height_by_footprint_m2']=hb
# ---------- roads ----------
SG=load('segment'); rfe=[]; lenby=C(); cntby=C()
for r in SG:
    g=shapely.from_wkb(r["geometry"]); L=float(shapely.length(loc(shapely.intersection(g,shapely.box(W,S,E,N)))))
    key=r['class'] if r['subtype']=='road' else r['subtype']+':'+(r['class'] or '')
    if r['subclass']: key+='/'+r['subclass']
    lenby[key]+=L; cntby[key]+=1
    flags=sorted({v for f in (r['road_flags'] or []) for v in f['values']})
    surf=[f['value'] for f in (r['road_surface'] or [])]
    wid=[w['value'] for w in (r['width_rules'] or [])]
    lv=[l['value'] for l in (r['level_rules'] or []) if l['value']]
    sp=[]
    for s in r['speed_limits'] or []:
        m=s.get('max_speed')
        if m: sp.append(f"{m['value']} {m['unit']}")
    rfe.append(feat(g,{"id":r['id'],"subtype":r['subtype'],"class":r['class'],"subclass":r['subclass'],"name":nm(r),
      "surface":surf[0] if len(set(surf))==1 else (surf or None),"width_m":(max(wid) if wid else None),"flags":flags,"level":(max(lv) if lv else None),
      "max_speed":sp[0] if sp else None,"length_in_bbox_m":round(L,1),"sources":ds(r)}))
dump('roads.geojson',rfe)
streets=sum(v for k,v in lenby.items() if k.split('/')[0] in ('primary','secondary','tertiary','residential','unclassified') )
sidew=lenby.get('footway/sidewalk',0)
stats['roads']={"segments":len(SG),"connectors":pq.read_metadata(D+'connector.parquet').num_rows,
 "count_by_class":dict(cntby.most_common()),"length_m_by_class":{k:round(v) for k,v in lenby.most_common()},
 "with_width":sum(1 for r in SG if r['width_rules']),"with_surface":sum(1 for r in SG if r['road_surface']),
 "with_speed_limit":sum(1 for r in SG if r['speed_limits']),"flags":dict(C(v for r in SG for f in (r['road_flags'] or []) for v in f['values'])),
 "sidewalk":{"mapped_sidewalk_m":round(sidew),"street_centerline_m":round(streets),"coverage_pct_of_both_sides":pct(sidew,2*streets)}}
# ---------- land use / land / water / land_cover ; infrastructure ----------
lfe=[]; ife=[]; lstat={}
for n in ['land_use','land','water','land_cover']:
    R=load(n); lstat[n]={"count":len(R),"by_class":dict(C(f"{r['subtype']}/{r.get('class')}" for r in R).most_common())}
    for r in R:
        g=shapely.from_wkb(r['geometry'])
        pr={"id":r['id'],"layer":n,"subtype":r['subtype'],"class":r.get('class'),"name":nm(r),"surface":r.get('surface'),"sources":ds(r)}
        st=dict(r.get('source_tags') or [])
        if st.get('leaf_type'): pr['leaf_type']=st['leaf_type']
        if st.get('height'): pr['height']=st['height']
        if g.geom_type=='Point': ife.append(feat(g,pr)); continue
        if r['subtype']=='physical': continue
        g=shapely.intersection(g,shapely.box(W,S,E,N))
        if not g.is_empty: lfe.append(feat(g,pr))
I=load('infrastructure'); lstat['infrastructure']={"count":len(I),"by_class":dict(C(f"{r['subtype']}/{r['class']}" for r in I).most_common())}
KEEP=['material','colour','height','crossing','crossing:markings','kerb','direction','lamp_type','support','barrier','ref','operator','fence_type','tactile_paving']
for r in I:
    g=shapely.from_wkb(r['geometry']); st=dict(r.get('source_tags') or [])
    pr={"id":r['id'],"layer":"infrastructure","subtype":r['subtype'],"class":r['class'],"name":nm(r),"height":r['height'],"surface":r['surface'],"sources":ds(r)}
    pr["tags"]={k:st[k] for k in KEEP if k in st} or None
    ife.append(feat(g,pr))
dump('landuse.geojson',lfe); dump('infrastructure.geojson',ife)
stats['landuse_and_infrastructure']=lstat
trees_pts=sum(1 for r in load('land') if r['subtype']=='tree' and shapely.from_wkb(r['geometry']).geom_type=='Point')
stats['trees']={"single_tree_points":trees_pts,"wood_forest_polygons":lstat['land']['by_class'].get('forest/wood',0),"tree_polygons_or_rows":sum(1 for r in load('land') if r['subtype']=='tree' and shapely.from_wkb(r['geometry']).geom_type!='Point')}
stats['places']={"count":len(places),"top_categories":dict(C(r.get('basic_category') for r in places).most_common(15))}
stats['addresses']={"count":len(addrs),"sources":dict(C(f"{s['dataset']} ({s['license']})" for r in addrs for s in r['sources'] or []))}
# ---------- compact size estimate ----------
def ring_bytes(g):
    c=shapely.get_coordinates(g); return 4*len(c)
def compact(bgs, rgs, lgs, npts, names):
    b=sum(10+ring_bytes(g) for g in bgs)   # 10 B header: h u16, minh u8, class u8, roof u8, colors 2xu8, nverts u16, flags u8 ; 4 B/vertex int16 x,y @0.1 m (tile-local)
    r=sum(8+ring_bytes(g) for g in rgs)    # 8 B header: class u8, width u8, flags u8, surface u8, name idx u16, nverts u16
    l=sum(4+ring_bytes(g) for g in lgs)    # 4 B header: class u8, nverts u16, flags u8
    p=npts*5                                # 5 B per point: x,y int16 + kind u8
    s=sum(len(x.encode())+1 for x in names)
    return {"buildings":b,"roads":r,"landuse":l,"points":p,"names":s,"total":b+r+l+p+s}
def realblob(bgs,rgs):
    out=bytearray()
    for g in bgs+rgs:
        c=np.round(shapely.get_coordinates(loc(g))*10).astype(np.int16)
        d=np.diff(c,axis=0,prepend=np.zeros((1,2),np.int16)).astype(np.int16)
        out+=struct.pack('<HHBBBBBB',len(c),0,0,0,0,0,0,0)+d.tobytes()
    return out
bg=[shapely.from_wkb(r['geometry']) for r in B]+[shapely.from_wkb(r['geometry']) for r in BP]
rg=[shapely.from_wkb(r['geometry']) for r in SG]
lg=[shapely.from_wkb(r['geometry']) for r in load('land_use')+load('land')+load('water')]; lg=[g for g in lg if g.geom_type!='Point']
# clip landuse to tile for fair size (big polygons extend outside)
box=shapely.box(W,S,E,N); lg=[shapely.intersection(g,box) for g in lg]
npts=len(ife)
names=set([nm(r) for r in SG if nm(r)]+[f['properties']['places'][0]['name'] for f in bfe if f['properties'].get('places')])
cs=compact(bg,rg,lg,npts,names)
blob=realblob(bg,rg); gz=len(gzip.compress(bytes(blob),9))
cs["buildings_plus_roads_delta_blob_raw"]=len(blob); cs["buildings_plus_roads_delta_blob_gzip"]=gz
stats['compact_size_pilot_4km2']=cs
stats['bytes_per_km2']={k:round(v/4) for k,v in cs.items()}
stats['vertices']={"buildings":int(sum(len(shapely.get_coordinates(g)) for g in bg)),"roads":int(sum(len(shapely.get_coordinates(g)) for g in rg))}
json.dump(stats,open(OUT+'stats.json','w'),indent=1)
print(json.dumps(stats,indent=1)[:6000])
