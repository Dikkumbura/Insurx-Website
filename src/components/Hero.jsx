import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-hero-gradient hero-pattern relative overflow-hidden min-h-screen flex items-center">
      {/* Geometric shapes for visual interest */}
      <div className="geometric-shape shape-1"></div>
      <div className="geometric-shape shape-2"></div>
      <div className="geometric-shape shape-3"></div>
      
      <div className="max-w-container mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 md:mb-8 leading-tight text-shadow-glow">
            Pass the Torch to AI, Simplify Your Day, Ignite More Sales.
          </h1>
          
          <h2 className="font-body text-xl sm:text-2xl md:text-3xl font-medium text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Automate Routine Tasks. Spark Real Growth
          </h2>
          
          <div className="mt-12 md:mt-14">
            <Link 
              to="/book" 
              className="btn-primary group font-sans uppercase tracking-tight text-lg md:text-xl font-bold bg-gradient-to-br from-primary/20 to-primary/5 hover:shadow-glow transition-all duration-300"
              style={{
                textShadow: '0 0 10px rgba(255, 130, 0, 0.5), 0 0 20px rgba(255, 130, 0, 0.3)',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              SEE HOW WE IGNITE YOUR SUCCESS
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;