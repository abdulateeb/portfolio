import { CertificateBadge } from "./certificate-badge";

const demoLink = "https://www.coursera.org/account/accomplishments/specialization/2GZS35IFSBVX";

export const CertificateDemo = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Certificate Badge Demo</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CertificateBadge
            name="Machine Learning Specialization"
            organization="Stanford University, Deeplearning.AI"
            platform="Coursera"
            date="2024"
            link={demoLink}
            index={0}
          />
          <CertificateBadge
            name="Python for Everybody"
            organization="University of Michigan"
            platform="Coursera"
            date="2024"
            link={demoLink}
            index={1}
          />
          <CertificateBadge
            name="IBM Data Science Professional Certificate"
            organization="IBM"
            platform="Coursera"
            date="2024"
            link={demoLink}
            index={2}
          />
        </div>
      </div>
    </div>
  );
};
