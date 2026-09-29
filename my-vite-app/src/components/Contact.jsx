import { Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line bg-surface">
      <div className="container-page max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
          Let&apos;s build something solid
        </h2>
        <p className="mt-4 text-pretty text-muted">
          Recruiters and founders — reach out for full-stack roles, freelance
          builds, or a quick technical conversation.
        </p>

        <ul className="mt-8 space-y-4">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-md border border-line bg-page text-accent">
              <Mail size={16} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-muted">Email</p>
              <a
                href="mailto:singhmilan314@gmail.com"
                className="link-accent break-all"
              >
                singhmilan314@gmail.com
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-md border border-line bg-page text-accent">
              <Phone size={16} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-muted">Phone</p>
              <a href="tel:+918899277840" className="link-accent">
                +91&nbsp;88992&nbsp;77840
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-md border border-line bg-page text-accent">
              <MapPin size={16} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-muted">Location</p>
              <p className="text-ink">Jammu, India</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
