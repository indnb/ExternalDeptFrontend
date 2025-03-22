import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token"); // Берём токен из cookies

    if (!token && request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"], // Применяем middleware только к /admin
};
