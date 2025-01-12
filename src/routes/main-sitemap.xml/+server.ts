export async function GET() {
  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>https://sebastianjans.de</loc>
        <lastmod>2023-03-03T13:15:01+00:00</lastmod>
      </url>
      <url>
        <loc>https://sebastianjans.de/works</loc>
        <lastmod>2023-02-27T18:04:35+00:00</lastmod>
      </url>
      <url>
        <loc>https://sebastianjans.de/skills</loc>
        <lastmod>2023-02-24T02:01:07+00:00</lastmod>
      </url>
      <url>
        <loc>https://sebastianjans.de/contact</loc>
        <lastmod>2023-02-24T02:01:07+00:00</lastmod>
      </url>
    </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    },
  );
}
