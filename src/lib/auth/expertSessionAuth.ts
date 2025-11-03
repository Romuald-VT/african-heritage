"use server"

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const secretKey = process.env.JWT_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export interface ExpertSessionData{
    email: string
    [key:string]:string|undefined
}

const SESSION_DURATION = 3*60*60*1000

export async function createExpertSession(data: ExpertSessionData): Promise<void> {
  const expiresAt = new Date(Date.now() + SESSION_DURATION);
  
  const token = await new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(encodedKey);

  const cookieStore = await cookies();
  cookieStore.set('expertSession', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}

export async function getExpertSession(): Promise<ExpertSessionData | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('userSession')?.value;

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, encodedKey);
    return payload as ExpertSessionData;
  } catch (error) {
    return null;
  }
}

 export async function getExpertSessionFromRequest(request: NextRequest): Promise<ExpertSessionData | null> {
  const token = request.cookies.get('expertSession')?.value;

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, encodedKey);
    return payload as ExpertSessionData;
  } catch (error) {
    return null;
  }
}

// Supprimer la session
export async function deleteExpertSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('expertSession');
}
