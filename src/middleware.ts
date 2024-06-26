import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default function middleware(req: NextRequest) {
    if(req.nextUrl.pathname === "/") {
        // Track analytics event

        try {
            analytics.track('pageview', {
                page: '/',
                country: req.geo?.country
            })
        } catch (err) { console.error(err) }
    }

    return NextResponse.next()
}

export const matcher = {
    matcher: ['/']
}