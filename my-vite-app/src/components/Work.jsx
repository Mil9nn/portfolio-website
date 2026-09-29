import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, X } from 'lucide-react';
import projects from '../data/projects';

function isValidUrl(url) {
  return typeof url === 'string' && /^https?:\/\//.test(url);
}

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[var(--overlay)]"
        aria-label="Close dialog"
        onClick={onClose}
      />

      <div
        className="relative z-10 flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-line bg-surface shadow-[var(--shadow-soft)] sm:rounded-2xl"
        style={{ overscrollBehavior: 'contain' }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Case Study
            </p>
            <h3 id="project-modal-title" className="mt-1 truncate text-2xl font-bold text-ink">
              {project.name}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-line text-ink transition-colors duration-200 hover:bg-accent-soft"
            aria-label="Close project details"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-pretty text-muted">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 12).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-line bg-page px-2.5 py-1 text-xs font-medium text-muted"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 12 && (
              <span className="rounded-md border border-line px-2.5 py-1 text-xs text-muted">
                +{project.technologies.length - 12} more
              </span>
            )}
          </div>

          {project.images?.[0] && (
            <img
              src={project.images[0]}
              alt={`${project.name} interface preview`}
              width={1200}
              height={700}
              className="mt-6 aspect-[16/9] w-full rounded-xl object-cover"
              loading="lazy"
            />
          )}

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">Role</h4>
              <p className="mt-2 text-sm text-muted">{project.role}</p>
              {project.responsibilities && (
                <>
                  <h4 className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-ink">
                    Highlights
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted">
                    {project.responsibilities.slice(0, 5).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div>
              {project.challenges && (
                <>
                  <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
                    Challenges Solved
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted">
                    {project.challenges.slice(0, 4).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {project.metrics && (
            <div className="mt-8">
              <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">Impact</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.metrics.slice(0, 4).map((metric) => (
                  <li
                    key={metric}
                    className="rounded-xl border border-line bg-page px-4 py-3 text-sm text-muted"
                  >
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.codeSnippet && (
            <div className="mt-8">
              <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
                Key Snippet
              </h4>
              <pre
                className="mt-3 overflow-x-auto rounded-xl p-4 text-xs leading-relaxed"
                style={{ background: 'var(--code-bg)', color: 'var(--code-text)' }}
                translate="no"
              >
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3 border-t border-line px-5 py-4 sm:px-6">
          {isValidUrl(project.github) && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={16} aria-hidden="true" />
              View Code
            </a>
          )}
          {isValidUrl(project.demo) && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" className="section-pad border-t border-line">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Selected Work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
            Projects that show how I ship
          </h2>
          <p className="mt-4 text-pretty text-muted">
            Production systems with real architecture decisions — auth, real-time sync,
            AI integrations, and measurable outcomes.
          </p>
        </div>

        <div className="mt-14 space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={project.id}
                className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="lg:col-span-7">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-surface text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    <img
                      src={project.images?.[0] || project.onlineScreenshots?.[0]}
                      alt={`${project.name} preview`}
                      width={1200}
                      height={700}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : undefined}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-[rgb(11_18_32/0.35)] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                  </button>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    0{index + 1} / 0{projects.length}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{project.name}</h3>
                  <p className="mt-3 text-pretty text-muted">{project.subtitle}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="btn-primary"
                    >
                      Case Study
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </button>
                    {isValidUrl(project.demo) && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        Live Demo
                      </a>
                    )}
                    {isValidUrl(project.github) && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-surface text-ink transition-colors duration-200 hover:text-accent"
                        aria-label={`${project.name} on GitHub`}
                      >
                        <Github size={18} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

export default Work;
