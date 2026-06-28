import type { MetadataRoute } from "next";

const siteUrl = "https://inforzia.io";
const lastModified = "2026-06-26T00:00:00.000Z";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/enterprise-vision-ai`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/product-flomon-vision`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/product-flomon-agent`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/use-cases`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/use-cases-2`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/solution-disaster-safety`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/solution-disaster-safety-2`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/contact-us`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/wildfire-disaster-command`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/solution-smart-farming`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/solution-logistics-distribution`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/solution-manufacturing-construction`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/solution-retail-store-management`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/solution-facility-infrastructure`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
