"use server"

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const secretKey = process.env.JWT_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

 export interface UserSessionData{
    id:string
    [key:string]:string|undefined
}

const SESSION_DURATION = 3*60*60*1000

export async function createUserSession(data: UserSessionData): Promise<void> {
  const expiresAt = new Date(Date.now() + SESSION_DURATION);
  
  const token = await new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(encodedKey);

  const cookieStore = await cookies();
  cookieStore.set('userSession', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}

export async function getUserSession(): Promise<UserSessionData | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('userSession')?.value;

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, encodedKey);
    return payload as UserSessionData;
  } catch (error) {
    return null;
  }
}
  
   // ✅ NOUVELLE FONCTION pour le middleware
export async function getUserSessionFromRequest(request: NextRequest): Promise<UserSessionData | null> {
  const token = request.cookies.get('userSession')?.value;

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, encodedKey);
    return payload as UserSessionData;
  } catch (error) {
    return null;
  }
}


// Supprimer la session
export async function deleteUserSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('userSession');
}
