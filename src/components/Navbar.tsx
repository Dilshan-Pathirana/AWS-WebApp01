import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections: string[] = ["about", "skills", "projects", "certificates", "contact"];

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
        <a href="#hero" className="font-semibold tracking-tight text-lg sm:text-xl">
          <span className="text-sky-400">Dilshan</span> Pathirana
        </a>

        <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
          {sections.map((s) => (
            <a key={s} href={`#${s}`} className="hover:text-white transition">
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-white/10 focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-white/10">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm hover:bg-neutral-800"
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
