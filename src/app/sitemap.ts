import type { MetadataRoute } from "next";

const siteUrl = "https://inforzia.io";
const lastModified = "2026-06-24T00:00:00.000Z";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
