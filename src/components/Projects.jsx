import { useAnimationOnScroll } from "../hooks/UseAnimateOnScroll";
import useThemeStore from "../store/themeStore";
import { motion } from "framer-motion";
import { useState } from "react";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";
import FeaturedProject from "./FeaturedProject";

function Projects() {
  const projectSection = useAnimationOnScroll({
    animationClass: "animate-slide-left",
    threshold: 0.1,
  });

  const { lightMode } = useThemeStore();
  const [hovered, setHovered] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTechs, setSelectedTechs] = useState(new Set());

  const allTechs = Array.from(new Set(projects.flatMap((p) => p.technologies))).sort();

  function toggleTech(tech) {
    setSelectedTechs((prev) => {
      const next = new Set(prev);
      if (next.has(tech)) next.delete(tech);
      else next.add(tech);
      return next;
    });
  }

  function getTechIcon(tech) {
    const map = {
      React: '/svgs/react.svg',
      'Next.js': 'https://th.bing.com/th/id/ODF.MzoL3O4svOEyO-tUNCEcNA?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2',
      'Node.js': '/svgs/nodejs.svg',
      MongoDB: '/svgs/mongodb.svg',
      TypeScript: '/svgs/typescript.svg',
      Zustand: 'https://th.bing.com/th/id/OIP.4ej-1rHTfJ5ji7_5XscrWgHaDt?w=200&h=200&c=10&o=6&dpr=1.3&pid=genserp&rm=2',
      Docker: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
      Vercel: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Vercel-logo.svg',
      GitHub: '/svgs/github.svg',
      Postman: '/svgs/postman.svg',
    };
    return map[tech] || null;
  }

  const filteredProjects = projects.filter(
    (p) => selectedTechs.size === 0 || p.technologies.some((t) => selectedTechs.has(t))
  );
  const featuredId = projects && projects[0] ? projects[0].id : null;
  const filteredProjectsExceptFeatured = filteredProjects.filter((p) => p.id !== featuredId);

  return (
    <div className="">
      <div
        id="portfolio"
        ref={projectSection.ref}
        className="py-16 px-4 sm:px-8 lg:px-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-brand-gradient">
          My Projects
        </h2>

        <FeaturedProject project={projects[0]} onOpen={setSelectedProject} />

        <FeaturedProject project={projects[1]} onOpen={setSelectedProject} />
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 w-full h-full bg-blue-500">
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
      )}
    </div>
  );
}

export default Projects;
