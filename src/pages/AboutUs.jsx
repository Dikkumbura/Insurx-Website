import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Brain } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingIndicator from '../components/LoadingIndicator';
import StephaniePic from './steph.jpeg';
import KavinduPic from './kavindu.jpg';

const AboutUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pageRef = useRef(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (isLoaded && pageRef.current) {
      const tl = gsap.timeline();
      
      tl.to(pageRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        force3D: true
      });
      
      return () => {
        tl.kill();
      };
    }
  }, [isLoaded]);

  return (
    <div className="min-h-screen bg-navy flex flex-col">
      {isLoading && <LoadingIndicator />}
      
      <div 
        ref={pageRef} 
        className="font-inter force-gpu"
        style={{ 
          opacity: 0,
          visibility: 'visible' 
        }}
      >
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-hero-gradient hero-pattern relative overflow-hidden">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          
          {/* Background Glow Effects */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
          
          <div className="max-w-container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight tracking-tight text-shadow-glow">
                About InsurX
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                At InsurX, we're redefining the insurance industry with AI-driven automation, intelligent risk placement, and seamless scalability. Our mission is to empower insurance professionals with tools that enhance their capabilities and deliver exceptional results.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-section-gradient">
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-shadow-glow">
                Our Mission
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-12">
                We empower insurance agencies with cutting-edge AI solutions that streamline operations, enhance customer experiences, and drive unprecedented growth. Our platform combines advanced automation with deep industry expertise to deliver measurable results.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                  <p className="text-white/80 leading-relaxed">
                    To revolutionize the insurance industry by making advanced AI technology accessible and effective for agencies of all sizes, enabling them to compete and thrive in an evolving market.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Values</h3>
                  <p className="text-white/80 leading-relaxed">
                    We believe in innovation with purpose, maintaining the highest standards of data security, and delivering solutions that create real value for our clients and their customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-navy">
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-shadow-glow">
                Leadership Team
              </h2>
              <div className="space-y-16">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0 bg-charcoal">
                    <img 
                      src={StephaniePic}
                      alt="Stephanie Belote" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Stephanie Belote</h3>
                    <p className="text-lg font-semibold text-white/90 mb-4">Co-Founder & Chief Visionary Officer</p>
                    <p className="text-white/80 leading-relaxed">
                      A forward-thinking entrepreneur and AI automation strategist, Stephanie brings a fusion of insurance industry expertise and cutting-edge technology to InsurX. She envisioned an AI-powered solution that revolutionizes risk placement, underwriting, and claims processing.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0 bg-charcoal">
                    <img 
                      src={KavinduPic}
                      alt="Kavindu Lakshan" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Kavindu Lakshan</h3>
                    <p className="text-lg font-semibold text-white/90 mb-4">Co-Founder & Chief Technology Officer</p>
                    <p className="text-white/80 leading-relaxed">
                      As an AI specialist and technology strategist, Kavindu is the architect behind InsurX's intelligent automation platform. His expertise lies in designing and deploying scalable AI systems for underwriting, claims processing, and policy management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-20 bg-section-gradient">
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-shadow-glow">
                Innovation Meets Experience
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Built by insurance professionals and powered by next-gen AI, we're not just keeping up with industry changes—we're driving them. InsurX combines deep industry knowledge with cutting-edge technology to deliver solutions that transform how insurance agencies operate.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;