import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingIndicator from '../components/LoadingIndicator';

const ContactPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pageRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setValidationError('');
  };

  const validateEmail = async () => {
    try {
      const response = await fetch('https://hook.eu2.make.com/jnfjff14bua5k98oed013iucdh6221y6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          type: 'contact',
          status: 'notChecked'
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text();
      
      switch(result) {
        case 'true':
          return true;
        case 'Invalid Email':
          setValidationError('Please enter a valid email address.');
          return false;
        default:
          setValidationError('An error occurred. Please try again.');
          return false;
      }
    } catch (error) {
      console.error('Validation error:', error);
      setValidationError('An error occurred. Please try again.');
      return false;
    }
  };

  const submitFormData = async () => {
    try {
      const response = await fetch('https://hook.eu2.make.com/jnfjff14bua5k98oed013iucdh6221y6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'contact',
          status: 'valid'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setValidationError('');

    try {
      const isValid = await validateEmail();
      
      if (isValid) {
        const submitted = await submitFormData();
        if (submitted) {
          setSubmitted(true);
        } else {
          setValidationError('Failed to submit the form. Please try again.');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setValidationError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          
          <div className="max-w-container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight tracking-tight text-shadow-glow">
                Get in Touch
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Have questions about our AI solutions? We're here to help. Reach out to us directly through any of these channels.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-section-gradient">
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-charcoal p-8 rounded-xl shadow-glow border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Phone</h3>
                      <a href="tel:8652360847" className="text-white/80 hover:text-primary transition-colors">
                        (865) 236-0847
                      </a>
                    </div>
                  </div>
                  <p className="text-white/60">
                    Available Monday through Friday<br />
                    9:00 AM - 5:00 PM EST
                  </p>
                </div>

                <div className="bg-charcoal p-8 rounded-xl shadow-glow border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                      <a href="mailto:stephanie.belote@insurx.us" className="text-white/80 hover:text-primary transition-colors">
                        stephanie.belote@insurx.us
                      </a>
                    </div>
                  </div>
                  <p className="text-white/60">
                    We typically respond within 24 hours during business days
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-charcoal p-8 rounded-lg shadow-glow border border-white/10">
                <h3 className="font-display text-2xl font-bold text-white mb-6">Contact Us</h3>
                {validationError && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400">{validationError}</p>
                  </div>
                )}
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-white/80">Thank you for reaching out. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 bg-navy border border-white/10 rounded-md text-white placeholder-white/50
                                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required
                        className="w-full px-4 py-2 bg-navy border border-white/10 rounded-md text-white placeholder-white/50
                                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">Company Name</label>
                      <input 
                        type="text" 
                        id="company"
                        name="company"
                        required
                        className="w-full px-4 py-2 bg-navy border border-white/10 rounded-md text-white placeholder-white/50
                                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your Insurance Agency"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="w-full px-4 py-2 bg-navy border border-white/10 rounded-md text-white placeholder-white/50
                                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell us about your agency and what you're looking to achieve..."
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn-primary relative ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <span className="w-5 h-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin mr-2"></span>
                          Validating...
                        </span>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;