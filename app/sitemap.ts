import type { MetadataRoute } from "next";

const baseUrl = "https://www.pointfs.com";

const routes = [
  "",
  "/about",
  "/shippers",
  "/carriers",
  "/carriers/partner",
  "/technology",
  "/technology/shippers",
  "/contact",
  "/request-quote",
  "/work-with-us",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
