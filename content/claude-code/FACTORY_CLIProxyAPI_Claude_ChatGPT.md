---
title: "Using Factory CLI (Droid) with CLIProxyAPI for Custom Models"
date: 2025-09-30
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "factory-cliproxyapi-claude-chatgpt"
category: "claude-code"
excerpt: "This guide explains how to run Factory's Droid CLI against personal subscriptions instead of pay-per-token API keys by placing CLIProxyAPI between Fac..."
tags:
  - claude-code
  - ai-coding
reading_time: 6
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

# Using Factory CLI (Droid) with CLIProxyAPI for Custom Models

---

> ## ⚠️ IMPORTANT DISCLAIMER
>
> **This guide describes a proof-of-concept configuration for educational and experimental purposes only.**
>
> **By using this method, you acknowledge and accept the following:**
>
> - **Terms of Service Risk**: This approach may violate the Terms of Service of AI model providers (Anthropic, OpenAI, etc.). You are solely responsible for ensuring compliance with all applicable terms and policies.
>
> - **Account Risk**: Model providers may detect this usage pattern and take punitive action, including but not limited to account suspension, permanent ban, or loss of access to paid subscriptions.
>
> - **No Guarantees**: Providers may change their APIs, authentication mechanisms, or policies at any time, rendering this method inoperable without notice.
>
> - **Assumption of Risk**: By proceeding, you assume all legal, financial, and technical risks. The authors and contributors of this guide and CLIProxyAPI bear no responsibility for any consequences arising from your use of this method.
>
> **Use at your own risk. Proceed only if you understand and accept these risks.**

---

## Executive Summary

This guide explains how to run Factory's Droid CLI against personal subscriptions instead of pay-per-token API keys by placing CLIProxyAPI between Factory and the upstream providers. Two flows are covered:

1. Claude Code Max (Anthropic OAuth) → exposes Anthropic's Messages API through `provider: "anthropic"`
2. ChatGPT Plus/Pro (OpenAI OAuth) → exposes GPT‑5 / GPT‑5 Codex via `provider: "openai"` (Responses API)

CLIProxyAPI swaps the dummy API key that Factory sends for the real OAuth bearer token, auto-refreshes tokens, and keeps request/response bodies in the provider's native format.

## Architecture Overview

```
Factory CLI  →  [Anthropic format + API key]  →
                      CLIProxyAPI  →  [Anthropic format + OAuth]      →  Anthropic API

Factory CLI  →  [OpenAI Responses schema + API key]  →
                      CLIProxyAPI  →  [OpenAI Responses schema + OAuth]  →  ChatGPT Codex API
```

## Prerequisites

- Linux/macOS/WSL2 host
- Go 1.24+ and Git
- Active Claude Code Max (or Claude Pro) subscription for Anthropic login
- Active ChatGPT Plus/Pro subscription for OpenAI Codex login
- Factory CLI installed (`curl -fsSL https://app.factory.ai/cli | sh`)

Open outbound HTTPS to `api.anthropic.com` and `chatgpt.com` (CLIProxyAPI defaults to port 8317 locally, OAuth callbacks use 54545 for Anthropic and 1455 for OpenAI).

## Step 1: Install Go (if needed)

```bash
wget https://go.dev/dl/go1.25.1.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.25.1.linux-amd64.tar.gz
export PATH=/usr/local/go/bin:$PATH
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$PATH
go version
```

## Step 2: Clone & Build CLIProxyAPI

> **Note:** Claude 4.5 Sonnet support requires [v6.0.15+](https://github.com/router-for-me/CLIProxyAPI/releases/tag/v6.0.15) of CLIProxyAPI.

```bash
git clone https://github.com/luispater/CLIProxyAPI.git
cd CLIProxyAPI
go build -o cli-proxy-api ./cmd/server
```

### Temporary patch for ChatGPT Responses

> Note: The step 1 code change below is fixed and no longer required in [v6.0.10+ of CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI/releases/tag/v6.0.10)

~~Until the upstream project merges the Codex compatibility fix, remove the unsupported
token-limit fields from the Codex Responses translator:~~

1. Edit `internal/translator/codex/openai/responses/codex_openai-responses_request.go` and delete both `max_output_tokens` and `max_completion_tokens` before forwarding:

   ```go
   // Codex Responses rejects token limit fields, so remove them before forwarding.
   rawJSON, _ = sjson.DeleteBytes(rawJSON, "max_output_tokens")
   rawJSON, _ = sjson.DeleteBytes(rawJSON, "max_completion_tokens")
   ```

2. Run `gofmt` on the file:

   ```bash
   gofmt -w internal/translator/codex/openai/responses/codex_openai-responses_request.go
   ```

3. Rebuild the binary:

   ```bash
   go build -o cli-proxy-api ./cmd/server
   ```

This mirrors the fix that prevents OpenAI from rejecting requests with `{"detail":"Unsupported parameter: max_output_tokens"}`.

## Step 3: Configure the proxy (`config.yaml`)

```yaml
port: 8317
remote-management:
  allow-remote: false
  secret-key: ""
auth-dir: "~/.cli-proxy-api"
debug: false
logging-to-file: false
usage-statistics-enabled: true
proxy-url: ""
request-retry: 3
quota-exceeded:
  switch-project: true
  switch-preview-model: true
auth:
  providers: []
generative-language-api-key: []
```

### Optional runtime toggles

- Set `debug: true` to enable extra logging
- Set `request-log: true` to capture full request/response bodies under `logs/`

## Step 4: OAuth Authentication Setup

### 4.1 Claude Code Max / Claude Pro

```bash
./cli-proxy-api --claude-login
```

- Launches browser on port 54545 to complete authentication
- Saves token file at `~/.cli-proxy-api/claude-<email>.json`

### 4.2 ChatGPT Plus/Pro (Codex)

```bash
./cli-proxy-api --codex-login
```

- Launches browser on port 1455 to finish ChatGPT OAuth
- Stores token at `~/.cli-proxy-api/codex-<email>.json`

#### Headless / remote tip

When running on a server without a browser:

1. Start the login command (`--claude-login` or `--codex-login`). Copy the printed authorization URL.
2. Paste the URL into a browser on your local machine.
3. After approving access, the browser fails to reach the callback (because the user is remote) and shows a `http://127.0.0.1:<port>/callback?...` URL.
4. Copy that full failed redirect URL.
5. In another SSH session to the headless server, run `curl '<copied_url>'` to complete the flow.

This avoids SSH port forwarding while still delivering the OAuth code to the proxy.

## Step 5: Configure Factory CLI (`~/.factory/config.json`)

```json
{
  "custom_models": [
    {
      "model": "claude-sonnet-4-5-20250929",
      "base_url": "http://localhost:8317",
      "api_key": "dummy-not-used",
      "provider": "anthropic"
    },
    {
      "model": "claude-opus-4-1-20250805",
      "base_url": "http://localhost:8317",
      "api_key": "dummy-not-used",
      "provider": "anthropic"
    },
    {
      "model": "claude-sonnet-4-20250514",
      "base_url": "http://localhost:8317",
      "api_key": "dummy-not-used",
      "provider": "anthropic"
    },
    {
      "model": "gpt-5",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    },
    {
      "model": "gpt-5-minimal",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    },
    {
      "model": "gpt-5-low",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    },
    {
      "model": "gpt-5-medium",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    },
    {
      "model": "gpt-5-high",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    },
    {
      "model": "gpt-5-codex",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    },
    {
      "model": "gpt-5-codex-low",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    },
    {
      "model": "gpt-5-codex-medium",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    },
    {
      "model": "gpt-5-codex-high",
      "base_url": "http://localhost:8317/v1",
      "api_key": "dummy-not-used",
      "provider": "openai"
    }
  ]
}
```

**Why `/v1`?** Factory appends `/messages` automatically for `provider: "anthropic"`, so the proxy sees `/v1/messages` even when the base URL ends at `:8317`. For `provider: "openai"`, Factory appends only `/responses`, so we add `/v1` to the base URL to match CLIProxyAPI's routing.

> The Codex executor in CLIProxyAPI understands the full GPT‑5 family above. The "minimal"/"low"/"medium"/"high" variants all fan in to the `gpt-5` backend with different `reasoning.effort` settings; the `gpt-5-codex-*` variants do the same on the Codex endpoint. Additional aliases such as `codex-mini-latest` are auto-registered but are optional.

## Step 6: Run the proxy

```bash
./cli-proxy-api --config config.yaml
```

Or run in background (`nohup`), or as a systemd service (see below). The startup log should mention "server clients and configuration updated: …".

## Step 7: Use Factory CLI

```bash
droid
/model   # pick claude-sonnet-4-5-20250929, claude-opus-4-1-20250805, gpt-5, etc.
```

Factory now calls the proxy with the dummy key; CLIProxyAPI injects the OAuth bearer token and relays responses.

## Production options

### systemd service

Create `/etc/systemd/system/cli-proxy-api.service` (adjust paths):

```ini
[Unit]
Description=CLI Proxy API bridge for Factory
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/CLIProxyAPI
ExecStart=/path/to/CLIProxyAPI/cli-proxy-api --config config.yaml
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Then:

```bash
sudo systemctl daemon-reload
sudo systemctl enable cli-proxy-api
sudo systemctl start cli-proxy-api
sudo systemctl status cli-proxy-api
```

### Docker

```dockerfile
FROM golang:1.25-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o cli-proxy-api ./cmd/server

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root
COPY --from=builder /app/cli-proxy-api .
COPY config.yaml .
CMD ["./cli-proxy-api", "--config", "config.yaml"]
```

Build and run:

```bash
docker build -t cli-proxy-api .
docker run -d -p 8317:8317 \
  -v ~/.cli-proxy-api:/root/.cli-proxy-api \
  -v $(pwd)/config.yaml:/root/config.yaml \
  cli-proxy-api
```

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `404 /responses` | Missing `/v1` on OpenAI base URL | Use `http://localhost:8317/v1` |
| `401/403` responses | OAuth token expired | Re-run `--claude-login` / `--codex-login` |
| `A.match is not a function` in Factory | Client bug parsing tool call | Provide logs to Factory (proxy log captures SSE stream) |
| `listen tcp :8317: bind` | Port already used | Stop existing process or change `port` |

Enable `debug: true` for verbose logging, `request-log: true` to capture full payloads in `logs/` for audits.

## Security Checklist

- Token files in `~/.cli-proxy-api` are 0600; never commit them
- Proxy binds to localhost only
- All upstream traffic is HTTPS
- Auto-refresh keeps tokens current (watch logs for refresh errors)

## Supported models snapshot

- Claude: `claude-sonnet-4-5-20250929` (Claude 4.5 Sonnet), `claude-opus-4-1-20250805`, `claude-sonnet-4-20250514` (and others loaded from registry)
- OpenAI: `gpt-5`, `gpt-5-codex`, `gpt-5-…` family, `codex-mini-latest`

## Verification checklist

1. `./cli-proxy-api --config config.yaml`
2. `droid` → `/model` → select custom model
3. Run a quick command (e.g. "what day is it?") and verify proxy logs show `200` responses

## References

- CLIProxyAPI repo: https://github.com/luispater/CLIProxyAPI
- Factory CLI docs: https://docs.factory.ai/cli
- Anthropic docs: https://docs.anthropic.com
- ChatGPT Codex flow (same OAuth used by codex-cli)
