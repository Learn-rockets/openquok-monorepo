import { PUBLIC_API_FORMAT_EXAMPLES_BY_PLATFORM } from '$lib/content/constants/channels/api/_shared/formatExamples';
import { buildPublicApiPlatformPage, SHARED_PUBLIC_API_SEO_KEYWORDS } from '$lib/content/constants/channels/api/_shared/shared';
import type { PublicApiPlatformPageViewModel } from '$lib/content/constants/channels/api/_shared/types';

const SLUG = 'tiktok' as const;

const KEYWORDS = [
	...SHARED_PUBLIC_API_SEO_KEYWORDS,
	'TikTok posting API',
	'TikTok scheduling API',
	'TikTok Content Posting API',
	'schedule TikTok via API'
];

export const tiktokPublicApiPostingPlatform: PublicApiPlatformPageViewModel = buildPublicApiPlatformPage({
	slug: SLUG,
	capability: 'posting',
	formatExamples: PUBLIC_API_FORMAT_EXAMPLES_BY_PLATFORM[SLUG].posting,
	heroDescription:
		'Publish vertical videos and image carousels with privacy, inbox upload, and interaction settings through POST /public/posts.',
	metaTitle: 'TikTok Posting API',
	metaDescription:
		'Post TikTok videos and photo carousels with OpenQuok POST /public/posts. Direct publish or inbox upload, privacy toggles, and structured API responses.',
	keywords: KEYWORDS
});
