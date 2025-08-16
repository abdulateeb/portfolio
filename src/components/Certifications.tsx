import { certifications } from '../utils/constants';
import { AwardBadge } from './ui/award-badge';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <Award className="h-7 w-7 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
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