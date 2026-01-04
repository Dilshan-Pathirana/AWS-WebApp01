import { projects } from "../data/portfolioData";
import type { Project } from "../data/portfolioData";
import { motion } from "framer-motion";
import Container from "./Container";
import GlassCard from "./GlassCard";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <Section id="projects">
      <Container size="7xl">
        <SectionHeader title="Projects" showAccentBar={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                type: "spring",
                stiffness: 50,
              }}
            >
              <GlassCard className="h-full flex flex-col p-8" hoverEffect={true}>
                <div className="flex-1 flex flex-col">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-400 transition-colors">
                        {project.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  )}

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  <p className="text-gray-400 leading-relaxed flex-1">
                    {project.desc}
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-widest text-white/50">
                    {project.year}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
