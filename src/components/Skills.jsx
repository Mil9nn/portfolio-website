import { useState } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';

const categories = {
  all: 'All',
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
};

/** @typedef {{ name: string; icon?: string; mono?: boolean }} Skill */

/** @type {Record<'frontend' | 'backend' | 'tools', Skill[]>} */
const skills = {
  frontend: [
    { name: 'HTML', icon: '/svgs/html.svg' },
    { name: 'CSS', icon: '/svgs/css.svg' },
    { name: 'JavaScript', icon: '/svgs/javascript.svg' },
    { name: 'TypeScript', icon: '/svgs/typescript.svg' },
    { name: 'React', icon: '/svgs/react.svg' },
    { name: 'React Native', icon: '/svgs/react.svg' },
    { name: 'Next.js', icon: '/svgs/nextjs.svg', mono: true },
    { name: 'Tailwind CSS', icon: '/svgs/tailwind.svg' },
    { name: 'Redux Toolkit', icon: '/svgs/redux.svg' },
    { name: 'Zustand', icon: '/svgs/zustand.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: '/svgs/nodejs.svg' },
    { name: 'Express', icon: '/svgs/express.svg', mono: true },
    { name: 'MongoDB', icon: '/svgs/mongodb.svg' },
    { name: 'Supabase', icon: '/svgs/supabase.svg' },
    { name: 'Socket.IO', icon: '/svgs/socketio.svg', mono: true },
  ],
  tools: [
    { name: 'Git', icon: '/svgs/git.svg' },
    { name: 'Figma', icon: '/svgs/figma.svg' },
    { name: 'Postman', icon: '/svgs/postman.svg' },
    { name: 'Vercel', icon: '/svgs/vercel.svg', mono: true },
    { name: 'Clerk', icon: '/svgs/clerk.svg' },
    { name: 'Docker', icon: '/svgs/docker.svg' },
  ],
};

function Skills() {
  const [active, setActive] = useState('all');
  const shouldReduceMotion = useReducedMotion();
  const list =
    active === 'all'
      ? [...skills.frontend, ...skills.backend, ...skills.tools]
      : skills[active];

  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Toolkit
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
              Skills I use to ship
            </h2>
            <p className="mt-4 text-pretty text-muted">
              A focused stack for modern product engineering — not a laundry list.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Skill categories"
          >
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active === key}
                onClick={() => setActive(key)}
                className={`min-h-11 rounded-md border px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  active === key
                    ? 'border-accent bg-accent text-white'
                    : 'border-line bg-surface text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <Motion.ul
          key={active}
          role="tabpanel"
          aria-label={`${categories[active]} skills`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: shouldReduceMotion
                ? {}
                : { delayChildren: 0.03, staggerChildren: 0.045 },
            },
          }}
          className="mt-10 grid min-h-[46rem] grid-cols-2 content-start gap-3 sm:min-h-[29rem] sm:grid-cols-3 md:min-h-[24.75rem] md:grid-cols-4 lg:min-h-[20.5rem] lg:grid-cols-5"
        >
          {list.map((skill) => (
            <Motion.li
              key={skill.name}
              translate="no"
              variants={{
                hidden: shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: -12, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: shouldReduceMotion ? 0 : 0.28 },
                },
              }}
            >
              <div className="group flex min-h-14 items-center gap-3 rounded-md border border-line bg-surface px-3.5 py-3 transition-colors duration-200 hover:border-accent hover:bg-accent-soft">
                {skill.icon ? (
                  <img
                    src={skill.icon}
                    alt=""
                    width={28}
                    height={28}
                    className={`size-7 shrink-0 object-contain ${
                      skill.mono ? 'dark:invert' : ''
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex size-7 shrink-0 items-center justify-center rounded bg-accent-soft text-[11px] font-bold tracking-tight text-accent"
                  >
                    {skill.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
                <span className="text-sm font-medium text-ink transition-colors duration-200 group-hover:text-accent">
                  {skill.name}
                </span>
              </div>
            </Motion.li>
          ))}
        </Motion.ul>
      </div>
    </section>
  );
}

export default Skills;
