import { describe, expect, it } from 'vitest';

import { listAvailablePublicChannelCompareLabels } from '$lib/content/constants/channels';

describe('listAvailablePublicChannelCompareLabels', () => {
	it('includes coming-soon catalog channels such as Skool for OpenQuok compare tables', () => {
		const labels = listAvailablePublicChannelCompareLabels();
		expect(labels).toContain('Skool');
	});

	it('deduplicates labels when comparePlatformLabels repeat platformLabel', () => {
		const labels = listAvailablePublicChannelCompareLabels();
		const unique = new Set(labels);
		expect(labels.length).toBe(unique.size);
	});
});
