import { IconCloud } from './ui/interactive-icon-cloud';

const slugs = [
  "typescript",
  "javascript",
  "python",
  "react",
  "nextdotjs",
  "nodejs",
  "express",
  "html5",
  "css3",
  "tailwindcss",
  "git",
  "github",
  "docker",
  "kubernetes",
  "amazonaws",
  "googlecloud",
  "postgresql",
  "mongodb",
  "redis",
  "firebase",
  "vercel",
  "nginx",
  "linux",
  "ubuntu",
  "visualstudiocode",
  "figma",
  "tensorflow",
  "pytorch",
  "opencv",
  "pandas",
  "numpy",
  "jupyter",
  "anaconda",
];

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tools and Technologies I work with, to bring ideas to life
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative flex w-full max-w-2xl items-center justify-center overflow-hidden rounded-lg px-8 pb-8 pt-8">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
