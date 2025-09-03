import { useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
// If the file is named Navbar.tsx and exists in ./components, this import is correct.
// If not, update the path below to match the actual location or filename, for example:
// import Navbar from "./components/Navbar/Navbar";
// import Navbar from "./components/Navbar/index";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    document.title =
      "Dilshan Pathirana — Applied Science Undergraduate | Software Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* Background Blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(56,189,248,.6), transparent)",
            scale,
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(99,102,241,.6), transparent)",
            scale,
            y,
          }}
        />
      </div>

      {/* Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
