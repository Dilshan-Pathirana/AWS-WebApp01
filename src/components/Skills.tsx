import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Skills & Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span key={i} className="bg-sky-900/60 text-sky-200 px-3 py-1 rounded-full text-sm font-medium border border-sky-600">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
