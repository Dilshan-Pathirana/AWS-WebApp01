export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let’s work together</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Interested in collaborating or want to connect? Feel free to reach
              out via email or LinkedIn.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:dilshan.pathirana.121@gmail.com"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Email</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="https://linkedin.com/in/dilshan-121-pathiran"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg w-full sm:w-auto text-center transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Dilshan-Pathirana"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg w-full sm:w-auto text-center transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
