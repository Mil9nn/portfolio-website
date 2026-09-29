import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import useThemeStore from '../store/themeStore';

export default function FeaturedProject({ project, onOpen }) {
  const { lightMode } = useThemeStore();

  if (!project) return null;

  return (
    <section className="mb-10">
      <div className={`relative rounded-xl overflow-hidden p-6 flex flex-col md:flex-row items-center gap-6 ${lightMode ? 'bg-surface-light-70 border border-surface' : ''}`}>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
          <p className="text-sm mb-4 text-neutral">{project.subtitle}</p>

          <div className="flex gap-3 items-center mb-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-surface-dark-60 text-theme-muted text-xs rounded" onClick={(e)=>e.stopPropagation()}>
                <FaGithub /> <span>View Code</span>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs px-3 py-2 bg-blue-600 text-white rounded" onClick={(e)=>e.stopPropagation()}>
                <FaExternalLinkAlt /> <span>Live Demo</span>
              </a>
            )}
            <button onClick={() => onOpen(project)} className=" text-xs px-3 py-2 border rounded">More</button>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          {project.images && project.images[0] ? (
            <img src={project.images[0]} alt={`${project.name} screenshot`} className="w-full h-48 object-cover rounded" />
            ) : (
            <div className="w-full h-48 bg-surface-dark rounded flex items-center justify-center text-theme-muted">Screenshot</div>
          )}
          {/* architecture moved to modal; thumbnail removed for consistency */}
        </div>
      </div>
    </section>
  );
}
