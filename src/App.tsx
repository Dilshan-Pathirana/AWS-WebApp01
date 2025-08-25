import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Your Brand — Lightning-fast, Delightfully Animated";
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
            href="#"
            className="font-semibold tracking-tight text-lg sm:text-xl"
          >
            <span className="text-sky-400">Your</span>Test App 01
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a href="#showcase" className="hover:text-white transition">
              Showcase
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
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm hover:bg-neutral-800"
            >
              Features
            </a>
            <a
              href="#showcase"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm hover:bg-neutral-800"
            >
              Showcase
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

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-20 pt-16 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight"
            >
              Build fast. <span className="text-sky-400">Launch faster.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 max-w-xl text-neutral-300 text-base sm:text-lg"
            >
              A minimalist one-page template with buttery-smooth animations,
              built with React, Tailwind, and Framer Motion.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#features"
                className="rounded-2xl bg-sky-500 px-5 py-3 font-medium shadow-lg shadow-sky-500/20 hover:brightness-110 text-center"
              >
                See Features
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10 text-center"
              >
                Contact Us
              </a>
            </motion.div>
            <p className="mt-6 text-xs uppercase tracking-wider text-white/50">
              No framework lock-in · 100% static · CDN-ready
            </p>
          </div>

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
                  <p className="text-sm text-white/80">Motion primitives</p>
                  <p className="mt-1 text-xs text-white/60">
                    fade, slide, spring
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-sm text-white/80">Hero gradient</p>
                  <p className="mt-1 text-xs text-white/60">
                    dynamic blobs + parallax
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-sm text-white/80">Responsive</p>
                  <p className="mt-1 text-xs text-white/60">mobile → desktop</p>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-sm text-white/80">Zero backend</p>
                  <p className="mt-1 text-xs text-white/60">S3 + CloudFront</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
      >
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {[
            {
              title: "Blazing load times",
              desc: "Static assets optimized for CDN delivery.",
            },
            { title: "SPA routing", desc: "Works with index.html fallback." },
            {
              title: "Accessible by default",
              desc: "Semantic markup + focus states.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section
        id="showcase"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
      >
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
              className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 p-4"
            >
              <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-white/10 text-sm text-white/60">
                Drop your work here #{i}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-20"
      >
        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Let’s work together
          </h2>
          <p className="mt-2 text-white/70 text-sm sm:text-base">
            Replace this with your email form or link. For a 100% static setup,
            link to mailto: or use a form backend service.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-6 inline-block rounded-xl bg-white/10 px-5 py-3 font-medium ring-1 ring-white/20 hover:bg-white/20 text-center"
          >
            hello@example.com
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </footer>
    </div>
  );
}
