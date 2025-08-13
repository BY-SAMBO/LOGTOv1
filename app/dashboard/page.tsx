export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Welcome to your Dashboard
        </h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            🎉 Authentication Successful!
          </h2>
          <p className="text-gray-600">
            You have successfully authenticated with Logto. Your application is now ready for production.
          </p>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-medium text-green-800 mb-2">
              Next Steps:
            </h3>
            <ul className="text-green-700 space-y-1">
              <li>• Add user profile information</li>
              <li>• Implement role-based access control</li>
              <li>• Add logout functionality</li>
              <li>• Build your SaaS features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}