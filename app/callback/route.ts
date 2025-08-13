import { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const fullUrl = request.url;
    
    console.log('=== CALLBACK DEBUG ===');
    console.log('Full URL:', fullUrl);
    console.log('Code present:', !!code);
    console.log('State:', state);
    console.log('All params:', Object.fromEntries(searchParams.entries()));
    
    if (code) {
      console.log('✅ CODE FOUND - Redirecting to /home');
      const homeUrl = process.env.NODE_ENV === 'production' 
        ? 'https://xtrategia.industriasgalgo.com/home'
        : 'http://localhost:3001/home';
      return Response.redirect(homeUrl, 302);
    } else {
      console.log('❌ NO CODE - Redirecting to /');
      const rootUrl = process.env.NODE_ENV === 'production'
        ? 'https://xtrategia.industriasgalgo.com/'
        : 'http://localhost:3001/';
      return Response.redirect(rootUrl, 302);
    }
  } catch (error) {
    console.error('❌ Callback error:', error);
    return Response.redirect(new URL('/', request.url), 302);
  }
}