import { NextResponse, type NextRequest } from "next/server";

export const config = {
  source: "(.*)",
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (process.env.ORIGIN) url.hostname = process.env.ORIGIN;

  return NextResponse.rewrite(url);
}
