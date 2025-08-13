'use client';

export default function LoginForm() {
  const loginUrl = `${process.env.NEXT_PUBLIC_LOGTO_ENDPOINT}/oidc/auth?client_id=${process.env.NEXT_PUBLIC_LOGTO_APP_ID}&redirect_uri=${encodeURIComponent(
    process.env.NODE_ENV === 'production' 
      ? 'https://xtrategia.industriasgalgo.com/callback'
      : 'http://localhost:3001/callback'
  )}&response_type=code&scope=openid%20profile&state=login`;

  return (
    <div className="login-container animate-fade-in-up">
      <div className="login-card">
        <header className="login-header">
          <h1 className="heading-1 text-accent animate-soft-pulse">Xtrategia</h1>
          <p className="text-secondary">Plataforma de Innovación</p>
        </header>
        
        <div className="login-content">
          <div className="welcome-section">
            <h2 className="heading-3 text-center">Bienvenido al Bootcamp</h2>
            <p className="text-muted text-center">
              Accede a tu espacio de innovación y aprendizaje
            </p>
          </div>
          
          <div className="login-actions">
            <a 
              href={loginUrl}
              className="btn btn-primary energy-accent w-full hover-lift"
            >
              Iniciar Sesión con Logto
            </a>
            
            <div className="login-security">
              <p className="text-xs text-muted text-center">
                Protegido por seguridad de nivel empresarial
              </p>
            </div>
          </div>
        </div>
        
        <footer className="login-footer">
          <div className="brand-info">
            <p className="text-caption text-accent">Xtrategia © 2024</p>
            <p className="text-caption">Powered by Industrias Galgo</p>
          </div>
        </footer>
      </div>
      
      <div className="background-glow animate-gentle-glow"></div>
    </div>
  );
}