import { getAuthInfo } from '../lib/auth';
import { redirect } from 'next/navigation';
import SignOut from '../components/sign-out';

export default async function Dashboard() {
  const { isAuthenticated, user } = await getAuthInfo();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    redirect('/');
  }

  // Extract user name from user object
  const userName = user?.name || user?.email || user?.username || 'Usuario';

  return (
    <div className="dashboard-container animate-fade-in-up">
      <header className="dashboard-header">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="heading-1 text-accent animate-soft-pulse">Xtrategia</h1>
            <p className="text-secondary">Plataforma Avanzada de Innovación</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-secondary">Bienvenido,</p>
              <p className="text-lg font-medium text-accent">{userName}</p>
            </div>
            <SignOut />
          </div>
        </div>
      </header>
      
      <main className="container">
        <div className="widget-elevated hover-lift transition-smooth animate-gentle-glow">
          <div className="widget-header">
            <h2 className="widget-title text-accent">
              Autenticación Exitosa
            </h2>
          </div>
          <div className="widget-content">
            <p className="text-secondary mb-6">
              Has iniciado sesión exitosamente con Logto. Tu aplicación está lista para usar.
            </p>
            
            <div className="widget energy-accent p-4 bg-surface-elevated rounded-md border border-accent">
              <h3 className="heading-5 text-accent mb-4">
                Próximos Pasos:
              </h3>
              <ul className="text-secondary space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></span>
                  Agregar información del perfil de usuario
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></span>
                  Implementar control de acceso basado en roles
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></span>
                  Agregar funcionalidad de cierre de sesión
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></span>
                  Desarrollar características de tu SaaS
                </li>
              </ul>
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