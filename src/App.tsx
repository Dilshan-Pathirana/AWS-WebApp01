import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ---- Portfolio Data (Modify and expand for your needs) ----  test build
const skills = [
  "Python",
  "JavaScript",
  "Java",
  "C",
  "HTML",
  "CSS",
  "React.js",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "OpenCV",
  "TensorFlow",
  "Scikit-learn",
  "Keras",
  "NumPy",
  "Matplotlib",
  "MySQL",
  "MongoDB",
  "RESTful APIs",
  "Git",
  "Docker",
  "Postman",
  "VS Code",
];

const projects = [
  {
    title: "AI-Powered Note-Taking Application",
    tech: "Python, OCR, OpenAI API",
    desc: "Designed an AI-assisted tool that scans images/screenshots, extracts and structures text via OCR, and generates refined PDF notes using natural language processing APIs.",
    year: "2025",
  },
  {
    title: "Web Application for Assisted Package Quota Estimation",
    tech: "MERN stack, Postman",
    desc: "Developed a user-friendly web app to generate pricing estimates for media service packages based on client input and preferences.",
    year: "2025",
  },
  {
    title: "Fish Tracking and Distance Analysis System",
    tech: "Python, OpenCV, NumPy, Matplotlib, Multiprocessing",
    desc: "Built tool to analyze fish tank footage by tracking centroid movements, generating heatmaps, calculating distances traveled, and batch-processing videos.",
    year: "2025",
  },
  {
    title: "Camera Shop & Rental Management System",
    tech: "Spring Boot, MySQL, RESTful APIs, Postman",
    desc: "Full-stack web app for camera sales and rentals with secure user authentication, real-time inventory, and an admin dashboard.",
    year: "2025",
  },
  {
    title:
      "Long-Term Efficiency Prediction of Solar Panels Using Machine Learning",
    tech: "Python, Pandas, Scikit-learn, TensorFlow, Keras",
    desc: "Built RNN and LSTM models using NASA POWER data to forecast efficiency of solar panels, aiding sustainable energy planning.",
    year: "2025",
  },
  {
    title: "Selective File Copying Application for Photo Editors",
    tech: "Python",
    desc: "Automated selective photocopying; streamlined editors' bulk requests and reduced manual effort.",
    year: "2025",
  },
  {
    title: "Web Application & Resource Management (perabeats Media Society)",
    tech: "MERN Stack, Postman",
    desc: "Digitized event coordination and equipment booking, replacing sluggish manual workflows with an efficient platform.",
    year: "2024",
  },
];

const awards = [
  "Member of the Year – Videography, Perabeats Media Society, 2024",
];

const extracurriculars = [
  "Editorial Panel Member, Robarosiya Society, 2023–2024",
  "Member, Perabeats Media Society, 2023–2024",
  "Executive Committee Member, Perabeats Media Society, 2024–2025",
];

// ---- App Component ----
export default function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title =
      "Dilshan Pathirana — Applied Science Undergraduate | Software Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-white/20">
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(56,189,248,.6), transparent)",
            scale,
          }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(99,102,241,.7), transparent)",
            y,
          }}
        />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
          <a
            href="#hero"
            className="font-semibold tracking-tight text-lg sm:text-xl"
          >
            <span className="text-sky-400">Dilshan</span> Pathirana
          </a>
          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-white/10">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm hover:bg-neutral-800"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm hover:bg-neutral-800"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm hover:bg-neutral-800"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm hover:bg-neutral-800"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-20 pt-16 md:pt-28"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight"
            >
              Hi, I'm <span className="text-sky-400">Dilshan Pathirana</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 max-w-xl text-neutral-300 text-base sm:text-lg"
            >
              Final-year Applied Science undergraduate (Computer Science major)
              at University of Peradeniya. Passionate software engineer, AI/ML
              integrator, and visual storyteller. Building real-world academic
              solutions and innovative software for tomorrow’s challenges.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#projects"
                className="rounded-2xl bg-sky-500 px-5 py-3 font-medium shadow-lg shadow-sky-500/20 hover:brightness-110 text-center"
              >
                See Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10 text-center"
              >
                Contact
              </a>
            </motion.div>
            <p className="mt-6 text-xs uppercase tracking-wider text-white/50">
              Full-stack development · AI/ML · Academic research · Data analysis
              · Linux system administration
            </p>
          </div>
          {/* Side feature cards or replace with your own photo/graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-500/30 to-indigo-500/30 blur" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-red-400" />
                <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
                <span className="inline-block h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-sm text-white/80">Machine Learning</p>
                  <p className="mt-1 text-xs text-white/60">
                    AI, LSTMs, Computer Vision
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-sm text-white/80">
                    Full-stack Engineering
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    MERN, Spring Boot, REST APIs
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-sm text-white/80">Academic Research</p>
                  <p className="mt-1 text-xs text-white/60">
                    Biodiversity, Statistics
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-sm text-white/80">Creative Storytelling</p>
                  <p className="mt-1 text-xs text-white/60">
                    Photography, Videography
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-neutral-300 mb-4">
          Final-year BSc (Hons) Applied Science (Computer Science)
          undergraduate, University of Peradeniya.
          <br />
          Driven by curiosity and creative problem-solving, I blend technical
          engineering, research, and visual arts.
          <br />
          Fluent in English and Sinhala.
        </p>
        <div className="mb-4">
          <strong>Certifications / Awards:</strong>
          <ul className="list-disc list-inside mt-2 text-neutral-200">
            {awards.map((aw, i) => (
              <li key={i}>{aw}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Extracurriculars:</strong>
          <ul className="list-disc list-inside mt-2 text-neutral-200">
            {extracurriculars.map((ec, i) => (
              <li key={i}>{ec}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Skills & Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-sky-900/60 text-sky-200 px-3 py-1 rounded-full text-sm font-medium border border-sky-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-sm flex flex-col h-full"
            >
              <h3 className="text-lg font-medium">{project.title}</h3>
              <span className="inline-block mt-2 mb-4 px-2 py-1 rounded bg-neutral-800 text-xs text-sky-400 font-semibold">
                {project.tech}
              </span>
              <p className="mb-2 text-white/70 text-sm flex-1">
                {project.desc}
              </p>
              <p className="mt-auto text-xs text-white/50">{project.year}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-20"
      >
        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Let’s work together
          </h2>
          <p className="mt-2 text-white/70 text-sm sm:text-base">
            Interested in collaborating or want to connect? Feel free to reach
            out via email or LinkedIn.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:dilshan.pathirana.121@gmail.com"
              className="rounded-xl  px-5 py-3 font-medium ring-1 ring-white/20 hover:bg-sky-400/50 text-center text-white"
            >
              dilshan.pathirana.121@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/dilshan-121-pathiran"
              className="rounded-xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Dilshan-Pathirana"
              className="rounded-xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Dilshan Pathirana. All rights reserved.
      </footer>
    </div>
  );
}
