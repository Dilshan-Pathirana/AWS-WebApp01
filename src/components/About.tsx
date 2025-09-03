import { awards, extracurriculars } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
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
  );
}
