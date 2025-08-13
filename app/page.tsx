export default function Home() {
  const endpoint = "https://logto-r48okwks84844k4c00080gk0.industriasgalgo.com";
  const appId = "c2ym149uubn2plcgsg4ok";
  const callbackUrl = process.env.NODE_ENV === 'production' 
    ? 'https://xtrategia.industriasgalgo.com/callback'
    : 'http://localhost:3001/callback';
  
  const loginUrl = `${endpoint}/oidc/auth?client_id=${appId}&redirect_uri=${encodeURIComponent(callbackUrl)}&response_type=code&scope=openid%20profile&state=login`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Xtrategia
          </h1>
          <p className="text-gray-600 mb-8">
            Sign in to access your secure dashboard
          </p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <a 
            href={loginUrl}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Sign in with Logto
          </a>
          
          <div className="text-xs text-gray-500 text-center">
            Protected by enterprise-grade security
          </div>
        </div>
      </div>
    </div>
  );
}
