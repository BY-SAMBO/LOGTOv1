import { getAuthInfo } from './lib/auth';
import DashboardContent from './components/dashboard-content';
import UnauthenticatedPage from './components/unauthenticated-page';

export default async function XtrategiaDashboard() {
  const { isAuthenticated, user } = await getAuthInfo();

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <UnauthenticatedPage />;
  }

  // Extract user name from user object
  const userName = user?.name || user?.email || user?.username || 'Usuario';

  return <DashboardContent userName={userName} />;
}
