import { projects } from "../data/portfolioData";
import type { Project } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project: Project, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-neutral-900 p-6"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-medium text-sky-400 hover:underline">{project.title}</h3>
            </a>
            <span className="block mt-2 mb-3 text-xs text-sky-400 font-semibold">
              {project.tech}
            </span>
            <p className="text-white/70 text-sm">{project.desc}</p>
            <p className="mt-2 text-xs text-white/50">{project.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
