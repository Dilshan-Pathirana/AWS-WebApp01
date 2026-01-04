import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections: string[] = ["about", "skills", "projects", "certificates", "contact"];

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0f0f0f]/40 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0f0f0f]/40">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight text-lg sm:text-xl">
            <span className="text-white">Dilshan</span>{" "}
            <span className="text-gradient">Pathirana</span>
          </a>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="hover:text-white transition-colors"
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          </nav>

          <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-xl hover:bg-white/10 focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          </div>
        </div>
      </Container>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0f0f0f]/80 backdrop-blur-xl">
          <Container className="py-2">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
