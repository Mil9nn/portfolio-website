import React from 'react';
import { useAnimationOnScroll } from '../hooks/UseAnimateOnScroll';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
    const projectSection = useAnimationOnScroll({
        animationClass: 'animate-slide-left',
        threshold: 0.1
    });

    const projects = [
        {
            id: 1,
            name: "Spotify Clone",
            image: "/images/spotify-clone.png",
            description: "A full-stack Spotify-inspired music streaming platform with Clerk auth, audio playback, admin dashboard, and Cloudinary integration.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Clerk", "Cloudinary", "Tailwind CSS"],
            github: "https://github.com/Mil9nn/spotify-clone",
            demo: "https://spotify-clone-r71v.onrender.com"
        },
        {
            id: 2,
            name: "Real-Time Chat App",
            image: "/images/chatty.png",
            description: "A real-time messaging web app using Socket.IO with authentication, profile upload, themes, and status indicators.",
            technologies: ["React", "Node.js", "Socket.IO", "Express", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/Mil9nn/chat-app",
            demo: "https://chat-app-e1y3.onrender.com"
        },
        {
            id: 3,
            name: "Password Manager",
            image: "/images/password-manager.webp",
            description: "Secure password vault to manage credentials using bcrypt and MongoDB.",
            technologies: ["React", "MongoDB", "Express", "Node.js", "Tailwind"],
            github: "https://github.com/Mil9nn/Password_Manager",
            demo: ""
        },
        {
            id: 4,
            name: "Resume Builder",
            image: "",
            description: "Generate professional resumes with real-time preview using React frontend.",
            technologies: ["React", "CSS", "State Management"],
            github: "https://github.com/Mil9nn/resume-project",
            demo: ""
        },
        {
            id: 5,
            name: "Quick Kart",
            image: "/images/quick-kart.png",
            description: "React e-commerce app with product browsing, cart, and filter using Context API and Fake Store API.",
            technologies: ["React", "Context API", "Tailwind CSS", "API"],
            github: "https://github.com/Mil9nn/resume-project",
            demo: "https://shopping-cart031.netlify.app/"
        }
    ];

    return (
        <div ref={projectSection.ref} className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white py-16 px-4 sm:px-8 lg:px-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                My Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
                {projects.map((project) => (
                    <div key={project.id} className="group perspective w-full max-w-[320px] mx-auto">
                        <div className="relative w-full h-72 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                            {/* Front */}
                            <div className="absolute w-[320px] h-[250px] backface-hidden bg-zinc-800 rounded-md shadow-lg border border-zinc-700 flex flex-col justify-center items-center text-center">
                                {project.image ? (
                                    <img src={project.image} alt={project.name} className="h-35 w-full object-cover mb-3" />
                                ) : (
                                    <div className="h-28 w-full bg-zinc-700 text-gray-500 flex items-center justify-center rounded mb-3">No Image</div>
                                )}
                                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                            </div>

                            {/* Back */}
                            <div className="absolute w-[320px] h-[250px] backface-hidden rotate-y-180 bg-zinc-700 rounded-xl shadow-lg border border-zinc-600 p-4 flex flex-col justify-between">
                                <p className="text-sm text-gray-300 line-clamp-6 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-1 justify-center mb-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="text-[11px] px-2 py-0.5 bg-purple-700/70 text-white rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-3">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="p-2 bg-zinc-600 hover:bg-zinc-500 rounded-full transition">
                                        <Github className="w-4 h-4" />
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                            className="p-2 bg-blue-600 hover:bg-blue-500 rounded-full transition">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Flip Card CSS */}
            <style>{`
                .perspective {
                    perspective: 1200px;
                }
                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                .group:hover .group-hover\\:rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
}

export default Projects;
