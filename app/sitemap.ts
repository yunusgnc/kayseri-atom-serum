import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/hizmetler`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}/hizmetler/${service.slug}`,
    lastModified: new Date("2026-07-14"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
