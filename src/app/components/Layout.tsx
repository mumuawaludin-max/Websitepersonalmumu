import { Outlet } from 'react-router';
import { Navigation, MobileNavigation } from './Navigation';

export function Layout() {
  return (
    <div className="h-screen bg-[#0a282e] overflow-hidden">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Navigation />
      </div>
      
      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <MobileNavigation />
      </div>
      
      {/* Main Content */}
      <main className="h-full overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}