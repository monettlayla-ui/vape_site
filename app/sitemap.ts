import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { getProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/current-litters", priority: 0.9, changeFrequency: "daily" },
  { path: "/our-coons", priority: 0.8, changeFrequency: "weekly" },
  { path: "/our-coons/studs", priority: 0.7, changeFrequency: "weekly" },
  { path: "/our-coons/queens", priority: 0.7, changeFrequency: "weekly" },
  { path: "/our-coons/graduates", priority: 0.6, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "weekly" },
  { path: "/from-fluff-to-full-grown", priority: 0.5, changeFrequency: "monthly" },
  { path: "/our-process", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blogs", priority: 0.7, changeFrequency: "weekly" },
  { path: "/testimonials", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact-us", priority: 0.8, changeFrequency: "yearly" },
];

const CATEGORIES = ["studs", "queens", "graduates"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const { siteUrl } = siteConfig;

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const kittenEntries: MetadataRoute.Sitemap = getProducts("current-litters").map(
    (kitten) => ({
      url: `${siteUrl}/current-litters/${kitten.id}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const coonEntries: MetadataRoute.Sitemap = CATEGORIES.flatMap((category) =>
    getProducts(category).map((product) => ({
      url: `${siteUrl}/our-coons/${category}/${product.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const blogEntries: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...kittenEntries, ...coonEntries, ...blogEntries];
}
