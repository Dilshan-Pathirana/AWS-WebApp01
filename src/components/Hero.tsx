import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-fuchsia-500/10 blur-[80px]"
        />
      </div>

      <Container>
        <motion.div style={{ opacity }} className="relative z-10">
          <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-gray-300">
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            <span className="block text-white">Hi, I'm</span>
            <span className="block text-gradient">Dilshan Pathirana</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10">See Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg w-full sm:w-auto text-center transition-colors"
            >
              Contact
            </motion.a>
          </motion.div>
          <p className="mt-8 text-xs uppercase tracking-widest text-white/50">
            Applied Science Undergraduate | AI/ML Enthusiast | Software Engineer
            | Web Developer | Visual Storyteller
          </p>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-violet-400/30 to-cyan-400/30 blur-2xl" />
            <img
              src={`${import.meta.env.BASE_URL}11.jpg`}
              alt="Dilshan Pathirana"
              className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border border-white/10 bg-white/5 shadow-2xl"
            />
          </div>
        </motion.div>

          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-12 rounded-full bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
