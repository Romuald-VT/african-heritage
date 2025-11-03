import { NextRequest, NextResponse } from 'next/server';
import { getUserSessionFromRequest } from './lib/auth/userSessionAuth';
import { getExpertSessionFromRequest} from './lib/auth/expertSessionAuth';

// Routes réservées à l'admin
const adminProtectedRoutes = '/dashboard';
// Routes réservées au client
const customerProtectedRoutes = '/panel';

// Pages d'authentification
const adminAuthRoutes = '/admin';
const customerAuthRoutes = '/login';
const userRegistrationRoute = '/registration';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const userSession = await getUserSessionFromRequest(request);
  const expertSession = await getExpertSessionFromRequest(request);

  // --- ADMIN ---
  
  // Si sur page login admin avec session admin → dashboard
  if (pathname === adminAuthRoutes && expertSession) {
    return NextResponse.redirect(new URL(adminProtectedRoutes, request.url));
  }

  // Si sur route protégée admin sans session → login admin
  if (pathname.startsWith(adminProtectedRoutes) && !expertSession) {
    const url = new URL(adminAuthRoutes, request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  // --- CLIENT ---

  // Si sur page login client avec session client → panel
  if (pathname === customerAuthRoutes && userSession) {
    return NextResponse.redirect(new URL(customerProtectedRoutes, request.url));
  }

  // Si sur inscription avec session client → panel
  if (pathname === userRegistrationRoute && userSession) {
    return NextResponse.redirect(new URL(customerProtectedRoutes, request.url));
  }

  // Si sur route protégée client sans session → login client
  if (pathname.startsWith(customerProtectedRoutes) && !userSession) {
    const url = new URL(customerAuthRoutes, request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};