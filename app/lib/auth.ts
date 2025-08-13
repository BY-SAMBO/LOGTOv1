import { cookies } from 'next/headers';

export async function getAuthInfo() {
  try {
    const cookieStore = await cookies();
    
    // Simple cookie-based auth check
    const userCookie = cookieStore.get('logto:user');
    const accessToken = cookieStore.get('logto:accessToken');
    
    if (userCookie && accessToken) {
      try {
        const userData = JSON.parse(userCookie.value);
        return {
          isAuthenticated: true,
          user: userData
        };
      } catch {
        return {
          isAuthenticated: false,
          user: null
        };
      }
    }
    
    return {
      isAuthenticated: false,
      user: null
    };
  } catch (error) {
    console.error('Auth check error:', error);
    return {
      isAuthenticated: false,
      user: null
    };
  }
}

export type AuthInfo = {
  isAuthenticated: boolean;
  user: Record<string, unknown> | null;
};