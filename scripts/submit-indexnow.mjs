// Pings IndexNow (Bing, Yandex, and other participating engines) with every
// URL currently in the site's sitemap, so they re-crawl without waiting for
// their normal schedule. Google does not support IndexNow — for Google, use
// Search Console's sitemap submission / URL inspection tool instead.
//
// Run this after deploying to your real production domain (not the
// temporary *.vercel.app one), whenever you've published new pages
// (e.g. new litters or blog posts) and want faster re-indexing.
//
// Usage: node scripts/submit-indexnow.mjs https://your-real-domain.com

const siteUrl = process.argv[2];

if (!siteUrl) {
  console.error("Usage: node scripts/submit-indexnow.mjs https://your-domain.com");
  process.exit(1);
}

const KEY = "2b5aead34f043001820a369cc7917a25";

async function main() {
  const sitemapRes = await fetch(`${siteUrl.replace(/\/$/, "")}/sitemap.xml`);
  if (!sitemapRes.ok) {
    throw new Error(`Failed to fetch sitemap: ${sitemapRes.status}`);
  }
  const xml = await sitemapRes.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  if (urls.length === 0) {
    throw new Error("No URLs found in sitemap.");
  }

  const host = new URL(siteUrl).host;

  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: KEY,
      keyLocation: `${siteUrl.replace(/\/$/, "")}/${KEY}.txt`,
      urlList: urls,
    }),
  });

  console.log(`Submitted ${urls.length} URLs. IndexNow responded: ${res.status}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
