import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { NextMiddleware, NextFetchEvent } from 'next/server';

const locales = ['en', 'hr'];
const publicPages = ["/", "/about"];
const PUBLIC_FILE = /\.(.*)$/

export default withExtraMiddleware(
    createMiddleware({
        locales: locales,
        defaultLocale: 'en'
    })
);

function withExtraMiddleware(next: NextMiddleware) {
    return async (request: NextRequest, event: NextFetchEvent) => {
        if (
            request.nextUrl.pathname.startsWith('/_next') ||
            request.nextUrl.pathname.includes('/api/') ||
            PUBLIC_FILE.test(request.nextUrl.pathname)
        ) {
            return
        }

        const url = request.nextUrl.clone();
        let token = request.cookies.get('token');
        const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en';
        const isPublicPage = url.pathname === `${locale === 'en' ? '/' : '/hr'}`

        if (token && url.pathname === `${locale === 'en' ? '/' : '/hr/'}authentication`) {
            url.pathname = `${locale === 'en' ? '/' : '/hr'}`;
            return NextResponse.redirect(url)
        }

        if (!token && isPublicPage) {
            url.pathname = `${locale === 'en' ? '/' : '/hr/'}authentication`;
            return NextResponse.redirect(url)
        }

        return next(request, event);
    };
}

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)']
};