import { useEffect } from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import useThemeStore from '../store/themeStore';
import Carousel from './Carousel';

export default function ProjectModal({ project, onClose }) {
  const { lightMode } = useThemeStore();

  if (!project) return null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className={`w-full max-w-4xl max-h-screen overflow-y-auto p-6 ${
          lightMode ? 'bg-white text-black' : 'bg-surface-dark text-theme-muted'
        }`} 
      >
        <button
          className="absolute z-20 top-2 right-2 p-2 rounded hover-bg-theme-overlay"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <FaTimes />
        </button>

        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((t, i) => (
            <span key={`${project.id}-tech-${i}`} className="text-[12px] px-2 py-0.5 bg-purple-700/70 text-white rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* 'View Code' and 'Live Demo' links are shown in the list/featured view; removed here to avoid duplication */}

        {project.images && project.images.length > 0 && (
          <div className="mb-4">
            <Carousel images={project.images} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Role</h4>
            <p className="text-sm mb-3">{project.role}</p>

            {project.responsibilities && (
              <>
                <h4 className="font-semibold">Responsibilities</h4>
                <ul className="mt-2 list-disc list-inside text-sm">
                  {project.responsibilities.map((r, i) => (
                    <li key={`${project.id}-res-${i}`}>{r}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div>
            {project.challenges && (
              <>
                <h4 className="font-semibold">Key Challenges</h4>
                <ul className="mt-2 list-disc list-inside text-sm">
                  {project.challenges.map((c, i) => (
                    <li key={`${project.id}-ch-${i}`}>{c}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {project.codeSnippet && (
          <div className="mt-4">
            <h4 className="font-semibold">Key Snippet</h4>
            <pre className="bg-surface-dark-60 text-theme-muted p-3 rounded text-xs overflow-auto mt-2">{project.codeSnippet}</pre>
          </div>
        )}

        {project.metrics && (
          <>
            <h4 className="font-semibold mt-4">Impact / Metrics</h4>
            <ul className="mt-2 list-disc list-inside text-sm">
              {project.metrics.map((m, i) => (
                <li key={`${project.id}-metric-${i}`}>{m}</li>
              ))}
            </ul>
          </>
        )}

        <div className="flex gap-3 items-center mt-4">
          {project.ciBadge && <img src={project.ciBadge} alt="ci badge" className="h-6" />}
          {project.coverageBadge && <img src={project.coverageBadge} alt="coverage badge" className="h-6" />}
          {project.caseStudy && (
            <a href={project.caseStudy} target="_blank" rel="noreferrer" className="ml-3 text-brand-blue">View case study</a>
          )}
        </div>
      </div>
  );
}
