import React from 'react'
import { useAnimationOnScroll } from '../hooks/UseAnimateOnScroll';
import SkillsSection from '../components/SkillsSection';

const Background = () => {
    const educationSection = useAnimationOnScroll({
        animationClass: 'animate-slide-right',
        threshold: 0.1
    });

    const experienceSection = useAnimationOnScroll({
        animationClass: 'animate-slide-left',
        threshold: 0.1
    });

    return (
        <div className="">
            {/* Education Section */}
            <div ref={educationSection.ref} className="container mx-auto px-4 md:px-8 lg:px-12 my-12">
                <div className="p-6">
                    <h4 className="text-xl font-semibold mb-6 text-blue-400">Education</h4>
                    <div className="border-l-2 border-blue-500 pl-6 py-2">
                        <h5 className="text-xl font-semibold mb-1 text-white">Bachelor of Engineering</h5>
                        <p className="text-purple-400 mb-2">University of Jammu • 2019-2023</p>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div ref={experienceSection.ref} className="container mx-auto px-4 md:px-8 lg:px-12 mb-12">
                <div className="p-6">
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

            <div className="container mx-auto px-4 md:px-8 lg:px-12 mb-12">
                <SkillsSection />
            </div>
        </div>
    )
}

export default Background
