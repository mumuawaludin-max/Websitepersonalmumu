import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

interface FloatingContactButtonProps {
  onClick: () => void;
}

export function FloatingContactButton({ onClick }: FloatingContactButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Hubungi Kami"
    >
      {/* Main Button */}
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#dac5a7] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
        
        {/* Button */}
        <div className="relative bg-[#dac5a7] hover:bg-[#c9b396] text-[#0a282e] w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl flex items-center justify-center transition-all transform group-hover:scale-110">
          <MessageCircle className="w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
        </div>

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[#dac5a7] rounded-full animate-ping opacity-20" />
      </div>

      {/* Tooltip */}
      <div 
        className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <div className="bg-white text-[#0a282e] px-4 py-2 rounded-lg shadow-xl whitespace-nowrap font-['Plus_Jakarta_Sans',sans-serif] text-sm">
          Hubungi Kami
          {/* Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-white" />
          </div>
        </div>
      </div>
    </button>
  );
}
