import { useAnimationOnScroll } from "../hooks/UseAnimateOnScroll";
import useThemeStore from "../store/themeStore";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const projectSection = useAnimationOnScroll({
    animationClass: "animate-slide-left",
    threshold: 0.1,
  });

  const { lightMode } = useThemeStore();
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Spotify Clone",
      description:
        "A full-stack Spotify-inspired music streaming platform with Clerk auth, audio playback, admin dashboard, and Cloudinary integration.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Clerk",
        "Cloudinary",
        "Tailwind CSS",
      ],
      github: "https://github.com/Mil9nn/spotify-clone",
      demo: "https://spotify-clone-r71v.onrender.com",
    },
    {
      id: 2,
      name: "Real-Time Chat App",
      description:
        "A real-time messaging web app using Socket.IO with authentication, profile upload, themes, and status indicators.",
      technologies: [
        "React",
        "Node.js",
        "Socket.IO",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      github: "https://github.com/Mil9nn/chat-app",
      demo: "https://chat-app-e1y3.onrender.com",
    },
    {
      id: 3,
      name: "Password Manager",
      description:
        "Secure password vault to manage credentials using bcrypt and MongoDB.",
      technologies: [
        "React",
        "MongoDB",
        "Express",
        "Node.js",
        "Tailwind CSS",
      ],
      github: "https://github.com/Mil9nn/Password_Manager",
    },
    {
      id: 4,
      name: "Quick Kart",
      description:
        "React e-commerce app with product browsing, cart, and filter using Context API and Fake Store API.",
      technologies: ["React", "Context API", "Tailwind CSS", "API"],
      github: "https://github.com/Mil9nn/resume-project",
      demo: "https://shopping-cart031.netlify.app/",
    },
    {
      id: 5,
      name: "Take Notes",
      description:
        "A simple note taking application where users can create, edit or delete notes, mark the tasks as completed, and more.",
      technologies: ["React"],
      github: "https://github.com/Mil9nn/The-Keeper-App",
      demo: "https://keeper786.netlify.app/",
    },
  ];

  return (
    <div
      id="portfolio"
      ref={projectSection.ref}
      className="py-16 px-4 sm:px-8 lg:px-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onHoverStart={() => setHovered(project.id)}
            onHoverEnd={() => setHovered(null)}
            className={`relative p-5 rounded-lg shadow-lg border overflow-hidden flex flex-col justify-between transition-transform duration-500 ${
              lightMode
                ? "bg-zinc-200 border-zinc-300"
                : "bg-zinc-800 border-zinc-700"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated Paint Splash Background */}
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              animate={{
                clipPath:
                  hovered === project.id
                    ? "circle(150% at 50% 50%)"
                    : "circle(0% at 50% 50%)",
              }}
              transition={{
                duration: 1,
              }}
              style={{
                background: "radial-gradient(circle at center, #a855f7 0%, #7e22ce 100%)",
              }}
            />

            <div className="relative z-10">
              <h3
                className={`text-lg font-semibold mb-2 ${
                  lightMode ? "text-black" : "text-white"
                }`}
              >
                {project.name}
              </h3>
              <p
                className={`text-sm mb-4 ${
                  lightMode ? "text-gray-800" : "text-gray-300"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 bg-purple-700/70 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="size-6" />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="size-5 text-blue-600" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
