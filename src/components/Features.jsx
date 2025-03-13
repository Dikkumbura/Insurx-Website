import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { BarChart3, Zap, CheckCircle, Clock } from 'lucide-react';

const Features = () => {
  return (
    <section className="w-full bg-section-gradient py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col items-start mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-3 text-shadow-glow">
            Real Results. Proven Impact.
          </h2>
          <p className="text-xl text-white/80 max-w-2xl">
            Our AI-powered solutions deliver measurable improvements for insurance agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <Card className="bg-charcoal border-none transition-all duration-300 hover:shadow-glow">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Increase Lead Conversion</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Agencies leveraging AI-powered tools see an industry-average increase in lead conversions. Our platform helps you identify high-value prospects and personalize outreach for maximum impact.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-charcoal border-none transition-all duration-300 hover:shadow-glow">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Boost Efficiency</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Significantly reduce manual tasks with AI automation. Streamline workflows and free up your team to focus on high-value activities that drive growth.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-charcoal border-none transition-all duration-300 hover:shadow-glow">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Enhance Accuracy</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Improve underwriting and claims accuracy over traditional processes. Our AI models analyze vast datasets to identify patterns and risks that humans might miss, resulting in better decision-making and reduced errors.
              </p>
            </CardContent>
          </Card>

          {/* Feature 4 - New Time-Saving Solutions Card */}
          <Card className="bg-charcoal border-none transition-all duration-300 hover:shadow-glow">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Time-Saving Solutions</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                We save insurance agencies valuable time by automating manual tasks, allowing them to focus on what truly matters - serving their clients and growing their business.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;