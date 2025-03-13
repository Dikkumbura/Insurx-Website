import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '', size = 'default' }) => {
  const sizeClasses = {
    small: 'text-xl',
    default: 'text-2xl',
    large: 'text-3xl'
  };

  return (
    <Link to="/" className={`inline-block font-display font-bold ${sizeClasses[size]} ${className}`}>
      <span className="text-white">INSUR</span>
      <span className="text-primary">X</span>
    </Link>
  );
};

export default Logo;