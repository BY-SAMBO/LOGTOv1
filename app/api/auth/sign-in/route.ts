import { NextRequest } from 'next/server';
import { handleSignIn } from '@logto/next/server-actions';
import { logtoConfig } from '../../../logto';

export async function GET(request: NextRequest) {
  try {
    // Handle Logto sign in initiation
    return await handleSignIn(logtoConfig);
  } catch (error) {
    console.error('Sign in error:', error);
    return new Response('Sign in failed', { status: 500 });
  }
}