import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Protected admin routes (except login)
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login";

  if (isAdminRoute && !isLoginPage) {
    if (!token) {
      const url = new URL("/admin/login", request.url);
      return NextResponse.redirect(url);
    }

    if (token.role !== "admin") {
      const url = new URL("/", request.url);
      return NextResponse.redirect(url);
    }
  }

  // Redirect away from login if already authenticated
  if (isLoginPage && token?.role === "admin") {
    const url = new URL("/admin/dashboard", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
