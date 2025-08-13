import { getAuthInfo } from '../lib/auth';
import { redirect } from 'next/navigation';
import SignOut from '../components/sign-out';

export default async function Home() {
  const { isAuthenticated, user } = await getAuthInfo();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    redirect('/');
  }

  // Extract user name from user object
  const userName = user?.name || user?.email || user?.username || 'Usuario';

  return (
    <div className="dashboard-container animate-fade-in-up">
      {/* Header */}
      <header className="widget-elevated p-4 mb-8 rounded-lg animate-gentle-glow">
        <div className="flex justify-between items-center">
          <h1 className="heading-3 text-accent animate-soft-pulse">
            Xtrategia
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-secondary">Bienvenido,</p>
              <p className="text-lg font-medium text-accent">{userName}</p>
            </div>
            <SignOut />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        <div className="mb-8">
          <h2 className="heading-2 mb-4">
            Bienvenido a Xtrategia
          </h2>
          <p className="text-secondary">
            Tu panel de control autenticado está listo. Comienza a desarrollar las características de tu SaaS aquí.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="widget hover-lift transition-smooth energy-accent">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-soft rounded-lg flex items-center justify-center animate-gentle-glow border border-accent">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="heading-5 text-accent ml-3">
                Análisis
              </h3>
            </div>
            <p className="text-secondary text-sm">
              Visualiza los análisis de tu aplicación y métricas de usuario.
            </p>
          </div>

          <div className="widget hover-lift transition-smooth energy-accent">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-soft rounded-lg flex items-center justify-center animate-gentle-glow border border-accent">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="heading-5 text-accent ml-3">
                Usuarios
              </h3>
            </div>
            <p className="text-secondary text-sm">
              Gestiona usuarios y permisos de acceso.
            </p>
          </div>

          <div className="widget hover-lift transition-smooth energy-accent">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-soft rounded-lg flex items-center justify-center animate-gentle-glow border border-accent">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="heading-5 text-accent ml-3">
                Configuración
              </h3>
            </div>
            <p className="text-secondary text-sm">
              Configura los ajustes y preferencias de tu aplicación.
            </p>
          </div>
        </div>

        {/* Status Card */}
        <div className="mt-8 widget-elevated border-accent animate-pulse-glow">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-accent animate-gentle-glow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="heading-6 text-accent">
                Autenticación Activa
              </h3>
              <div className="mt-2 text-secondary">
                <p>Tu sesión está activa y segura. SSO configurado para *.industriasgalgo.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p className="text-caption">Xtrategia &copy; 2024</p>
        <p className="text-caption mt-2 font-medium">Industrias Galgo</p>
      </footer>
    </div>
  );
}