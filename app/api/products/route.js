import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q");

  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter((post) =>
      post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  }

  console.log(currentPosts);

  return NextResponse.json({ currentPosts });
}

export async function POST(req) {
  const body = await req.json();

  return NextResponse.json({ body });
}
