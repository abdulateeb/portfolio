import { ShootingStarsBackground } from './components/ui/shooting-stars-background';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';

function App() {
  return (
    <ShootingStarsBackground>
      <div className="min-h-screen transition-colors duration-300">
        <main>
          <Hero />
          <Skills />
          <Education />
          <Experience />
          <Certifications />
          <Achievements />
        </main>
      </div>
    </ShootingStarsBackground>
  );
}

export default App;