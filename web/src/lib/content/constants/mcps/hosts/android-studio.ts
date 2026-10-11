import { icons } from '$data/icons';

import type { McpLandingSeed } from '$lib/content/constants/mcps/types';
import { faqHrefDocs, faqLink, publicFaqHref } from '$lib/content/utils/publicFaqLinks';

export const android_studioMcpSeed = {
	slug: 'android-studio',
	label: 'Android Studio',
	mcpClient: 'Android Studio',
	icon: icons.AndroidStudio.name,
	hubDescription:
		'Add OpenQuok in Android Studio MCP settings. Gemini Agent mode can schedule YouTube and every other channel.',
	heroDescription:
		'Android Studio ships Gemini in Agent mode with MCP tools for your app project. Connect OpenQuok over HTTP MCP. Gemini drafts and schedules social posts. Publish now, schedule for later, or approve drafts on the calendar or kanban.',
	metaDescription:
		'Connect OpenQuok MCP to Android Studio. Schedule social posts from Gemini Agent mode. Publish now, schedule for later, or approve drafts on the calendar or kanban.',
	workflowPhrase: 'your IDE',
	setupSteps: [
		'Install Android Studio from developer.android.com and enable Gemini',
		'Create an opo_ programmatic token under Account → Settings → Developers → Access.',
		'Open Settings → Tools → AI → MCP Servers, enable MCP, and paste the openquok block into mcp.json.',
		'Start a Gemini chat, type /mcp to confirm openquok tools, then ask: List my connected social media accounts.'
	],
	overrides: {
		faqPatchesByTitle: {
			'Why use Android Studio MCP instead of an agent host?': {
				description: `${faqLink(publicFaqHref.openclawLanding, 'OpenClaw')} and ${faqLink(publicFaqHref.grokBotLanding, 'Grok Bot')} fit always-on chat. Android Studio fits when you ship mobile apps and want Gemini beside your codebase. Pick Android Studio for Gemini-first MCP in the IDE — YouTube is a natural example for video and Shorts. Pick ${faqLink(publicFaqHref.antigravityCliLanding, 'Antigravity CLI')} when the terminal is home base.`
			},
			'How do I verify the connection?': {
				description: `After you save MCP settings, open Gemini chat and run the ${faqLink(faqHrefDocs('mcp-setup-guides/android-studio'), 'Android Studio MCP setup guide')} verify prompt: List my connected social media accounts.`
			}
		}
	}
} satisfies McpLandingSeed;
