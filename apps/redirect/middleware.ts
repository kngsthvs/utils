import { NextResponse } from "next/server";

export const config = {
  source: "(.*)",
};

export default async function middleware() {
  return NextResponse.redirect(process.env.DESTINATION);
}
