import React, { useState, useEffect, useRef } from 'react';
import { Bot, CheckCircle, Clock, MessageSquare, Database } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingIndicator from '../components/LoadingIndicator';

const AgencySolutions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false);
  const pageRef = useRef(null);
  const chatbotContainerRef = useRef(null);

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
      
      // After page animation is complete, show chatbot
      setTimeout(() => {
        setShowChatbot(true);
      }, 1000);
      
      return () => {
        tl.kill();
      };
    }
  }, [isLoaded]);

  // Voiceflow Chatbot Integration
  useEffect(() => {
    if (!isLoaded || !showChatbot) return;

    // Delay chatbot initialization to prevent focus issues
    const initializationDelay = setTimeout(() => {
      // Remove any existing script to avoid duplicates
      const existingScript = document.getElementById('voiceflow-script');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'voiceflow-script';
      script.type = 'text/javascript';
      script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      script.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '67dd9e0b39317273e2512a5b' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          assistant: {
            stylesheet: "data:text/css;base64,LnZmcmMtd2lkZ2V0e2NvbG9yOiMwOTNiNWE7Zm9udC1mYW1pbHk6J3NhbiBzZXJpZicsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDt9LnZmcmMtaGVhZGVye2JhY2tncm91bmQtY29sb3I6IzI3MzQ0NTtjb2xvcjojZDZkZWViO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxYzI5M2FiYTt9LnZmcmMtYXNzaXN0YW50LWluZm8tLXRpdGxlLCAudmZyYy1hc3Npc3RhbnQtaW5mby0tZGVzY3JpcHRpb257Y29sb3I6I2ZmZmZmZjt9LnZmcmMtY2hhdHtiYWNrZ3JvdW5kLWNvbG9yOiMyYjNiNTBmYztib3JkZXI6MS41cHggc29saWQgIzFjMjkzYWJhO2JveC1zaGFkb3c6I2ZmNzcwMDt9LnZmcmMtc3lzdGVtLXJlc3BvbnNlIC52ZnJjLW1lc3NhZ2V7YmFja2dyb3VuZC1jb2xvcjojMWMyMzMyNmM7Y29sb3I6I2ZmZmZmZjt9LnZmcmMtdXNlci1yZXNwb25zZSAudmZyYy1tZXNzYWdle2JhY2tncm91bmQtY29sb3I6IzIwMzEzZWNiO2NvbG9yOiNmZmZmZmY7fS52ZnJjLWNoYXQtaW5wdXQgdGV4dGFyZWF7YmFja2dyb3VuZC1jb2xvcjojZmY3NzAwICFpbXBvcnRhbnQ7Y29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O30udmZyYy1idXR0b257YmFja2dyb3VuZC1jb2xvcjojZmY5NTAwO2NvbG9yOiMxZjI5MzdiYjt0ZXh0LXNoYWRvdzojMWEyZDNhO30udmZyYy1pbnB1dC1jb250YWluZXIsIC52ZnJjLWNoYXQtaW5wdXR7YmFja2dyb3VuZC1jb2xvcjojMDkzYjVhICFpbXBvcnRhbnQ7fS5fNnI5eGVlM3tiYWNrZ3JvdW5kLWNvbG9yOiNmZjk1MDAgIWltcG9ydGFudDtjb2xvcjojMjczNDQ1ICFpbXBvcnRhbnQ7fS5fMWdkdmg5dDZ7Y29sb3I6I2ZmZmZmZjt9No "
          },
          voice: {
            url: "https://runtime-api.voiceflow.com"
          },
          render: {
            mode: 'embedded',
            target: chatbotContainerRef.current
          },
          launch: {
            autoFocus: false
          }
        });
        
        // Force blur after chat loads
        setTimeout(() => {
          if (document.activeElement) {
            document.activeElement.blur();
          }
          // Force focus on body
          document.body.focus();
        }, 100);
      };

      document.body.appendChild(script);
    }, 500);

    return () => {
      clearTimeout(initializationDelay);
      if (document.getElementById('voiceflow-script')) {
        document.getElementById('voiceflow-script').remove();
      }
    };
  }, [isLoaded, showChatbot]);

  return (
    <div className="min-h-screen flex flex-col bg-navy">
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
        <section className="min-h-[90vh] pt-32 pb-20 md:py-40 bg-hero-gradient hero-pattern relative overflow-hidden flex items-center">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          
          {/* Background Glow Effects */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
          
          <div className="max-w-container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tight text-shadow-glow">
                AgentX AI Assistant for Insurance Agencies
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-8 max-w-2xl mx-auto">
                Try Our Demo and See How It Can Transform Your Agency
              </h2>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                AgentX AI Assistant helps insurance agencies eliminate repetitive tasks, streamline operations, and increase profitability through cutting-edge AI technology. Interact with our live demo below to experience how this virtual producer can help your team focus on what matters most—growing relationships and closing deals.
              </p>

              {/* Interactive demo prompt */}
              <div className="text-center mb-4">
                <span className="inline-block px-5 py-2 bg-primary/20 text-primary rounded-md text-sm font-medium border border-primary/30">
                  Interactive Demo Available Below
                </span>
              </div>

              {/* Chatbot Placeholder - always visible */}
              <div className="w-full max-w-2xl mx-auto mb-12 relative">
                {/* Outer container with the glow effect */}
                <div className="chat-glow-container">
                  <div className="chat-glow-effect"></div>
                  
                  {/* Actual chatbot container */}
                  <div className="w-full h-[36rem] rounded-xl overflow-hidden border border-white/10"
                    style={{ background: '#1A1A2E' }}>
                    
                    {/* Only render the actual chatbot container when showChatbot is true */}
                    {showChatbot && (
                      <div 
                        ref={chatbotContainerRef}
                        className="w-full h-full relative z-10"
                      ></div>
                    )}
                    
                    {/* Loading indicator shown until chatbot is ready */}
                    {!showChatbot && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-white/70 flex flex-col items-center">
                          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                          <p>Loading AgentX AI Assistant...</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Demo explanation text - positioned absolutely to the right on desktop */}
                <div className="hidden md:block absolute -right-72 top-1/2 transform -translate-y-1/2 w-64 p-3 bg-charcoal/30 rounded-lg border border-white/10 text-sm text-white/80">
                  <p><span className="text-primary font-semibold">Note:</span> This is a demonstration version of AgentX.</p>
                  <p className="mt-2">Backend functionalities are not available in this demo as it's designed to showcase the UI and conversation flow.</p>
                  <p className="mt-2">When implemented for your agency, all features can be fully customized to match your specific requirements.</p>
                </div>
              </div>
              
              {/* Mobile version of demo explanation - appears below chatbot on mobile */}
              <div className="md:hidden w-full max-w-md mx-auto mb-8 p-3 bg-charcoal/30 rounded-lg border border-white/10 text-sm text-white/80 text-center">
                <p><span className="text-primary font-semibold">Note:</span> This is a demo version. Backend functionalities are not available as it's designed to showcase the UI and conversation flow. When implemented, all features can be customized to your agency's needs.</p>
              </div>

              {/* Feature List */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>24/7 Lead Capture</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Instant Quotes</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Claims Processing</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>CRM Integration</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book" className="btn-primary group text-lg">
                  Book a Demo
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <a href="#features" className="btn-secondary text-lg">
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-section-gradient">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-primary mb-3 text-shadow-glow">
                How Our AI Assistant Helps Your Agency
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Comprehensive AI Solutions Designed Specifically For Insurance Agencies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 mx-auto max-w-xl gap-12">
              {/* Feature 1 */}
              <div className="bg-charcoal rounded-xl p-8 transition-all duration-300 hover:shadow-glow border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Automated Lead Capture and Qualification</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Never miss a potential client again. Our AI Assistant proactively engages and captures leads 24/7, instantly qualifying prospects and delivering them directly into your CRM.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Instant website visitor engagement</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Intelligent lead scoring and qualification</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Automated follow-up sequences</p>
                  </li>
                </ul>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-charcoal rounded-xl p-8 transition-all duration-300 hover:shadow-glow border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Real-Time Customer Support</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Offer seamless, round-the-clock support. Our AI Assistant responds to policyholder inquiries instantly, boosting satisfaction and retention without burdening your team.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">24/7 policy and coverage questions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Billing and payment assistance</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Seamless escalation to human agents when needed</p>
                  </li>
                </ul>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-charcoal rounded-xl p-8 transition-all duration-300 hover:shadow-glow border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Instant Quote Generation</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Reduce wait times dramatically. The AI Assistant automatically generates precise quotes for standard insurance products, empowering your team to close more policies faster.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Multi-carrier quote comparison</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Personalized coverage recommendations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Automated policy document generation</p>
                  </li>
                </ul>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-charcoal rounded-xl p-8 transition-all duration-300 hover:shadow-glow border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Seamless CRM Integration</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Our AI Assistant integrates effortlessly with your existing CRM and policy management systems, ensuring zero disruption to your workflow while enhancing productivity and efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Works with all major insurance CRMs</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Automated data entry and synchronization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-white/80">Custom workflow automation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-24 bg-navy">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-primary mb-3 text-shadow-glow">
                Why Insurance Agencies Choose InsurX AI Assistant
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Measurable Results That Transform Your Insurance Business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="stat-card">
                <div className="text-3xl font-bold text-primary mb-2">+25%</div>
                <h3 className="text-xl font-semibold text-white mb-4">Boost Conversion Rates</h3>
                <p className="text-white/80">
                  Industry averages show agencies using automation can increase lead-to-policy conversion by up to 25%.
                </p>
              </div>
              
              <div className="stat-card">
                <div className="text-3xl font-bold text-primary mb-2">15+ hrs</div>
                <h3 className="text-xl font-semibold text-white mb-4">Save Valuable Time</h3>
                <p className="text-white/80">
                  Automation frees up your staff, allowing them to focus more time on high-value client interactions.
                </p>
              </div>
              
              <div className="stat-card">
                <div className="text-3xl font-bold text-primary mb-2">+32%</div>
                <h3 className="text-xl font-semibold text-white mb-4">Enhanced Customer Experience</h3>
                <p className="text-white/80">
                  Instant, accurate responses improve customer satisfaction, loyalty, and overall retention rates.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="contact" className="py-24 bg-section-gradient">
          <div className="max-w-container mx-auto px-6">
            <div className="bg-charcoal p-12 rounded-2xl shadow-glow border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4 text-shadow-glow">
                  Ready to Transform Your Insurance Agency?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Schedule a personalized AI strategy call with our experts. We'll analyze your current operations and show you exactly how our AI solutions can boost your efficiency and profitability.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-1 mx-auto max-w-xl gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What to expect:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <p className="text-white/80">Personalized assessment of your current operations</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <p className="text-white/80">Custom AI implementation strategy tailored to your needs</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <p className="text-white/80">Clear ROI projections and implementation timeline</p>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <Link to="/book" className="btn-primary group">
                      Book Your Strategy Call
                      <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default AgencySolutions;