import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useAnimationOnScroll } from '../hooks/UseAnimateOnScroll';
import ThreeDeeName from '../components/ThreeDeeName';

function Home() {
    const aboutSection = useAnimationOnScroll({
        animationClass: 'animate-slide-left',
        threshold: 0.1
    });

    return (
        <div className="min-h-screen">
            {/* About Me Section */}
            <div ref={aboutSection.ref} className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center transition-all duration-1000">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-4 inline-block bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"></h3>

                <div className="flex flex-col md:flex-row items-center gap-8 p-8 overflow-hidden min-h-[70vh]">
                    {/* Background Section */}
                    <div className="flex-1 space-y-4">
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-white"><span>Hi, myself</span><ThreeDeeName /></h2>
                        <p className="text-gray-300 leading-relaxed">
                            Full Stack Developer specializing in React and Node.js with a background in Mechanical Engineering. I combine technical precision with creative problem-solving to build efficient, user-friendly applications.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                        When I'm not working on personal projects, I contribute to open-source projects and stay updated with the latest web technologies
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
        </div>
    );
}

export default Home;