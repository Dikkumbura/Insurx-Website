import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAgencyClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/agency-solutions');
    }, 1500);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-navy z-[100] flex items-center justify-center">
          <div className="loading-indicator"></div>
        </div>
      )}
      
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy/90 backdrop-blur-sm shadow-glow py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/agency-solutions" 
              className="nav-link"
              onClick={handleAgencyClick}
            >
              Transform Your Agency
            </Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/book" className="btn-nav">Book Now</Link>
          </div>

          <button 
            className="md:hidden text-primary focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div 
          className={`md:hidden bg-charcoal absolute w-full left-0 overflow-hidden shadow-glow transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link 
              to="/agency-solutions" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                toggleMenu();
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                  navigate('/agency-solutions');
                }, 1500);
              }}
            >
              Transform Your Agency
            </Link>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
            <Link to="/book" className="btn-nav w-full text-center" onClick={toggleMenu}>
              Book Now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;