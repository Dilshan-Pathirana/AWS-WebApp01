import { awards, extracurriculars } from "../data/portfolioData";
import Container from "./Container";
import GlassCard from "./GlassCard";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader
          title="About Me"
          lead=""
          showAccentBar={true}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard className="p-8" hoverEffect={true}>
            <p className="text-gray-300 leading-relaxed">
              Final-year BSc (Hons) Applied Science (Computer Science)
              undergraduate, University of Peradeniya.
              <br />
              Driven by curiosity and creative problem-solving, I blend technical
              engineering, research, and visual arts.
              <br />
              Fluent in English and Sinhala.
            </p>
          </GlassCard>

          <GlassCard className="p-8" hoverEffect={true}>
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-widest text-white/50 mb-3">
                  Certifications / Awards:
                </p>
                <ul className="space-y-2 text-gray-200">
                  {awards.map((aw, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span className="leading-relaxed">{aw}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-white/50 mb-3">
                  Extracurriculars:
                </p>
                <ul className="space-y-2 text-gray-200">
                  {extracurriculars.map((ec, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span className="leading-relaxed">{ec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </Section>
  );
}
