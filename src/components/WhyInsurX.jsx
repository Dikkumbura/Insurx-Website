import React from 'react';
import { Settings, Zap, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyInsurX = () => {
  return (
    <section className="w-full bg-section-gradient py-24 overflow-hidden">
      <div className="max-w-container mx-auto px-6 relative">
        {/* Background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl font-bold text-primary mb-3 inline-block relative text-shadow-glow">
              Why Choose InsurX?
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full shadow-glow"></span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mt-6">
              We deliver specialized AI solutions designed specifically for insurance agencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Reason 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform transition-transform duration-500 group-hover:scale-105 -z-10"></div>
              <div className="p-8 backdrop-blur-sm rounded-2xl h-full flex flex-col border border-white/10">
                <div className="mb-6 relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-charcoal/80 rounded-2xl rotate-12 transform transition-transform duration-500 group-hover:rotate-6"></div>
                  <div className="h-16 w-16 rounded-xl bg-primary/20 flex items-center justify-center relative z-10 shadow-glow">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Custom-Built Solutions</h3>
                <div className="w-12 h-1 bg-primary/30 mb-4 transition-all duration-300 group-hover:w-20"></div>
                <p className="text-white/80">
                  Automation specifically tailored for insurance workflows—not generic SaaS. Our solutions address the unique challenges of insurance agencies.
                </p>
              </div>
            </div>
            
            {/* Reason 2 */}
            <div className="group relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform transition-transform duration-500 group-hover:scale-105 -z-10"></div>
              <div className="p-8 backdrop-blur-sm rounded-2xl h-full flex flex-col border border-white/10">
                <div className="mb-6 relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-charcoal/80 rounded-2xl rotate-12 transform transition-transform duration-500 group-hover:rotate-6"></div>
                  <div className="h-16 w-16 rounded-xl bg-primary/20 flex items-center justify-center relative z-10 shadow-glow">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Rapid Implementation</h3>
                <div className="w-12 h-1 bg-primary/30 mb-4 transition-all duration-300 group-hover:w-20"></div>
                <p className="text-white/80">
                  Deploy robust AI solutions in weeks, not months. Our streamlined process ensures you start seeing results quickly.
                </p>
              </div>
            </div>
            
            {/* Reason 3 */}
            <div className="group relative mt-16 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform transition-transform duration-500 group-hover:scale-105 -z-10"></div>
              <div className="p-8 backdrop-blur-sm rounded-2xl h-full flex flex-col border border-white/10">
                <div className="mb-6 relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-charcoal/80 rounded-2xl rotate-12 transform transition-transform duration-500 group-hover:rotate-6"></div>
                  <div className="h-16 w-16 rounded-xl bg-primary/20 flex items-center justify-center relative z-10 shadow-glow">
                    <LifeBuoy className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Continuous Support</h3>
                <div className="w-12 h-1 bg-primary/30 mb-4 transition-all duration-300 group-hover:w-20"></div>
                <p className="text-white/80">
                  Ongoing monitoring and optimization ensure smooth, reliable performance around the clock for your peace of mind.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Link to="/book" className="btn-primary group">
              <span>Get Started Today</span>
              <svg className="inline-block ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInsurX;