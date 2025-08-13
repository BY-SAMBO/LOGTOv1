'use client';

import { useRouter } from 'next/navigation';

export default function SignOut() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Call the Logto sign out endpoint
      const response = await fetch('/api/auth/sign-out', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        // Redirect to home page after successful sign out
        router.push('/');
      } else {
        console.error('Sign out failed');
        // Fallback redirect
        router.push('/');
      }
    } catch (error) {
      console.error('Sign out error:', error);
      // Fallback redirect to home page
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="btn btn-secondary hover-lift transition-smooth rounded-lg px-4 py-2 text-sm font-medium"
    >
      Cerrar Sesión
    </button>
  );
}