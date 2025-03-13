import React from 'react';
import { Flame, Lightning, Star } from '@phosphor-icons/react';

const Description = () => {
  return (
    <section className="w-full bg-section-gradient py-20">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 text-shadow-glow">
              Transforming Insurance Operations with AI
            </h2>
            <div>
              <p className="text-white/80 text-lg mb-6">
                InsurX leverages cutting-edge artificial intelligence to revolutionize how insurance agencies operate. Our solutions eliminate repetitive tasks, enhance customer experiences, and drive unprecedented growth.
              </p>
              <p className="text-white/80 text-lg">
                By implementing our AI automation tools, agencies see significant improvements in efficiency, accuracy, and profitability within the first 90 days.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              {/* Metric 1 */}
              <div className="bg-charcoal p-6 rounded-lg shadow-glow border border-white/10 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                    <Flame 
                      weight="duotone"
                      className="w-7 h-7 text-primary"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1 text-shadow-glow">30%</div>
                    <p className="text-base font-inter text-white/80">Ignite faster lead generation with AI</p>
                  </div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-charcoal p-6 rounded-lg shadow-glow border border-white/10 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                    <Lightning 
                      weight="duotone"
                      className="w-7 h-7 text-primary"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1 text-shadow-glow">50%</div>
                    <p className="text-base font-inter text-white/80">Volunteer admin tasks for quicker workflows</p>
                  </div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-charcoal p-6 rounded-lg shadow-glow border border-white/10 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                    <Star 
                      weight="duotone"
                      className="w-7 h-7 text-primary"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1 text-shadow-glow">20%</div>
                    <p className="text-base font-inter text-white/80">Torch the way to more sales opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;