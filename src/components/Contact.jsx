import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

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
    <section id="contact" className="w-full bg-section-gradient py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="font-display text-4xl font-bold text-primary mb-6 text-shadow-glow">
              Ready to Transform Your Insurance Agency?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Schedule a personalized AI strategy call with our experts. We'll analyze your current operations and show you exactly how our AI solutions can boost your efficiency and profitability.
            </p>
            <div className="mb-8">
              <h3 className="font-display text-xl font-bold text-white mb-4">What to expect:</h3>
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
            </div>
            <div>
              <Link to="/book" className="btn-primary group">
                Book Your Strategy Call
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2">
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
      </div>
    </section>
  );
};

export default Contact;