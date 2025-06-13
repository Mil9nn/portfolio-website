import React, { useState } from 'react';
import useThemeStore from '../store/themeStore';

function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('all');

    const skillCategories = {
        frontend: [
            { icon: "/svgs/html.svg", name: "HTML" },
            { icon: "/svgs/css.svg", name: "CSS" },
            { icon: "/svgs/javascript.svg", name: "JavaScript" },
            { icon: "/svgs/react.svg", name: "React" },
            { icon: "/svgs/tailwind.svg", name: "TailwindCSS" },
            { icon: "/svgs/typescript.svg", name: "TypeScript" },
            { icon: "/svgs/clerk.svg", name: "Clerk" },
        ],
        backend: [
            { icon: "/svgs/nodejs.svg", name: "Node.js" },
            { icon: "/svgs/express.svg", name: "Express" },
            { icon: "/svgs/mongodb.svg", name: "MongoDB" },
            { icon: "/api.png", name: "REST API" },
            { icon: "/svgs/postman.svg", name: "POSTMAN" },
        ],
        tools: [
            { icon: "/svgs/git.svg", name: "Git" },
            { icon: "/svgs/figma.svg", name: "Figma" },
        ]
    };

    const allSkills = Object.values(skillCategories).flat();
    const skillsToDisplay = activeCategory === 'all' ? allSkills : skillCategories[activeCategory];

    return (
        <section className="py-16 px-4 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        My <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Skills</span>
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">Technologies I work with</p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {['all', 'frontend', 'backend', 'tools'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`capitalize px-4 py-2 rounded-full text-sm font-medium transition shadow-sm shadow-blue-400/50 ${activeCategory === category
                                    ? getActiveButtonStyle(category)
                                    : ' text-gray-300 hover:bg-zinc-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="p-3 sm:p-6 backdrop-blur-md">
                    <div className="sm:grid flex flex-wrap px-3 md:px-0 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 lg:gap-6">
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

    const { lightMode } = useThemeStore();

    return (
        <div className={`flex flex-row gap-1 sm:flex-col items-center justify-center py-2 sm:py-3 px-2 sm:p-4 rounded-full sm:rounded-xl ${lightMode ? "bg-zinc-300" : "bg-zinc-800/80"} border border-transparent transition-all duration-200 hover:scale-[1.06] ${hoverStyles[category]}`}>
            <img
                src={icon}
                alt={name}
                className="size-4 sm:size-6 md:size-8 object-contain sm:mb-1"
                loading="lazy"
            />
            <span className={`text-[10px] sm:text-sm md:text-base ${lightMode ? "text-[#252222]" : "text-gray-200"} font-medium text-center`}>{name}</span>
        </div>
    );
}

export default SkillsSection;
