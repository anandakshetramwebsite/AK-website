import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LEGACY_PAGE_REDIRECTS } from "@/lib/single-page-nav";

const COOKIE_NAME = "ak_admin_session";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const session = request.cookies.get(COOKIE_NAME)?.value;
    if (!session) {
      const login = new URL("/admin/login", request.url);
      login.searchParams.set("next", pathname);
      return NextResponse.redirect(login);
    }
  }

  const legacyTarget = LEGACY_PAGE_REDIRECTS[pathname];
  if (legacyTarget) {
    return NextResponse.redirect(new URL(legacyTarget, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/about-ak",
    "/school-field-trips",
    "/corporate-retreats",
    "/family-outings",
    "/cousins-get-togethers",
    "/alumni-reunions",
    "/kitty-parties",
    "/birthdays-celebrations",
    "/night-stay",
    "/life-skills-bootcamp",
    "/festival-experiences",
    "/all-experiences",
    "/gallery",
    "/blog",
    "/contact-book-now",
    "/version-1",
    "/version-2",
    "/version-3",
    "/preview",
  ],
};
