import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';

function Hero() {
  return (
    <section
      id="home"
      className="hero-atmosphere relative isolate min-h-[calc(100svh-4rem)] overflow-hidden"
    >
      <div className="container-page relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 md:py-20">
        <p className="reveal-up mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Full-Stack Developer
        </p>

        <h1
          className="reveal-up font-display max-w-4xl text-[clamp(2.75rem,8vw,5.5rem)] font-extrabold text-ink"
          style={{ animationDelay: '80ms' }}
          translate="no"
        >
          Milan Singh
        </h1>

        <div
          className="draw-line mt-5 h-1 w-24 rounded-full bg-accent"
          aria-hidden="true"
        />

        <p
          className="reveal-up mt-7 max-w-xl text-lg text-pretty text-muted md:text-xl"
          style={{ animationDelay: '140ms' }}
        >
          I build reliable, production-ready web systems with React, Node.js, and
          modern TypeScript stacks — end to end, from auth to real-time dashboards.
        </p>

        <div
          className="reveal-up mt-10 flex flex-wrap items-center gap-3"
          style={{ animationDelay: '220ms' }}
        >
          <a href="#work" className="btn-primary">
            View Selected Work
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a
            href="mailto:singhmilan314@gmail.com"
            className="btn-secondary"
          >
            Email Me
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div
          className="reveal-up mt-10 flex items-center gap-3"
          style={{ animationDelay: '300ms' }}
        >
          <a
            href="https://github.com/Mil9nn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-surface text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/milan-singh-51351b1bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-surface text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <span className="ml-2 text-sm text-muted">Open to full-time roles</span>
        </div>

        <div
          className="name-mark pointer-events-none absolute -right-4 bottom-8 -z-10 hidden select-none text-[clamp(6rem,18vw,14rem)] lg:block"
          aria-hidden="true"
        >
          MS
        </div>
      </div>
    </section>
  );
}

export default Hero;
