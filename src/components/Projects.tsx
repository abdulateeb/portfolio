import { GlowingEffectDemo } from './ui/glowing-effect-demo';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest work and interactive components with beautiful glowing effects
          </p>
        </div>
        
        <div className="mb-12">
          <GlowingEffectDemo />
        </div>
      </div>
    </section>
  );
};

export default Projects;
