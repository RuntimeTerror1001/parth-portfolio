import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const renderNavigation = () => {
    if (isMobile) {
      return (<MobileNavigation />);
    } else {
      return (<DesktopNavigation />);
    }
  };

  const LogoButton = () => (
    <button
      onClick={() => {
        const section = document.getElementById('home');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className='w-14 h-14 rounded-lg bg-raisin-500 items-center justify-center flex font-bold shadow-md cursor-pointer hover:opacity-80 transition-opacity'
    >
      <p className='red-gradient_text text-2xl'>PD.</p>
    </button>
  );

  const NavLinks = ({ isMobile = false }) => {
    const scrollToSection = (sectionId) => {
      console.log(`Scrolling to section: ${sectionId}`);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    const getNavItemClasses = () =>
      'text-cornmilk-500 hover:text-bittersweet-500 cursor-pointer px-4 py-2 hover:bg-white/10 rounded-md transition-all duration-300 ease-in-out';

    return (
      <>
        <button className={getNavItemClasses()} onClick={() => scrollToSection('about')}>About</button>
        <button className={getNavItemClasses()} onClick={() => scrollToSection('work_ex')}>Work Experience</button>
        <button className={getNavItemClasses()} onClick={() => scrollToSection('tech')}>Tech</button>
        <button className={getNavItemClasses()} onClick={() => scrollToSection('projects')}>Projects</button>
        <button className={getNavItemClasses()} onClick={() => scrollToSection('contact')}>Contact</button>
      </>
    );
  };

  const MobileNavigation = () => {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (isMenuOpen && !e.target.closest('.navbar-container')) {
          setIsMenuOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
      <nav className='fixed top-0 w-full z-50 bg-raisin-500 navbar-container flex justify-between items-center px-4 py-2'>
        <LogoButton />
        
        <div 
          className='w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-8 h-0.5 bg-cornmilk-500 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-cornmilk-500 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-8 h-0.5 bg-cornmilk-500 transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </div>

        <nav className={`
          fixed top-0 right-0 h-screen w-64 bg-raisin-500 z-40
          transform transition-transform duration-300 ease-in-out shadow-lg flex flex-col text-lg gap-2 font-medium pt-24 px-4
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <NavLinks isMobile={true} />
        </nav>
      </nav>
    );
  };

  const DesktopNavigation = () => {
    return (
      <nav className='w-full px-8 md:px-16 justify-center items-center fixed top-0 z-50 bg-raisin-500 navbar-container text-lg font-medium flex'>
        <div className='flex-1 flex justify-start pl-8'>
          <LogoButton />
        </div>
        <div className='flex-1 flex justify-end pr-8'>
          <div className='flex'>
            <NavLinks />
          </div>
        </div>
      </nav>
    );
  };

  return (
    <header>
      {renderNavigation()}
    </header>  
  )
};

export default Navbar;