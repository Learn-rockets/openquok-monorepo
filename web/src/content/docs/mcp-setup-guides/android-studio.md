---
title: Android Studio
description: Connect OpenQuok MCP to Gemini in Android Studio via MCP server settings and mcp.json.
order: 9
lastUpdated: 2026-10-11
---

<script>
import { Badge, Callout, CardGrid, DocsExternalLink, LinkCard, Steps, TabItem, Tabs } from '$lib/ui/components/docs/mdx/index.js';
</script>

## Prerequisites

- <DocsExternalLink href="https://developer.android.com/studio">Android Studio</DocsExternalLink> with Gemini enabled.
- An OpenQuok programmatic token (<Badge text="opo_" variant="default" />).

## MCP configuration

Android Studio stores MCP servers in <Badge text="mcp.json" variant="path" /> under the IDE configuration directory. Enable MCP in <Badge text="Settings" variant="default" /> → <Badge text="Tools" variant="default" /> → <Badge text="AI" variant="default" /> → <Badge text="MCP Servers" variant="default" />. See <DocsExternalLink href="https://developer.android.com/studio/gemini/add-mcp-server">Add an MCP server</DocsExternalLink> for field names and transport notes.

Remote HTTP servers use <Badge text="httpUrl" variant="param" /> (streamable HTTP). Some legacy endpoints use <Badge text="url" variant="param" /> for SSE — OpenQuok uses streamable HTTP on <Badge text="/mcp" variant="path" />.

<Callout type="note" title="Antigravity CLI">
<p>If you use Gemini from the terminal instead of the IDE, see <a href="/docs/mcp-setup-guides/antigravity-cli">Antigravity CLI</a> (<Badge text="~/.gemini/config/mcp_config.json" variant="path" /> with <Badge text="serverUrl" variant="param" />).</p>
</Callout>

## Setup

<Steps
	howToName="Android Studio MCP setup"
	howToDescription="Connect OpenQuok MCP to Gemini in Android Studio"
>

### Generate your token

In the OpenQuok app, open <Badge text="Account" variant="default" /> → <Badge text="Settings" variant="default" /> → <Badge text="Developers" variant="default" /> → <Badge text="Access" variant="default" />. Create an OAuth app if prompted, then generate an <Badge text="opo_…" variant="default" /> token.

![Generate programmatic token](/docs/_assets/mcp-setup-guides/generate-programmatic-token.webp)

### Add OpenQuok in MCP Servers

Open <Badge text="Settings" variant="default" /> → <Badge text="Tools" variant="default" /> → <Badge text="AI" variant="default" /> → <Badge text="MCP Servers" variant="default" />. Enable MCP servers and merge the <Badge text="openquok" variant="default" /> block:

<Tabs items={["Authorization header", "API key in URL"]}>
<TabItem label="Authorization header">

```json
{
  "mcpServers": {
    "openquok": {
      "httpUrl": "https://api.openquok.com/mcp",
      "headers": {
        "Authorization": "Bearer opo_your_programmatic_token"
      }
    }
  }
}
```

</TabItem>
<TabItem label="API key in URL">

```json
{
  "mcpServers": {
    "openquok": {
      "httpUrl": "https://api.openquok.com/mcp/opo_your_programmatic_token"
    }
  }
}
```

</TabItem>
</Tabs>

Click <Badge text="OK" variant="default" />. Android Studio saves the file and attempts to connect. Use <Badge text="Start Login" variant="default" /> only when the server requires OAuth — OpenQuok uses your programmatic token instead.

### Verify in Gemini chat

Open Gemini chat in Android Studio. Type <Badge text="/mcp" variant="default" /> to list tools, then ask your agent:

> List my connected social media accounts

You should see OpenQuok return your connected channels.

</Steps>

## Related

<CardGrid>
<LinkCard title="Antigravity CLI" description="Connect OpenQuok in ~/.gemini/config/mcp_config.json for agy." href="/docs/mcp-setup-guides/antigravity-cli" />
<LinkCard title="MCP client setup" description="Copy-paste configs from Developers → Access." href="/docs/getting-started-for-mcp/setup" />
<LinkCard title="YouTube channel" description="Gemini-first example — video and Shorts on OpenQuok." href="/channels/youtube" />
<LinkCard title="Android Studio landing" description="Schedule social media from Android Studio." href="/agents/android-studio" />
</CardGrid>
