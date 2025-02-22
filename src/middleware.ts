import { routes } from "@/shared/lib/routes";
import { getSession } from "@/shared/repository/action/session";
import { type NextRequest, NextResponse } from "next/server";

const PROTECTED_ROUTES = ["/dashboard"];

export async function middleware(req: NextRequest) {
	const session = await getSession();

	const pathname = req.nextUrl.pathname;

	// Skip middleware if the current route does not require authentication
	const isProtected = PROTECTED_ROUTES.some((route) =>
		pathname.startsWith(route),
	);
	if (!isProtected) {
		return NextResponse.next();
	}

	// Redirect to login page if user is not logged in
	if (!session.isLoggedIn) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	// Redirect to dashboard if user is logged in and trying to access the login page
	if (
		pathname.startsWith("/dashboard") &&
		routes[session.user.role].every((tab) => pathname !== tab.href)
	) {
		return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*"],
};
