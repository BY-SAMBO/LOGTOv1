import { NextRequest, NextResponse } from 'next/server';
import { handleSignOut } from '@logto/next/server-actions';
import { logtoConfig } from '../../../logto';

export async function POST(request: NextRequest) {
  try {
    // Handle Logto sign out
    const response = await handleSignOut(logtoConfig, '/');
    return response;
  } catch (error) {
    console.error('Sign out error:', error);
    // Return a redirect to home as fallback
    return NextResponse.redirect(new URL('/', request.url));
  }
}