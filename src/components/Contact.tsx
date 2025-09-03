export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-20">
      <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Let’s work together</h2>
        <p className="mt-2 text-white/70 text-sm sm:text-base">
          Interested in collaborating or want to connect? Feel free to reach
          out via email or LinkedIn.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:dilshan.pathirana.121@gmail.com"
            className="rounded-xl px-5 py-3 font-medium ring-1 ring-white/20 hover:bg-sky-400/50 text-center text-white"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/dilshan-121-pathiran"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10 text-center"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Dilshan-Pathirana"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-5 py-3 font-medium hover:bg-white/10 text-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
