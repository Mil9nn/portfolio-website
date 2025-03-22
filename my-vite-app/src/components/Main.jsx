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
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
            <Header />

            {/* About Me Section - Combined Content */}
            <div className={`container slide mx-auto px-4 md:px-8 lg:px-12 mt-20 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-4 inline-block bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">About Me</h3>

                <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-800 backdrop-blur-sm p-6 rounded-xl shadow-xl overflow-hidden border border-gray-700">
                    {/* Background Section */}
                    <div className="mb-8 md:mb-0 flex-1">
                        <h4 className="text-xl font-semibold mb-4 text-purple-400">Background</h4>
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                            I am a Full Stack Developer with expertise in front-end and back-end technologies, including HTML, CSS, JavaScript, React, and Node.js.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                            Leveraging my Bachelor's degree in Mechanical Engineering, I bring a unique problem-solving perspective to software development, enabling me to design efficient, scalable, and user-friendly applications.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                            Passionate about building innovative solutions, I combine technical precision with creativity to tackle complex challenges. Outside of work, I stay updated with the latest web technologies, contribute to open-source projects, and enjoy outdoor activities to maintain a balanced lifestyle.
                            </p>
                        </div>
                    </div>
                    <img 
                        src="/4627182.jpg" 
                        alt="Profile" 
                        className="rounded-xl max-w-xs w-full h-auto object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Education Section */}
                <div className="my-12 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                    <h4 className="text-xl font-semibold mb-6 text-blue-400">Education</h4>
                    <div className="border-l-2 border-blue-500 pl-6 py-2">
                        <h5 className="text-xl font-semibold mb-1 text-white">Bachelor of Engineering</h5>
                        <p className="text-purple-400 mb-2">University of Jammu • 2019-2023</p>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="mb-12 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                    <h4 className="text-xl font-semibold mb-6 text-green-400">Experience</h4>
                    <div className="border-l-2 border-green-500 pl-6 py-2">
                        <h5 className="text-xl font-semibold mb-1 text-white">Web Development Intern</h5>
                        <p className="text-green-400 mb-3">Prodigy Infotech • 15th March 2025 - Present</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Developing responsive web applications using React</li>
                            <li>Collaborating with team members on project deliverables</li>
                            <li>Implementing modern UI/UX design patterns</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <SkillsSection isVisible={isVisible} />

            <Projects />
            <ContactSection />
        </div>
    );
}

export default Main;