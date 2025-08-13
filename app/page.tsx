'use client';

import { useEffect, useState } from 'react';
import DashboardContent from './components/dashboard-content';
import UnauthenticatedPage from './components/unauthenticated-page';

export default function XtrategiaDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication on client-side
    const checkAuth = async () => {
      try {
        // Simple client-side auth check using document.cookie
        const cookies = document.cookie;
        const hasUserCookie = cookies.includes('logto:user');
        const hasAccessToken = cookies.includes('logto:accessToken');
        
        if (hasUserCookie && hasAccessToken) {
          // Extract user data from cookie if available
          const userMatch = cookies.match(/logto:user=([^;]+)/);
          if (userMatch) {
            try {
              const userData = JSON.parse(decodeURIComponent(userMatch[1]));
              setUser(userData);
              setIsAuthenticated(true);
            } catch {
              setIsAuthenticated(false);
            }
          } else {
            setIsAuthenticated(true);
            setUser({ name: 'Usuario' });
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400"></div>
          <p className="mt-4 text-gray-300">Cargando...</p>
        </div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <UnauthenticatedPage />;
  }

  // Extract user name from user object
  const userName = (user?.name as string) || (user?.email as string) || (user?.username as string) || 'Usuario';

  return <DashboardContent userName={userName} />;
}
