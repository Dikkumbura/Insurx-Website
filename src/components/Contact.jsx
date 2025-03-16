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
  );
};

export default Contact;