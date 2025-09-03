import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-20 pt-16 md:pt-28"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* LEFT */}
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
            Final-year Applied Science undergraduate specialising in Computer
            Science at the University of Peradeniya, with practical experience
            in software development, AI, and machine learning. A proven team
            player and project contributor, demonstrated through real-world
            academic solutions and leadership roles in student organisations.
            Also, an accomplished photographer and videographer, combining
            technical expertise with creative problem-solving. Passionate about
            using technology and visual storytelling to tackle real-world
            challenges and drive innovation.
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
            Applied Science Undergraduate | AI/ML Enthusiast | Software Engineer
            | Web Developer | Visual Storyteller
          </p>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400/30 to-indigo-600/30 blur-lg" />
            <img
              src="/11.jpg"
              alt="Dilshan Pathirana"
              className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-neutral-900 shadow-lg shadow-sky-500/20 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
