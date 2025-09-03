import { motion } from "framer-motion";
import { certificates } from "../data/portfolioData";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Certificates</h2>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-sm"
          >
            <h3 className="text-lg font-medium text-sky-400">{cert.title}</h3>

            <p className="text-sm text-neutral-300">
              <strong>Course:</strong> {cert.course}
            </p>
            <p className="text-sm text-neutral-300">
              <strong>Completion:</strong> {cert.completion}
            </p>
            <p className="text-sm text-neutral-300">
              <strong>Certificate ID:</strong> {cert.certificateId}
            </p>
            <p className="text-sm text-neutral-300 mt-2 italic">
              {cert.signedBy}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
