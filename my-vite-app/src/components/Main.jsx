import React from 'react';
import { useAnimationOnScroll } from '../hooks/UseAnimateOnScroll';
import ContactSection from "./ContactSection";
import Header from './Header';
import SkillsSection from './SkillsSection';
import Projects from './Projects';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Main() {
    const aboutSection = useAnimationOnScroll({
        animationClass: 'animate-slide-left',
        threshold: 0.1
    });

    const educationSection = useAnimationOnScroll({
        animationClass: 'animate-slide-right',
        threshold: 0.1
    });

    const experienceSection = useAnimationOnScroll({
        animationClass: 'animate-slide-left',
        threshold: 0.1
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
            <Header />

            {/* About Me Section */}
            <div
                ref={aboutSection.ref}
                className="container mx-auto px-4 md:px-8 lg:px-12 min-h-[90vh] flex flex-col justify-center transition-all duration-1000"
            >
                <h3 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-4 inline-block bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                    About Me
                </h3>

                <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-xl shadow-xl overflow-hidden min-h-[70vh]">
                    {/* Background Section */}
                    <div className="flex-1 space-y-4">
                        <h4 className="text-xl font-semibold mb-4 text-purple-400">Background</h4>
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

                    {/* Lottie Animation */}
                    <div className="flex-1 flex justify-center">
                        <DotLottieReact
                            src="https://lottie.host/2add6f21-9e90-4e0a-ad82-59da626bbd6c/zWWC5qEO2d.lottie"
                            loop
                            autoplay
                            style={{ width: "100%", maxWidth: "350px", height: "300px" }}
                        />
                    </div>
                </div>
            </div>


            {/* Education Section */}
            <div
                ref={educationSection.ref}
                className="container mx-auto px-4 md:px-8 lg:px-12 my-12"
            >
                <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                    <h4 className="text-xl font-semibold mb-6 text-blue-400">Education</h4>
                    <div className="border-l-2 border-blue-500 pl-6 py-2">
                        <h5 className="text-xl font-semibold mb-1 text-white">Bachelor of Engineering</h5>
                        <p className="text-purple-400 mb-2">University of Jammu • 2019-2023</p>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div
                ref={experienceSection.ref}
                className="container mx-auto px-4 md:px-8 lg:px-12 mb-12"
            >
                <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
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

            <SkillsSection />
            <Projects />
            <ContactSection />
        </div>
    );
}

export default Main;