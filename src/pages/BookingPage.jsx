import React, { useState, useEffect, useRef } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingIndicator from '../components/LoadingIndicator';
import { DatetimePicker } from '../components/ui/datetime-picker';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    datetime: new Date(),
    notes: '',
    gdprConsent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setValidationError('');
  };

  const handleDateTimeChange = (date) => {
    setFormData(prev => ({
      ...prev,
      datetime: date
    }));
  };

  const validateContactInfo = async () => {
    try {
      const response = await fetch('https://hook.eu2.make.com/jnfjff14bua5k98oed013iucdh6221y6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          type: 'booking',
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
        case 'Invalid Phone':
          setValidationError('Please enter a valid phone number.');
          return false;
        case 'Both Invalid':
          setValidationError('Please enter valid email and phone number.');
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
          type: 'booking',
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
      const isValid = await validateContactInfo();
      
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

  if (submitted) {
    return (
      <div className="min-h-screen bg-navy flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-24 px-6">
          <div className="bg-charcoal rounded-2xl p-12 max-w-2xl mx-auto text-center border border-white/10 shadow-glow">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-shadow-glow">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Thank you for scheduling a consultation. We'll send you a confirmation email shortly with all the details.
            </p>
            <a href="/" className="btn-primary">
              Return to Homepage
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
        <main className="flex-grow py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-shadow-glow">
                Schedule Your AI Strategy Call
              </h1>
              <p className="text-lg text-white/80">
                Book a personalized consultation to discover how our AI solutions can transform your insurance agency
              </p>
            </div>

            <div className="bg-charcoal rounded-2xl p-8 md:p-12 border border-white/10 shadow-glow">
              {validationError && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400">{validationError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-2 bg-navy border border-white/10 rounded-md text-white placeholder-white/50
                               focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Smith"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                      Email Address *
                    </label>
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

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 bg-navy border border-white/10 rounded-md text-white placeholder-white/50
                               focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Date and Time */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      Preferred Date and Time *
                    </label>
                    <div className="relative">
                      <DatetimePicker
                        value={formData.datetime}
                        onChange={handleDateTimeChange}
                        className="w-full"
                      />
                      <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-white/50 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-white/80 mb-1">
                    Special Requirements/Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="4"
                    className="w-full px-4 py-2 bg-navy border border-white/10 rounded-md text-white placeholder-white/50
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about any specific topics you'd like to discuss..."
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>

                {/* GDPR Consent */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="gdprConsent"
                    name="gdprConsent"
                    required
                    className="mt-1"
                    checked={formData.gdprConsent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="gdprConsent" className="text-sm text-white/80">
                    I consent to InsurX processing my personal data in accordance with the 
                    <a href="/privacy-policy" className="text-primary hover:text-primary/80 ml-1">
                      Privacy Policy
                    </a>
                  </label>
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
                    'Confirm Booking'
                  )}
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default BookingPage;