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
            image: "/images/weather-app.png",
            technologies: ["JavaScript", "React", "HTML5", "Tailwind CSS", "Weather API", "Geolocation API"],
            github: "https://github.com/Mil9nn/PRODIGY_WD_05",
            demo: ""
        },
        {
            id: 3,
            name: "Task Management System",
            description: "A collaborative project management tool with task assignment, progress tracking, and deadline notifications. Includes user authentication and role-based permissions.",
            image: "/images/task-management.jpg",
            technologies: ["React", "Tailwind CSS", "Firebase", "Redux", "Authentication"],
            github: "https://github.com/yourusername/task-management-system",
            demo: "https://task-management-system-demo.vercel.app"
        },
        {
            "id": 3,
            "name": "Password Manager",
            "description": "A secure and user-friendly password manager that allows users to store, delete and edit passwords for websites, and manage their credentials safely. Features include encryption, autofill and categorized storage to be included soon",
            "image": "/images/password-manager.png",
            "technologies": ["JavaScript", "React", "Node.js", "MongoDB", "Express", "bcrypt.js", "Tailwind CSS"],
            "github": "https://github.com/Mil9nn/password-manager",
            "demo": ""
        }        
    ];

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center border-b-2 border-purple-500 pb-4 inline-block mx-auto bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">My Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                        <div className="relative overflow-hidden h-48">
                            <img 
                                src={project.image} 
                                alt={project.name} 
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <h3 className="text-xl font-bold text-white p-4">{project.name}</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-white">{project.name}</h3>
                            <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="px-2 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-4">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 bg-gray-700 text-white text-center rounded-lg hover:bg-gray-600 transition-colors duration-300"
                                >
                                    GitHub
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