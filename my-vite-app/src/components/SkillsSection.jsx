import React, { useState } from 'react';

function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('all');
    
    // Categorized skills
    const skillCategories = {
        frontend: [
            { icon: "/svgs/html.svg", name: "HTML5" },
            { icon: "/svgs/css.svg", name: "CSS3" },
            { icon: "/svgs/javascript.svg", name: "JavaScript" },
            { icon: "/svgs/react.svg", name: "React" },
            { icon: "/svgs/tailwind.svg", name: "Tailwind CSS" },
            { icon: "/svgs/bootstrap.svg", name: "Bootstrap" },
        ],
        backend: [
            { icon: "/svgs/nodejs.svg", name: "Node.js" },
            { icon: "/svgs/express.svg", name: "Express" },
            { icon: "/mongodb.png", name: "MongoDB" },
            { icon: "/restapi.png", name: "RESTful APIs" },
            { icon: "/c.svg", name: "C Programming" },
        ],
        tools: [
            { icon: "/svgs/git.svg", name: "Git" },
        ]
    };

    // Get all skills for "all" category
    const allSkills = [
        ...skillCategories.frontend,
        ...skillCategories.backend,
        ...skillCategories.tools
    ];
    
    // Determine which skills to display based on active category
    const skillsToDisplay = activeCategory === 'all' 
        ? allSkills 
        : skillCategories[activeCategory];

    return (
        <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-4 inline-block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Skills</h3>
            
            {/* Category tabs */}
            <div className="flex mb-6 gap-2 flex-wrap">
                <button 
                    onClick={() => setActiveCategory('all')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                        activeCategory === 'all' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                    All Skills
                </button>
                <button 
                    onClick={() => setActiveCategory('frontend')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                        activeCategory === 'frontend' 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                    Frontend
                </button>
                <button 
                    onClick={() => setActiveCategory('backend')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                        activeCategory === 'backend' 
                            ? 'bg-green-600 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                    Backend
                </button>
                <button 
                    onClick={() => setActiveCategory('tools')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                        activeCategory === 'tools' 
                            ? 'bg-amber-600 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                    Dev Tools
                </button>
            </div>
            
            {/* Skills grid */}
            <div className="shadow-lg p-6 border rounded-md border-gray-700">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skillsToDisplay.map((skill, index) => (
                        <SkillCard
                            key={`skill-${index}`}
                            icon={skill.icon}
                            name={skill.name}
                            category={activeCategory}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Enhanced skill card component
function SkillCard({ icon, name, category }) {
    // Color themes based on category
    const cardThemes = {
        all: "from-gray-700 to-gray-800 border-gray-600 hover:shadow-blue-500/10",
        frontend: "from-purple-900/40 to-purple-800/20 border-purple-700/50 hover:shadow-purple-500/10",
        backend: "from-green-900/40 to-green-800/20 border-green-700/50 hover:shadow-green-500/10",
        tools: "from-amber-900/40 to-amber-800/20 border-amber-700/50 hover:shadow-amber-500/10"
    };

    const theme = cardThemes[category] || cardThemes.all;

    return (
        <div className={`max-w-48 flex flex-col items-center justify-center p-4 bg-gradient-to-br ${theme} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}>
            <img src={icon} alt={`${name}-logo`} className="w-10 h-10 mb-3" />
            <span className="text-gray-200 font-medium text-center">{name}</span>
        </div>
    );
}

export default SkillsSection;