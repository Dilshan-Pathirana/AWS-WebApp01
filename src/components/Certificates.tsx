import { motion } from "framer-motion";
import { certificates } from "../data/portfolioData";
import Container from "./Container";
import GlassCard from "./GlassCard";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Certificates() {
  return (
    <Section id="certificates">
      <Container size="7xl">
        <SectionHeader title="Certificates" showAccentBar={true} />

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                type: "spring",
                stiffness: 50,
              }}
            >
              <GlassCard className="p-8" hoverEffect={true}>
                <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>

                <div className="space-y-2 text-gray-300">
                  <p className="text-sm">
                    <span className="font-semibold text-white">Course:</span>{" "}
                    {cert.course}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-white">Completion:</span>{" "}
                    {cert.completion}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-white">Certificate ID:</span>{" "}
                    {cert.certificateId}
                  </p>
                </div>

                <p className="mt-5 text-sm text-gray-400 italic">{cert.signedBy}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
