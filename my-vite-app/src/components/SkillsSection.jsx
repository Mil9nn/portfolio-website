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
    const skillsToDisplay = activeCategory === 'all' ? allSkills : skillCategories[activeCategory];

    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        My <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Skills</span>
                    </h2>
                    <p className="text-gray-400 mt-2">Technologies I work with</p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {['all', 'frontend', 'backend', 'tools'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`capitalize px-4 py-2 rounded-full text-sm font-medium transition shadow-sm ${
                                activeCategory === category
                                    ? getActiveButtonStyle(category)
                                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="bg-zinc-800/30 p-3 sm:p-6 backdrop-blur-md shadow-md">
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
        </section>
    );
}

function getActiveButtonStyle(category) {
    const styles = {
        all: 'bg-blue-600 text-white',
        frontend: 'bg-purple-600 text-white',
        backend: 'bg-green-600 text-white',
        tools: 'bg-amber-500 text-white'
    };
    return styles[category] || styles.all;
}

function SkillCard({ icon, name, category }) {
    const hoverStyles = {
        all: "hover:border-blue-500",
        frontend: "hover:border-purple-500",
        backend: "hover:border-green-500",
        tools: "hover:border-amber-500"
    };

    return (
        <div
            className={`flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg bg-zinc-800/80 border border-transparent transition-all duration-200 hover:scale-[1.05] ${hoverStyles[category]}`}
        >
            <img
                src={icon}
                alt={name}
                className="w-10 h-10 mb-2 object-contain"
                loading="lazy"
            />
            <span className="text-sm text-gray-200 font-medium text-center">{name}</span>
        </div>
    );
}

export default SkillsSection;
