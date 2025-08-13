import { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';
import { logtoConfig } from '../../../logto';

export async function GET(_request: NextRequest) {
  try {
    // Redirect to Logto sign in
    const signInUrl = `${logtoConfig.endpoint}/oidc/auth?client_id=${logtoConfig.appId}&redirect_uri=${encodeURIComponent(logtoConfig.baseUrl + '/callback')}&response_type=code&scope=openid profile&state=signin`;
    redirect(signInUrl);
  } catch (error) {
    console.error('Sign in error:', error);
    return new Response('Sign in failed', { status: 500 });
  }
}