import { useState } from 'react'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { CursorGlow } from './components/CursorGlow'
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

  return (
    <>
      <CursorGlow />
      <div className="site-texture" aria-hidden="true" />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`relative z-10 min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"} bg-transparent text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
