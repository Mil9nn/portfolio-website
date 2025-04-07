import React, { useState } from 'react';

function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('all');
    
    const skillCategories = {
        frontend: [
            { icon: "/svgs/html.svg", name: "HTML5" },
            { icon: "/svgs/css.svg", name: "CSS3" },
            { icon: "/svgs/javascript.svg", name: "JavaScript" },
            { icon: "/svgs/react.svg", name: "React" },
            { icon: "/svgs/tailwind.svg", name: "Tailwind" },
            { icon: "/svgs/bootstrap.svg", name: "Bootstrap" },
        ],
        backend: [
            { icon: "/svgs/nodejs.svg", name: "Node.js" },
            { icon: "/svgs/express.svg", name: "Express" },
            { icon: "/mongodb.png", name: "MongoDB" },
            { icon: "/restapi.png", name: "REST API" },
            { icon: "/c.svg", name: "C" },
        ],
        tools: [
            { icon: "/svgs/git.svg", name: "Git" },
            { icon: "/svgs/vscode.svg", name: "VS Code" },
            { icon: "/svgs/figma.svg", name: "Figma" },
        ]
    };

    const allSkills = Object.values(skillCategories).flat();

    const skillsToDisplay = activeCategory === 'all' 
        ? allSkills 
        : skillCategories[activeCategory];

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Skills</span>
                </h3>
                <p className="text-gray-400">Technologies I work with</p>
            </div>
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {['all', 'frontend', 'backend', 'tools'].map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                            activeCategory === category
                                ? getActiveButtonStyle(category)
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            
            {/* Skills grid */}
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800 backdrop-blur-sm">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
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

function getActiveButtonStyle(category) {
    const styles = {
        all: 'bg-blue-600 text-white',
        frontend: 'bg-purple-600 text-white',
        backend: 'bg-green-600 text-white',
        tools: 'bg-amber-600 text-white'
    };
    return styles[category] || styles.all;
}

function SkillCard({ icon, name, category }) {
    const cardThemes = {
        all: "hover:border-blue-500",
        frontend: "hover:border-purple-500",
        backend: "hover:border-green-500",
        tools: "hover:border-amber-500"
    };

    return (
        <div className={`flex items-center gap-1 p-2 bg-gray-800/50 rounded-md transition-all duration-200 hover:scale-[1.03] ${cardThemes[category]}`}>
            <img 
                src={icon} 
                alt={name} 
                className="w-6 h-6 mb-2 object-contain" 
                loading="lazy"
            />
            <span className="text-sm font-medium text-gray-200 text-center">{name}</span>
        </div>
    );
}

export default SkillsSection;