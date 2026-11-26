import pyarrow.fs as fs, pyarrow.parquet as pq, pyarrow as pa, pyarrow.compute as pc, sys, time, os
from concurrent.futures import ThreadPoolExecutor
REL='overturemaps-us-west-2/release/2026-11-18.0'
s3=fs.S3FileSystem(anonymous=True, region='us-west-2', proxy_options=os.environ['HTTPS_PROXY'], tls_ca_file_path='/root/.ccr/ca-bundle.crt')
# usage: overture_dl.py OUTDIR S W N E type...
OUT=sys.argv[1]; S,W,N,E=map(float,sys.argv[2:6]); types=sys.argv[6:]
def rg_hits(path):
    f=pq.ParquetFile(path, filesystem=s3)
    md=f.metadata; names=[md.schema.column(i).path for i in range(md.num_columns)]
    idx={n:i for i,n in enumerate(names)}
    hits=[]
    for r in range(md.num_row_groups):
        rg=md.row_group(r)
        st=lambda n: rg.column(idx[n]).statistics
        try:
            xmin=st('bbox.xmin').min; xmax=st('bbox.xmax').max; ymin=st('bbox.ymin').min; ymax=st('bbox.ymax').max
        except Exception: hits.append(r); continue
        if xmax>=W and xmin<=E and ymax>=S and ymin<=N: hits.append(r)
    if not hits: return None
    t=f.read_row_groups(hits)
    b=t.column('bbox')
    m=pc.and_(pc.and_(pc.greater_equal(pc.struct_field(b,'xmax'),W), pc.less_equal(pc.struct_field(b,'xmin'),E)),
              pc.and_(pc.greater_equal(pc.struct_field(b,'ymax'),S), pc.less_equal(pc.struct_field(b,'ymin'),N)))
    t=t.filter(m)
    return t if t.num_rows else None
for ty in types:
    t0=time.time()
    files=[x.path for x in s3.get_file_info(fs.FileSelector(f'{REL}/{ty}/')) if x.path.endswith('.parquet')]
    with ThreadPoolExecutor(32) as ex: res=[r for r in ex.map(rg_hits, files) if r is not None]
    name=ty.split('type=')[1]
    if res:
        tab=pa.concat_tables(res, promote_options='permissive')
        pq.write_table(tab, f'{OUT}/{name}.parquet')
        print(name, tab.num_rows, round(time.time()-t0),'s', flush=True)
    else: print(name, 0, round(time.time()-t0),'s', flush=True)
