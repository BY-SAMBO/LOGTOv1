'use client';

export default function SignIn() {
  const handleSignIn = () => {
    // Redirect to Logto sign-in endpoint
    window.location.href = '/api/auth/sign-in';
  };

  return (
    <button
      onClick={handleSignIn}
      className="btn btn-primary animate-gentle-glow hover-lift transition-smooth rounded-lg px-6 py-3 text-base font-semibold"
    >
      Iniciar Sesión con Logto
    </button>
  );
}