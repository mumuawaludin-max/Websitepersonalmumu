import { Link, useLocation } from 'react-router';

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <div className="relative w-full h-[80px] flex justify-center">
        <div className="relative w-[1440px] h-full max-w-full">
          {/* Left section - dark background */}
          <div className="absolute left-0 top-0 h-full w-[509px] bg-[#0a282e] flex items-center justify-end pr-12 gap-12">
            <Link 
              to="/tentang-saya" 
              className={`text-[16px] font-['Plus_Jakarta_Sans',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap ${isActive('/tentang-saya') ? 'text-white' : 'text-[#d9c4a7]'}`}
            >
              Tentang Saya
            </Link>
            <Link 
              to="/ruang-kolaborasi" 
              className={`text-[16px] font-['Plus_Jakarta_Sans',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap ${isActive('/ruang-kolaborasi') ? 'text-white' : 'text-[#d9c4a7]'}`}
            >
              Ruang Kolaborasi
            </Link>
          </div>

          {/* Center logo - cream/beige background block - EXACT positioning */}
          <div className="absolute left-[509px] top-0 w-[430px] h-full bg-[#dac5a7] flex items-center justify-center">
            <Link 
              to="/" 
              className="text-[28px] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#0a282e] hover:opacity-80 transition-opacity"
            >
              Kak Mumu
            </Link>
          </div>

          {/* Right section - dark background */}
          <div className="absolute left-[939px] top-0 h-full w-[501px] bg-[#0a282e] flex items-center justify-start pl-12 gap-12">
            <Link 
              to="/karya" 
              className={`text-[16px] font-['Plus_Jakarta_Sans',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap ${isActive('/karya') ? 'text-white' : 'text-[#d9c4a7]'}`}
            >
              Karya
            </Link>
            <Link 
              to="/kontak" 
              className={`text-[16px] font-['Plus_Jakarta_Sans',sans-serif] font-medium transition-colors hover:text-white whitespace-nowrap ${isActive('/kontak') ? 'text-white' : 'text-[#d9c4a7]'}`}
            >
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function MobileNavigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a282e]/95 backdrop-blur-sm">
      <div className="px-6">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-[20px] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#d9c4a7]"
          >
            Kak Mumu
          </Link>
        </div>
        
        {/* Mobile Menu */}
        <div className="flex items-center justify-between pb-4 gap-4 text-[16px]">
          <Link 
            to="/tentang-saya" 
            className={`transition-colors ${isActive('/tentang-saya') ? 'text-white' : 'text-[#d9c4a7]'}`}
          >
            Tentang
          </Link>
          <Link 
            to="/ruang-kolaborasi" 
            className={`transition-colors ${isActive('/ruang-kolaborasi') ? 'text-white' : 'text-[#d9c4a7]'}`}
          >
            Kolaborasi
          </Link>
          <Link 
            to="/karya" 
            className={`transition-colors ${isActive('/karya') ? 'text-white' : 'text-[#d9c4a7]'}`}
          >
            Karya
          </Link>
          <Link 
            to="/kontak" 
            className={`transition-colors ${isActive('/kontak') ? 'text-white' : 'text-[#d9c4a7]'}`}
          >
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
}