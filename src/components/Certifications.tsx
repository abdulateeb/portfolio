import { certifications } from '../utils/constants';
import { AwardBadge } from './ui/award-badge';
import { MatrixText } from './ui/matrix-text';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MatrixText 
            text="Certifications"
            className="text-4xl md:text-5xl font-bold mb-6"
            initialDelay={500}
            letterAnimationDuration={300}
            letterInterval={80}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            // Map different types of certifications to different award types
            const getAwardType = (organization: string, platform: string) => {
              if (organization.includes('Stanford') || organization.includes('MIT') || organization.includes('University')) {
                return 'golden-kitty' as const;
              } else if (platform.includes('Coursera') || platform.includes('edX')) {
                return 'product-of-the-day' as const;
              } else if (platform.includes('NPTEL') || organization.includes('IIT')) {
                return 'product-of-the-month' as const;
              } else {
                return 'product-of-the-week' as const;
              }
            };

            return (
              <div key={index} className="flex justify-center">
                <AwardBadge
                  type={getAwardType(cert.organization, cert.platform)}
                  link={cert.link}
                  certificateName={cert.name}
                  organization={cert.organization}
                  platform={cert.platform}
                  date={cert.date}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;