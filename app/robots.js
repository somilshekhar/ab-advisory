export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/favicon.ico"],
      },
    ],
    sitemap: "https://abadvisorygroup.in/sitemap.xml",
    host: "https://abadvisorygroup.in",
  };
}
