import { useState, useEffect, useCallback } from 'react';

export function useScrollManager() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine active section based on scroll position
      const sections = ['home', 'tentang-saya', 'ruang-kolaborasi', 'karya', 'blog', 'events', 'kontak'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId === 'home' ? 'hero-section' : sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Navbar height offset
          
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    const targetId = sectionId === 'home' ? 'hero-section' : sectionId;
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(sectionId);
    }
  }, []);

  return {
    scrollY,
    activeSection,
    setActiveSection,
    scrollToSection,
  };
}
