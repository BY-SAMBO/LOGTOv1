import { getLogtoContext } from '@logto/next/server-actions';
import { logtoConfig } from '../logto';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function getAuthInfo() {
  try {
    const cookieStore = await cookies();
    const context = await getLogtoContext(logtoConfig, cookieStore);
    
    return {
      isAuthenticated: context.isAuthenticated,
      user: context.claims || null
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
  user: any;
};