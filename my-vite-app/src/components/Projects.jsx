import React from 'react';

function Projects() {
    const projects = [
        {
            id: 1,
            name: "E-Commerce Dashboard",
            description: "A responsive dashboard for online stores with real-time analytics, inventory management, and sales tracking. Built with React, Node.js, and MongoDB.",
            image: "/images/ecommerce-dashboard.jpg",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
            github: "https://github.com/yourusername/ecommerce-dashboard",
            demo: "https://ecommerce-dashboard-demo.herokuapp.com"
        },
        {
            id: 2,
            name: "Weather Forecast App",
            description: "A modern weather application that provides accurate forecasts for any location. Features include 7-day predictions, humidity levels, and wind speed indicators.",
            image: "/images/weather-app.jpg",
            technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "Geolocation API"],
            github: "https://github.com/yourusername/weather-forecast-app",
            demo: "https://weather-forecast-app-demo.netlify.app"
        },
        {
            id: 3,
            name: "Task Management System",
            description: "A collaborative project management tool with task assignment, progress tracking, and deadline notifications. Includes user authentication and role-based permissions.",
            image: "/images/task-management.jpg",
            technologies: ["React", "Tailwind CSS", "Firebase", "Redux", "Authentication"],
            github: "https://github.com/yourusername/task-management-system",
            demo: "https://task-management-system-demo.vercel.app"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.name} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between mt-4">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    GitHub
                                </a>
                                <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;