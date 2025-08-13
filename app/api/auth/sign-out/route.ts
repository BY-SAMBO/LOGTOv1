import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Clear any authentication cookies and redirect to home
    const response = NextResponse.redirect(new URL('/', request.url));
    
    // Clear Logto related cookies
    response.cookies.delete('logto:user');
    response.cookies.delete('logto:idToken');
    response.cookies.delete('logto:accessToken');
    response.cookies.delete('logto:refreshToken');
    
    return response;
  } catch (error) {
    console.error('Sign out error:', error);
    // Return a redirect to home as fallback
    return NextResponse.redirect(new URL('/', request.url));
  }
}