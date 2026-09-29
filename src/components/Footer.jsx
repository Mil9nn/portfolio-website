import { Github, Linkedin } from 'lucide-react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {year} <span translate="no">Milan Singh</span>.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Mil9nn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-full border border-[#181717] bg-[#181717] text-white transition-all duration-200 hover:scale-110 hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <Github size={18} className="text-white" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/milan-singh-51351b1bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-md border border-[#0A66C2] bg-[#0A66C2] text-white transition-all duration-200 hover:scale-110 hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="text-white" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
