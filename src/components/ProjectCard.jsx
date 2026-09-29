import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import useThemeStore from '../store/themeStore';

export default function ProjectCard({ project, onOpen }) {
  const { lightMode } = useThemeStore();

  return (
    <motion.div
      className={`relative p-5 rounded-lg shadow-lg border overflow-hidden flex flex-col justify-between transition-transform duration-300 cursor-pointer ${
        lightMode ? 'bg-surface-light border border-surface' : 'bg-surface-dark border border-surface'
      }`}
      whileHover={{ scale: 1.03 }}
      onClick={() => onOpen(project)}
    >
      <div>
        <h3 className={`text-lg font-semibold ${lightMode ? 'text-black' : 'text-theme-muted'}`}>
          {project.name}
        </h3>
        <p className={`text-sm mt-2 ${lightMode ? 'text-neutral-inverse' : 'text-theme-subtle'}`}>
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech, i) => (
            <span key={`${project.id}-tech-${i}`} className="text-[11px] px-2 py-0.5 bg-purple-700/70 text-white rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4 z-10">
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(project); }}
          className="px-3 py-1 border rounded text-sm"
        >
          More
        </button>
        {project.github && (
          <a
            href={project.github}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral hover:text-theme-muted"
          >
            <FaGithub />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue hover-text-brand-blue"
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </motion.div>
  );
}
