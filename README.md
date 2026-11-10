# PingAura AI for VS Code

Bring [PingAura AI](https://www.pingaura.ai) into VS Code chat. Ask about your brand's AI visibility, citations, site audits, prompts and content without leaving the editor.

The extension registers the PingAura AI MCP server, so the tools are available in Chat in Agent mode and in any other MCP-aware chat in VS Code.

## Get started

1. Install the extension.
2. Open Chat in **Agent** mode and ask, for example: "What is my AI visibility score this week?"
3. The first time, VS Code opens the PingAura AI sign-in in your browser. Approve it.

You need a PingAura AI workspace with at least one domain. Sign-in uses OAuth, so no API key is stored in VS Code.

## Commands

| Command | What it does |
|---|---|
| PingAura AI: Get Started | Opens the getting-started walkthrough |
| PingAura AI: Open Dashboard | Opens PingAura AI in your browser |
| PingAura AI: Open MCP Docs | Opens the list of tools and setup guides |

## Settings

| Setting | Default |
|---|---|
| `pingaura.serverUrl` | `https://www.pingaura.ai/api/mcp` |

Leave the default unless PingAura AI support gives you another URL.

## Privacy

The extension sends nothing on its own. VS Code connects to the PingAura AI MCP server only when chat calls one of its tools, and only with your approval. See the [PingAura AI privacy policy](https://www.pingaura.ai/privacy-policy).

## Requirements

VS Code 1.101 or later.

## Support

Open an issue on [GitHub](https://github.com/pingaura-ai/pingaura-vscode/issues) or email support@pingaura.ai. Report security issues as described in [SECURITY.md](SECURITY.md).
