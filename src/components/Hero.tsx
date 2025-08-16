import { personalInfo } from '../utils/constants';
import { MatrixText } from './ui/matrix-text';
import { SocialIcons } from './ui/social-icons';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-6 md:pb-8">
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

          <h2 className="text-2xl md:text-4xl text-white/90 mb-8 md:mb-10 animate-fade-in-delay-1 font-semibold">
            {personalInfo.title}
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-2">
            {personalInfo.bio}
          </p>

          {/* Social Links */}
          <SocialIcons className="mb-6 md:mb-8 animate-fade-in-delay-3" />
        </div>
      </div>
    </section>
  );
};

export default Hero;