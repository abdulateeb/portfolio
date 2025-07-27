import { Trophy, Star } from 'lucide-react';
import { achievements } from '../utils/constants';
import { GlowingEffect } from './ui/glowing-effect';

const Achievements = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Achievements Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Achievements
            </h2>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:from-yellow-500/20 hover:to-orange-500/20 hover:border-yellow-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <GlowingEffect
                  spread={45}
                  glow={true}
                  disabled={false}
                  proximity={72}
                  inactiveZone={0.02}
                  borderWidth={3}
                  movementDuration={2.5}
                />
                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Trophy className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                        1st Place Winner
                      </span>
                    </div>
                    <p className="text-lg text-white/80 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;