import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { CursorGlow } from './components/CursorGlow'
import { FloatingResume } from './components/FloatingResume'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { ProblemSolving } from './components/sections/ProblemSolving'
import { Footer } from './components/sections/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "experience",
      "projects",
      "problem-solving",
      "contact",
    ];
    let frameId = null;

    const updateActiveSection = () => {
      const anchorY = window.innerHeight * 0.38;
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const currentSection =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();

          return rect.top <= anchorY && rect.bottom >= anchorY;
        }) ||
        sections
          .map((section) => ({
            id: section.id,
            distance: Math.abs(section.getBoundingClientRect().top - anchorY),
          }))
          .sort((a, b) => a.distance - b.distance)[0];

      if (currentSection) {
        setActiveSection(currentSection.id);
      }

      frameId = null;
    };

    const requestUpdate = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <>
      <CursorGlow />
      <FloatingResume />
      <div className="site-texture" aria-hidden="true" />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`relative z-10 min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"} bg-transparent text-gray-100`}>
        <Navbar
          activeSection={activeSection}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MobileMenu
          activeSection={activeSection}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Home />
        <About />
        <Experience />
        <Projects />
        <ProblemSolving />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
