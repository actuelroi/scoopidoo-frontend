import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session";
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "./routes";


export default async function middleware(req: NextRequest) {
    const session = await getSession();
    const { nextUrl } = req;

    const isLoggedIn = !!session;
    const isPublicRoute =
        publicRoutes.includes(nextUrl.pathname) ||
        nextUrl.pathname.startsWith("/product-detail/");

    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    const isApiAuthRoute = nextUrl.pathname.startsWith("/api");


    if (isApiAuthRoute) {
        // Do nothing for API auth routes
        return;
    }


    if (isAuthRoute) {
        if (isLoggedIn) {
            // Redirect logged-in users away from auth routes
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        // Allow unauthenticated users to access auth routes
        return;
    }
    if (!isLoggedIn && !isPublicRoute) {
        // Redirect unauthenticated users to the login page
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }

        const encodedCallbackUrl = encodeURIComponent(callbackUrl);

        return NextResponse.redirect(
            new URL("/auth/signin", req.url)
        );
    }

    // Allow access to public routes or logged-in users
    return;
};


// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};