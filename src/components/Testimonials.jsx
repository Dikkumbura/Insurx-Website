import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, Midwest Insurance Group",
    content: "InsurX's AI automation has transformed our agency. We've reduced administrative work by 45% and our agents can focus on building client relationships instead of paperwork.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Operations Director, Pacific Coverage",
    content: "The AI voice caller system has been a game-changer for our outreach efforts. We're connecting with 3x more prospects while maintaining a personal touch that clients appreciate.",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica Williams",
    position: "Claims Manager, Liberty Shield Insurance",
    content: "Our claims processing time has decreased from an average of 9 days to just 3.5 days with InsurX's intelligent claims system. Customer satisfaction scores have never been higher.",
    rating: 4
  },
  {
    id: 4,
    name: "Robert Martinez",
    position: "Agency Owner, Martinez Family Insurance",
    content: "As a small agency competing with larger firms, InsurX has leveled the playing field. Their AI tools have helped us grow our business by 32% in just one year.",
    rating: 5
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="case-studies" className="w-full bg-white py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-primary mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Real feedback from insurance professionals who have transformed their operations with InsurX
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="testimonial-card bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-text-gray">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;