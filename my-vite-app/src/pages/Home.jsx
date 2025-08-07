import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useAnimationOnScroll } from '../hooks/UseAnimateOnScroll';
import ThreeDeeName from '../components/ThreeDeeName';
import { Link } from 'react-router-dom'

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import useThemeStore from '../store/themeStore';

function Home() {
    const aboutSection = useAnimationOnScroll({
        animationClass: 'animate-slide-left',
        threshold: 0.1
    });

    const { lightMode } = useThemeStore();

    return (
        <div className="md:h-[calc(100vh-72px)] mb-10">
            <div className="flex items-center justify-center px-4 sm:px-6 lg:px-12">
                <div
                    ref={aboutSection.ref}
                    className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 py-16 transition-all duration-1000"
                >
                    {/* Left: Intro Text */}
                    <div style={{transform: "perspective(1000px) rotateY(35deg)"}} className="group shadow-lg relative flex-1 space-y-6  rounded-lg">

                        <div className="animation-rotate-3d gradient-border-content">
                            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
                                Hi, I’m <ThreeDeeName />
                            </h2>

                            <p className={`${lightMode ? "text-zinc-700" : "text-zinc-300"} text-base sm:text-lg leading-relaxed`}>
                                Full Stack Developer with a focus on <span className="text-purple-400 font-semibold">React</span> and <span className="text-blue-400 font-semibold">Node.js</span>, blending  logic with aesthetic UI/UX to craft seamless web experiences.
                            </p>

                            <p className={`${lightMode ? "text-zinc-600" : "text-zinc-400"} text-sm sm:text-base`}>
                                I build, break, and learn. Outside the screen, I’m always thinking design, performance, and purpose.
                            </p>

                            <div className="hover:animate-rotate absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50 p-2 rounded-full shadow-lg">
                                <a target="_blank" href="https://github.com/Mil9nn"><FaGithub className="size-6" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/milan-singh-51351b1bb/"><FaLinkedin className="size-6" /></a>
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
            <div className="flex items-center justify-center">
                <Link
                    to="/portfolio"
                    className="relative group overflow-hidden self-center inline-block px-6 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 transition rounded-full shadow-md shadow-purple-800/30"
                >
                    <span className='absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-in-out z-0' ></span>
                    <span className='relative z-10'>View Projects</span>
                </Link>
            </div>
        </div>
    );
}

export default Home;
