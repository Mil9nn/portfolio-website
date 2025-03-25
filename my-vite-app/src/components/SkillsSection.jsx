import React, { useState, useEffect, useRef } from 'react';

function SkillsSection(props) {
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef(null);
    
    // Use manual scroll positioning with requestAnimationFrame for better performance
    useEffect(() => {
        let scrollPosition = 0;
        let animationFrameId;
        const scrollContainer = scrollRef.current;
        const firstSet = scrollContainer.querySelector('.skill-set-1');
        
        const animate = () => {
            if (!isPaused && scrollContainer) {
                // Reset position when first set is scrolled out of view
                if (scrollPosition >= firstSet.offsetWidth) {
                    scrollPosition = 0;
                }
                
                scrollPosition += 2; // Reduced speed for smoother scrolling
                scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
                animationFrameId = requestAnimationFrame(animate);
            }
        };
        
        animationFrameId = requestAnimationFrame(animate);
        
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPaused]);

    return (
        <div className={`container mx-auto px-4 md:px-8 lg:px-12 mt-16 transition-all duration-1000 delay-500 transform ${props.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-4 inline-block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Skills</h3>
            
            <div 
                className="relative overflow-hidden bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-700"
                onMouseEnter={() => setIsPaused(true)} 
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                <div className="flex" ref={scrollRef}>
                    {/* First set of skills */}
                    <div className="flex gap-4 flex-nowrap skill-set-1">
                        {skillItems.map((skill, index) => (
                            <SkillCard
                                key={`skill-1-${index}`}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        ))}
                    </div>
                    {/* Duplicate for continuous scrolling effect */}
                    <div className="flex gap-4 flex-nowrap skill-set-2">
                        {skillItems.map((skill, index) => (
                            <SkillCard
                                key={`skill-2-${index}`}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Skill card component for cleaner rendering
function SkillCard({ icon, name }) {
    return (
        <div className="flex items-center w-40 gap-2 p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-md border border-gray-700 whitespace-nowrap transform transition-transform hover:scale-105">
            <img src={icon} alt={`${name}-logo`} className="w-6 h-6" />
            <span className="text-gray-200 font-semibold">{name}</span>
        </div>
    );
}

// Skill items array for easier maintenance
const skillItems = [
    { icon: "/c.svg", name: "C Programming" },
    { icon: "/svgs/html.svg", name: "HTML5" },
    { icon: "/svgs/css.svg", name: "CSS3" },
    { icon: "/svgs/bootstrap.svg", name: "Bootstrap" },
    { icon: "/svgs/javascript.svg", name: "JavaScript" },
    { icon: "/svgs/react.svg", name: "React" },
    { icon: "/svgs/tailwind.svg", name: "Tailwind CSS" },
    { icon: "/mongodb.png", name: "MongoDB" },
    { icon: "/svgs/express.svg", name: "Express" },
    { icon: "/svgs/nodejs.svg", name: "Node.js" },
    { icon: "/restapi.png", name: "RESTful APIs" },
    { icon: "/svgs/version.svg", name: "Version control" },
    { icon: "/svgs/branching.svg", name: "Git Branching" },
    { icon: "/svgs/merging.svg", name: "Merging" },
    { icon: "/svgs/pullrequest.svg", name: "Pull requests" }
];

export default SkillsSection;