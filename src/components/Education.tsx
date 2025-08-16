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
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-sm hover:shadow-md hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={56}
                inactiveZone={0.05}
                borderWidth={2}
              />
              <div className="relative z-10">
              {/* Year badge */}
              <div className="absolute top-4 right-4">
                <div className="rounded-lg bg-white/10 text-white/90 text-sm px-3 py-1 backdrop-blur-sm">
                  {edu.year}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {edu.degree}
              </h3>

              {/* Subline */}
              <p className="text-white/80 text-sm md:text-base">
                {edu.institution}
                {edu.location ? (
                  <span className="text-white/60">, {edu.location}</span>
                ) : null}
              </p>

              {/* Divider */}
              <div className="my-4 h-px w-full bg-white/10" />

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