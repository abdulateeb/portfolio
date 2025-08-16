import { GraduationCap } from 'lucide-react';
import { education } from '../utils/constants';
import { GlowingEffect } from './ui/glowing-effect';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <GraduationCap className="h-7 w-7 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-white/30 overflow-hidden"
            >
              <GlowingEffect
                spread={34}
                glow={true}
                disabled={false}
                proximity={72}
                inactiveZone={0.06}
                borderWidth={3}
                movementDuration={2}
              />
              <div className="relative z-10">
              {/* Title + Year aligned */}
              <div className="mb-1 md:mb-2 flex items-start justify-between gap-3">
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  {edu.degree}
                </h3>
                <span className="shrink-0 rounded-lg bg-white/10 text-white/90 text-xs sm:text-sm px-2.5 py-0.5 sm:px-3 sm:py-1 backdrop-blur-sm">
                  {edu.year}
                </span>
              </div>

              {/* Subline */}
              <p className="text-white/80 text-sm md:text-base">
                {edu.institution}
                {edu.location ? (
                  <span className="text-white/60">, {edu.location}</span>
                ) : null}
              </p>

              {/* Divider */}
              <div className="my-3 md:my-4 h-px w-full bg-white/10" />

              {/* Description (optional) */}
              {Boolean((edu as any).description) && (
                <p className="text-white/80 leading-relaxed">
                  {(edu as any).description}
                </p>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;