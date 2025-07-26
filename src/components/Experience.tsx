import { Briefcase, Calendar, Building, ExternalLink } from 'lucide-react';
import { experience } from '../utils/constants';
import { GlowingEffect } from './ui/glowing-effect';
import { SwechaLogo, InfosysLogo, AutonomOpsLogo } from './ui/company-logos';
import { MatrixText } from './ui/matrix-text';

interface Certificate {
  name: string;
  link: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  current: boolean;
  certificate?: Certificate;
}

const Experience = () => {
  const getCompanyLogo = (company: string) => {
    switch (company) {
      case 'Swecha Telangana':
        return <SwechaLogo className="w-20 h-20" />;
      case 'Infosys Springboard':
        return <InfosysLogo className="w-20 h-20" />;
      case 'AutonomOps AI':
        return <AutonomOpsLogo className="w-20 h-20" />;
      default:
        return (
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            <Briefcase className="h-10 w-10" />
          </div>
        );
    }
  };
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MatrixText 
            text="Experience"
            className="text-4xl md:text-5xl font-bold mb-6"
            initialDelay={500}
            letterAnimationDuration={300}
            letterInterval={80}
          />
        </div>

        <div className="space-y-8">
          {experience.map((exp: ExperienceItem, index: number) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-white/20"
            >
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={48}
                inactiveZone={0.1}
                borderWidth={2}
                movementDuration={2}
              />
              
              {/* Current position indicator */}
              {exp.current && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100/90 text-green-800 rounded-full text-sm font-medium backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Current
                  </span>
                </div>
              )}

              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  {getCompanyLogo(exp.company)}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <Building className="h-5 w-5" />
                        <span className="font-semibold text-lg">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-white/70 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Certificate Link */}
                  {exp.certificate && (
                    <div className="mt-4">
                      <a
                        href={exp.certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;