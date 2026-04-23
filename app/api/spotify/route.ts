import { NextRequest, NextResponse } from "next/server";

export const revalidate = 86400;

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "missing url" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) throw new Error("oembed failed");
    const data = (await res.json()) as {
      title: string;
      thumbnail_url: string;
      provider_name: string;
    };
    return NextResponse.json({
      title: data.title,
      image: data.thumbnail_url,
      subtitle: `${inferKind(url)} · ${data.provider_name}`,
      link: url,
    });
  } catch {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}

function inferKind(url: string): string {
  if (url.includes("/playlist/")) return "Playlist";
  if (url.includes("/album/")) return "Album";
  if (url.includes("/track/")) return "Track";
  if (url.includes("/artist/")) return "Artist";
  return "Spotify";
}
