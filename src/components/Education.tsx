import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../utils/constants';
import { GlowingEffect } from './ui/glowing-effect';
import { MatrixText } from './ui/matrix-text';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MatrixText 
            text="Education"
            className="text-4xl md:text-5xl font-bold mb-6"
            initialDelay={500}
            letterAnimationDuration={300}
            letterInterval={80}
          />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                    <GlowingEffect
                      spread={35}
                      glow={true}
                      disabled={false}
                      proximity={56}
                      inactiveZone={0.05}
                      borderWidth={2}
                      movementDuration={1.8}
                    />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-400 mb-2">
                            <GraduationCap className="h-5 w-5" />
                            <span className="font-semibold">{edu.institution}</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                          edu.year === '2021-2025'
                            ? 'bg-green-100/90 text-green-800'
                            : 'bg-blue-100/90 text-blue-800'
                        }`}>
                          {edu.year === '2021-2025' ? 'In Progress' : 'Completed'}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-white/70">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
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

export default Education;