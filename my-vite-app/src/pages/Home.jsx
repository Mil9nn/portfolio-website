import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useAnimationOnScroll } from '../hooks/UseAnimateOnScroll';
import ThreeDeeName from '../components/ThreeDeeName';
import { Link } from 'react-router-dom'

import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
    const aboutSection = useAnimationOnScroll({
        animationClass: 'animate-slide-left',
        threshold: 0.1
    });

    return (
        <div className="min-h-[calc(100vh-72px)] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-12">
            <div
                ref={aboutSection.ref}
                className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 py-16 transition-all duration-1000"
            >
                {/* Left: Intro Text */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
                        Hi, I’m <ThreeDeeName />
                    </h2>

                    <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                        Full Stack Developer with a focus on <span className="text-purple-400 font-semibold">React</span> and <span className="text-blue-400 font-semibold">Node.js</span>, blending  logic with aesthetic UI/UX to craft seamless web experiences.
                    </p>

                    <p className="text-zinc-400 text-sm sm:text-base">
                        I build, break, and learn. Outside the screen, I’m always thinking design, performance, and purpose.
                    </p>


                    <div className="flex items-center justify-between pt-4">
                        <Link
                            to="/portfolio"
                            className="inline-block px-6 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 transition rounded-full shadow-md shadow-purple-800/30"
                        >
                            View Projects
                        </Link>
                        <div className="flex items-center gap-3">
                            <a target='_blank' href="https://github.com/Mil9nn"><FaGithub className="size-6" /></a>
                            <a target='_blank' href="https://www.linkedin.com/in/milan-singh-51351b1bb/"><FaLinkedin className="size-6" /></a>
                        </div>
                    </div>
                </div>

                {/* Right: Lottie */}
                <div className="flex-1 flex justify-center items-center">
                    <DotLottieReact
                        src="https://lottie.host/2add6f21-9e90-4e0a-ad82-59da626bbd6c/zWWC5qEO2d.lottie"
                        loop
                        autoplay
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            height: "auto",
                            filter: "drop-shadow(0 0 20px #a855f7aa)"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
