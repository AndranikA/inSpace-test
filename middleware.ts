import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/users', '/products']
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  if (token && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/users', request.url))
  }
  if (!token && protectedRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
