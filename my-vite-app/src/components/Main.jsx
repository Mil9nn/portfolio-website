import React, { useState, useEffect } from 'react';
import ContactSection from "./ContactSection";
import Header from './Header';
import SkillsSection from './SkillsSection';
import Projects from './Projects';

function Main() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen p-4 md:p-8 lg:p-12">
            <Header />

            {/* About Me Section - Combined Content */}
            <div className={`mt-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-4">About Me</h3>

                <div className="flex items-center bg-white backdrop-blur-sm p-6 shadow-xl overflow-hidden">
                    {/* Background Section */}
                    <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4 text-purple-400">Background</h4>
                        <div className="space-y-4">
                            <p className="text-black leading-relaxed">
                            I am a Full Stack Developer with expertise in front-end and back-end technologies, including HTML, CSS, JavaScript, React, and Node.js.
                            </p>
                            <p className="text-black leading-relaxed">
                            Leveraging my Bachelor's degree in Mechanical Engineering, I bring a unique problem-solving perspective to software development, enabling me to design efficient, scalable, and user-friendly applications.
                            </p>
                            <p className="text-black leading-relaxed">
                            Passionate about building innovative solutions, I combine technical precision with creativity to tackle complex challenges. Outside of work, I stay updated with the latest web technologies, contribute to open-source projects, and enjoy outdoor activities to maintain a balanced lifestyle.
                            </p>
                        </div>
                    </div>
                    <img src="/4627182.jpg" alt="Profile" className="rounded-lg max-w-xs" />
                </div>

                {/* Education Section */}
                <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Education</h4>
                    <div className="border-l-2 border-blue-500 pl-4">
                        <h5 className="text-xl font-semibold mb-1 text-white">Bachelor of Engineering</h5>
                        <p className="text-purple-400 mb-2">University of Jammu • 2019-2023</p>
                    </div>
                </div>

                {/* Experience Section */}
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-green-400">Experience</h4>
                    <div className="space-y-6">
                        <div className="border-l-2 border-green-500 pl-4">
                            <h5 className="text-xl font-semibold mb-1 text-white">Web Development Intern</h5>
                            <p className="text-green-400 mb-2">Prodigy Infotech • 15th March 2025 - Present</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Developing responsive web applications using React</li>
                                <li>Collaborating with team members on project deliverables</li>
                                <li>Implementing modern UI/UX design patterns</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section - Replaced with new component */}
            <SkillsSection isVisible={isVisible} />

            <Projects />
            <ContactSection />
        </div>
    );
}

export default Main;