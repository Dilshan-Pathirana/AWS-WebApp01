import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    document.title =
      'Dilshan Pathirana — Applied Science Undergraduate | Software Engineer'
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-violet-500/30 antialiased">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-fuchsia-500/5 blur-[80px]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-[120px]" />
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-900/10 blur-[100px]" />
          </div>
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
