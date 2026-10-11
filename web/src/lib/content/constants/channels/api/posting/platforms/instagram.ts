import { PUBLIC_API_FORMAT_EXAMPLES_BY_PLATFORM } from '$lib/content/constants/channels/api/_shared/formatExamples';
import { buildPublicApiPlatformPage, SHARED_PUBLIC_API_SEO_KEYWORDS } from '$lib/content/constants/channels/api/_shared/shared';
import type { PublicApiPlatformPageViewModel } from '$lib/content/constants/channels/api/_shared/types';

const SLUG = 'instagram' as const;

const KEYWORDS = [
	...SHARED_PUBLIC_API_SEO_KEYWORDS,
	'Instagram posting API',
	'Instagram scheduling API',
	'Instagram Reels API',
	'schedule Instagram via API'
];

export const instagramPublicApiPostingPlatform: PublicApiPlatformPageViewModel =
	buildPublicApiPlatformPage({
		slug: SLUG,
		capability: 'posting',
		formatExamples: PUBLIC_API_FORMAT_EXAMPLES_BY_PLATFORM[SLUG].posting,
		heroDescription:
			'Publish feed posts, Reels, carousels, and Stories with post type and collaborator settings through POST /public/posts.',
		metaTitle: 'Instagram Posting API',
		metaDescription:
			'Post to Instagram with OpenQuok POST /public/posts. Feed, Reels, carousels, and Stories with provider settings from one JSON payload.',
		keywords: KEYWORDS
	});
