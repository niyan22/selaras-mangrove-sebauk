import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mangrove-sebauk.vercel.app";

const routes = [
  { path: "", priority: 1 },
  { path: "/program", priority: 0.8 },
  { path: "/dampak", priority: 0.8 },
  { path: "/linimasa", priority: 0.7 },
  { path: "/galeri", priority: 0.7 },
  { path: "/peta", priority: 0.7 },
  { path: "/tim", priority: 0.6 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority
  }));
}
