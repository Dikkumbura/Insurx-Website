import React from 'react';
import { Zap, MessageSquare, BarChart3, Phone, Layers, Bot, Shield, Clock, Palette, FileEdit } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    title: "AI Assistant for Insurance Agencies",
    description: "Automate lead capturing, real-time customer support, instant quote generation, claims processing, and seamless CRM integration.",
    icon: <Bot className="h-6 w-6 text-primary" />
  },
  {
    id: 2,
    title: "AI-Powered Apps",
    description: "Enable agents to submit more policies efficiently, stay updated with market trends, analyze new opportunities, and streamline daily operations.",
    icon: <Layers className="h-6 w-6 text-primary" />
  },
  {
    id: 3,
    title: "Lead Generation Systems",
    description: "Tailored platforms generating consistent, high-quality leads specifically for insurance carriers and MGAs.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  },
  {
    id: 4,
    title: "AI Voice Callers",
    description: "AI-driven phone representatives professionally engaging customers, managing outbound calls, and handling customer interactions autonomously.",
    icon: <Phone className="h-6 w-6 text-primary" />
  },
  {
    id: 5,
    title: "Complete Automation Ecosystems",
    description: "End-to-end AI automation covering every operational aspect, enhancing efficiency, compliance, and profitability.",
    icon: <Zap className="h-6 w-6 text-primary" />
  },
  {
    id: 6,
    title: "Intelligent Claims Processing",
    description: "Accelerate claims handling with AI-powered document analysis, fraud detection, and automated settlement recommendations.",
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    id: 7,
    title: "24/7 Customer Service",
    description: "Provide round-the-clock support with AI chatbots that handle inquiries, policy questions, and basic claims information.",
    icon: <Clock className="h-6 w-6 text-primary" />
  },
  {
    id: 8,
    title: "Data Analytics Dashboard",
    description: "Gain actionable insights with comprehensive analytics on customer behavior, policy performance, and market trends.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />
  },
  {
    id: 9,
    title: "Website Design & Enhancement",
    description: "Create modern, conversion-focused insurance websites with AI-powered features, seamless user experience, and mobile-first design.",
    icon: <Palette className="h-6 w-6 text-primary" />,
    span: true
  },
  {
    id: 10,
    title: "Content Creation & Management",
    description: "AI-assisted content generation for blogs, social media, and marketing materials, tailored specifically for insurance audiences.",
    icon: <FileEdit className="h-6 w-6 text-primary" />,
    span: true
  }
];

const ServiceCard = ({ item }) => {
  return (
    <div 
      className={`group relative p-6 bg-gradient-to-br from-charcoal/90 to-navy-alt/90 rounded-2xl border border-white/10 
                 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,130,0,0.15)] 
                 h-full overflow-hidden ${item.span ? 'lg:col-span-2' : ''}`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* Icon with glow effect */}
      <div className="relative z-10 mb-6">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20">
          {item.icon}
        </div>
        <div className="absolute -inset-2 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
          {item.description}
        </p>
      </div>
      
      {/* Decorative corner accent */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
    </div>
  );
};

const Services = () => {
  return (
    <section className="w-full bg-section-gradient py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 text-shadow-glow">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored for the insurance industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {serviceItems.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;