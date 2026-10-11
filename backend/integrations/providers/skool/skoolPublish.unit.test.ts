import { skoolReleaseUrl } from "./skoolPublish.js";

describe("skoolReleaseUrl", () => {
    it("builds community + post slug URLs", () => {
        expect(skoolReleaseUrl("6th-post", "openquok-2201")).toBe(
            "https://www.skool.com/openquok-2201/6th-post"
        );
    });

    it("handles missing post slug (e.g. comment API response) without throwing", () => {
        expect(skoolReleaseUrl(undefined, "openquok-2201")).toBe("https://www.skool.com/openquok-2201");
        expect(skoolReleaseUrl(null, "openquok-2201")).toBe("https://www.skool.com/openquok-2201");
    });

    it("falls back to post-only path when community slug is unknown", () => {
        expect(skoolReleaseUrl("6th-post", "")).toBe("https://www.skool.com/6th-post");
    });

    it("passes through absolute URLs", () => {
        expect(skoolReleaseUrl("https://www.skool.com/openquok-2201/6th-post", "ignored")).toBe(
            "https://www.skool.com/openquok-2201/6th-post"
        );
    });

    it("returns Skool home when both segments are empty", () => {
        expect(skoolReleaseUrl("", "")).toBe("https://www.skool.com/");
        expect(skoolReleaseUrl(undefined, undefined)).toBe("https://www.skool.com/");
    });
});
