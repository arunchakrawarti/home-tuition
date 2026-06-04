import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
const API_URL = `${process.env.BACKEND_API_BASE_URL}/api/public/blog`;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export async function GET(request, { params }) {
  noStore();
  const { page } = params;
  try {
    const response = await fetch(`${API_URL}?page=${page}&limit=50`).then(
      (res) => res.json(),
    );

    const sitemapIndexXML = await buildSitemapIndex(response?.data);

    return new NextResponse(sitemapIndexXML, {
      headers: {
        "Content-Type": "application/xml",
        "Content-Length": Buffer.byteLength(sitemapIndexXML).toString(),
      },
    });
  } catch (error) {
    console.error("Error generating sitemap index:", error);
    return NextResponse.error();
  }
}
async function buildSitemapIndex(sitemaps) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';

  for (const post of sitemaps) {
    const { slug, createdAt } = post;

    xml += "<url>";
    xml += `<loc>${SITE_URL}/blog/${slug}</loc>`;
    xml += `<priority>1</priority>`;
    xml += `<changefreq>daily</changefreq>`;
    xml += `<lastmod>${createdAt}</lastmod>`;
    xml += "</url>";
  }

  xml += "</urlset>";
  return xml;
}
