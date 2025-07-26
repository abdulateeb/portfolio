import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../utils/constants';
import { MatrixText } from './ui/matrix-text';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-12 relative">
            <MatrixText 
              text={personalInfo.name}
              className="mb-8"
              initialDelay={1000}
              letterAnimationDuration={400}
              letterInterval={120}
            />
          </div>

          <h2 className="text-2xl md:text-4xl text-white/90 mb-12 animate-fade-in-delay-1 font-semibold">
            {personalInfo.title}
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-2">
            {personalInfo.bio}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16 animate-fade-in-delay-3">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white/80 hover:text-white hover:bg-white/20"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white/80 hover:text-white hover:bg-white/20"
            >
              <Linkedin className="h-7 w-7" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-delay-4">
            <button
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
            >
              My Profiles
            </button>
            <button
              className="px-10 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;