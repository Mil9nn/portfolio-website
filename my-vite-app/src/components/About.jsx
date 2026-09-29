import { GraduationCap, MapPin } from 'lucide-react';

function About() {
  return (
    <section id="about" className="section-pad border-t border-line bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
            Engineer who cares about reliability
          </h2>
        </div>

        <div className="lg:col-span-7">
          <p className="text-lg text-pretty text-muted md:text-xl">
            I&apos;m a full-stack developer focused on shipping complete products —
            clean APIs, thoughtful UI, and systems that stay maintainable after launch.
            My recent work includes healthcare appointment platforms with AI-assisted
            triage and real-time admin tooling.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-page p-5">
              <div className="flex items-center gap-2 text-accent">
                <GraduationCap size={18} aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
                  Education
                </h3>
              </div>
              <p className="mt-4 font-display text-xl font-bold text-ink">
                Bachelor of Engineering
              </p>
              <p className="mt-1 text-sm text-muted">University of Jammu</p>
              <p className="mt-2 text-sm font-medium text-accent">Aug 2019 – Feb 2024</p>
            </div>

            <div className="rounded-2xl border border-line bg-page p-5">
              <div className="flex items-center gap-2 text-accent">
                <MapPin size={18} aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
                  Based In
                </h3>
              </div>
              <p className="mt-4 font-display text-xl font-bold text-ink">Jammu, India</p>
              <p className="mt-1 text-sm text-muted">
                Available for remote roles worldwide and hybrid opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
