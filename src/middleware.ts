import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAdminAuthToken } from "./api/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const res = await checkAdminAuthToken(segments[1])

  if (segments.length > 2 || !res) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
