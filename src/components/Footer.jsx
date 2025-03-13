import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-navy-alt py-16">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-8">
          <Logo size="large" className="mb-4" />
          <p className="text-white/60 mb-6">
            Transforming insurance operations with cutting-edge AI solutions.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-white/40 text-sm mb-4">
              © {new Date().getFullYear()} InsurX. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white/40 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-white/40 hover:text-primary text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;