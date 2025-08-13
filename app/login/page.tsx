'use client';

import SignIn from '../components/sign-in';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="heading-1 text-accent animate-soft-pulse mb-4">
            Xtrategia
          </h1>
          <p className="text-secondary text-lg mb-8">
            Plataforma Avanzada de Innovación
          </p>
          <div className="widget-elevated p-8">
            <h2 className="heading-3 text-center mb-6">
              Iniciar Sesión
            </h2>
            <p className="text-secondary text-center mb-8">
              Accede a tu panel de control con Logto
            </p>
            <div className="flex justify-center">
              <SignIn />
            </div>
          </div>
        </div>
      </div>
      
      <footer className="absolute bottom-4 text-center w-full">
        <p className="text-caption">
          Xtrategia &copy; 2024 - Powered by Industrias Galgo
        </p>
      </footer>
    </div>
  );
}