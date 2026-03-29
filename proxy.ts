import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.endsWith(".html") || pathname.endsWith(".php")) {
    const cleanPath = pathname.replace(/\.(html|php)$/, "");
    const url = request.nextUrl.clone();
    url.pathname = cleanPath;
    return NextResponse.redirect(url, { status: 301 });
  }
}

export const config = {
  matcher: "/((?!_next|api|favicon|images).*)",
};
