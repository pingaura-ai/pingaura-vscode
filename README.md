# PingAura AI: Agentic Marketing

Run your marketing from VS Code chat. Your agent uses [PingAura AI](https://www.pingaura.ai) to see how ChatGPT, Gemini, Perplexity and Claude talk about your brand, then fixes your site right in your code.

## Fix your site

Open your website's project and ask:

> Fix the top site audit issues PingAura found.

The agent reads the issues from your latest PingAura audit (missing schema, weak titles, pages AI crawlers can't read), edits the files, and marks each issue fixed in PingAura. Review the changes like any other diff.

## Other things to ask

- What's our AI visibility this week, and what changed?
- Which competitors get recommended instead of us?
- Draft an article for the prompt we're losing most.

## Setup

1. Install the extension.
2. Open Chat in Agent mode and ask one of the questions above.
3. Sign in to PingAura AI when your browser opens.

You need a PingAura AI workspace with at least one domain. No API key is stored in VS Code.

## Commands

- **PingAura AI: Get Started**
- **PingAura AI: Open Dashboard**
- **PingAura AI: Open MCP Docs**

## Settings

`pingaura.serverUrl` defaults to `https://www.pingaura.ai/api/mcp`. Only change it if support asks you to.

## Support

[GitHub issues](https://github.com/pingaura-ai/pingaura-vscode/issues) or support@pingaura.ai. For security issues, see [SECURITY.md](SECURITY.md).
