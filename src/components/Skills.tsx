import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import Container from "./Container";
import GlassCard from "./GlassCard";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeader
          title="Skills & Tech Stack"
          lead=""
          align="center"
        />

        <div className="relative h-[420px] md:h-[320px] w-full flex flex-wrap justify-center content-center gap-4">
          {skills.map((skill, index) => (
            <FloatingPill key={skill} index={index}>
              {skill}
            </FloatingPill>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FloatingPill({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const duration = 3 + (index % 4);
  const yOffset = 10 + (index % 3) * 5;
  const delay = index * 0.05;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
    >
      <motion.div
        animate={{ y: [-yOffset, yOffset, -yOffset] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.15,
        }}
      >
        <GlassCard
          className="px-6 py-3 rounded-full !bg-white/5 hover:!bg-white/10 cursor-default"
          hoverEffect={true}
        >
          <span className="text-gray-200 font-medium whitespace-nowrap">
            {children}
          </span>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
