# Work on the game in the browser: OpenCode + FreeLLMAPI

This setup runs everything in a GitHub Codespace (a computer in the cloud that you use
in a browser tab). You install nothing on your own computer.

- **FreeLLMAPI** collects the free tiers of many AI providers behind one address
  (port 3001).
- **OpenCode** is the coding agent. It uses FreeLLMAPI for its AI models and works on
  the game code.

## Start the Codespace (each time)

1. On GitHub, open this repository.
2. Click **Code** → **Codespaces** → **Create codespace on main** (the first time), or
   click your existing Codespace (after the first time).
3. Wait until the terminal shows `FreeLLMAPI: running on port 3001`.
   The first start takes some minutes.

## First-time setup (one time only)

### 1. Open the FreeLLMAPI dashboard

1. At the bottom of the window, click the **PORTS** tab.
2. Find **FreeLLMAPI dashboard (3001)**. Click the globe icon to open it in a new tab.
3. Make your dashboard account (email and password). This account is only for this server.

### 2. Add provider keys

1. Get free API keys from one or more providers. Good first choices:
   - Google AI Studio (Gemini): https://aistudio.google.com/apikey
   - Groq: https://console.groq.com/keys
   - Cerebras: https://cloud.cerebras.ai
   - OpenRouter: https://openrouter.ai/keys
2. In the dashboard, open the **Keys** page. Add each key.
3. On the same page, copy the **unified API key**. You need it in the next step.

### 3. Connect OpenCode

In the Codespace terminal, type:

```bash
bash .devcontainer/connect-opencode.sh
```

Paste the unified API key when the script asks. (The key does not show when you paste.
This is correct.)

## Use OpenCode

In the terminal, type:

```bash
opencode
```

Type what you want in plain words. Examples:

- "Read README.md and ENGINE.md. Then tell me how the dog system works."
- "Add a new food item: canned peaches. Follow the content rules."
- "Run npm test and fix any failures."

OpenCode reads `AGENTS.md` for the project rules. The model `auto` lets FreeLLMAPI select
a model for each request.

To see the game, type `npm run serve` in a second terminal. Then open port 8080 in the
**PORTS** tab.

## Save your work

OpenCode changes files in the Codespace. To keep the changes, commit and push them
(OpenCode can do this for you), then open a pull request on GitHub.

## Important

- **Stop the Codespace when you finish** (GitHub → Codespaces → ⋯ → Stop). A free
  account has a monthly limit of Codespace hours. A stopped Codespace keeps your
  dashboard account, provider keys and OpenCode setup.
- If you **delete or rebuild** the Codespace, the dashboard data goes away. Then do the
  first-time setup again.
- **Do not make port 3001 public.** Keep it private (the default). Anyone with the address
  of a public port can use your keys.
- Free AI models are less capable than paid models. For big changes, ask for small steps.
- Use personal accounts and keys only. Do not use work accounts or work data.

## If something goes wrong

| Problem | What to do |
| --- | --- |
| The dashboard does not open | Run `bash .devcontainer/start-freellmapi.sh` |
| You need the server log | Run `docker logs freellmapi` |
| OpenCode says "Invalid API key" | Run `bash .devcontainer/connect-opencode.sh` again |
| All requests fail | In the dashboard, check that your provider keys show a green dot |
