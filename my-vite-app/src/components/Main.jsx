import React, { useState, useEffect } from 'react';
import ContactSection from "./ContactSection";

function Main() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8 lg:p-12">
            {/* Hero Section */}
            <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                    Hi, I'm Milan Singh
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-6">
                    A Bachelor of Engineering graduate & an aspiring developer
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/30 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none cursor-pointer">
                    View my Work
                </button>
            </div>

            {/* About Me Section */}
            <div className={`max-w-4xl mx-auto mt-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-purple-500 pl-4">About Me</h3>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        I am an aspiring Full Stack Developer with a strong foundation in both front-end and back-end technologies. After earning my Bachelor's degree in Mechanical Engineering, I transitioned into the world of development, where I have gained experience in HTML, CSS, JavaScript, React, Node.js, and other modern web development frameworks.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        With a keen interest in building intuitive, responsive, and scalable applications, I am eager to continue learning and growing in the field. I approach challenges with an analytical and solution-oriented mindset, striving to deliver high-quality results that meet both user needs and business goals.
                    </p>
                </div>
            </div>

            {/* Skills Section */}
            <div className={`max-w-4xl mx-auto mt-16 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
                        <h4 className="text-xl font-semibold mb-3 text-blue-400">Programming</h4>
                        <p className="text-gray-300">C (Data structures & Algorithms)</p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300">
                        <h4 className="text-xl font-semibold mb-3 text-purple-400">Frontend</h4>
                        <p className="text-gray-300">HTML5 & CSS3, Bootstrap, Tailwind CSS, JavaScript, React</p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300">
                        <h4 className="text-xl font-semibold mb-3 text-green-400">Backend</h4>
                        <p className="text-gray-300">Node.js & Express.js, RESTful APIs, MongoDB</p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-3">
                        <h4 className="text-xl font-semibold mb-3 text-yellow-400">Development Tools</h4>
                        <p className="text-gray-300">Version-Control, Git Branching, Merging, Pull Requests</p>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className={`max-w-4xl mx-auto mt-16 mb-12 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-green-500 pl-4">Projects</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Card: Password Manager */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden hover:shadow-green-500/20 transition-all duration-300 flex flex-col h-full">
                        <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-xl font-bold text-center">
                                Password Manager
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold mb-2">Password Manager</h2>
                            <p className="text-gray-300 text-sm flex-grow">
                                Secure application for storing and managing passwords with encryption and authentication features.
                            </p>
                            <div className="mt-4 flex">
                                <button className="px-3 py-1 mr-2 text-sm bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    View
                                </button>
                                <button className="px-3 py-1 text-sm bg-gray-700 rounded-lg font-semibold text-white hover:bg-gray-600 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    Code
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Project Card: Euphonic */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden hover:shadow-green-500/20 transition-all duration-300 flex flex-col h-full">
                        <div className="h-48 bg-gradient-to-r from-purple-400 to-blue-600 flex items-center justify-center">
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-xl font-bold text-center">
                                Euphonic
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold mb-2">Euphonic (Spotify Clone)</h2>
                            <p className="text-gray-300 text-sm flex-grow">
                                Music streaming platform with playlist creation, search functionality, and responsive design.
                            </p>
                            <div className="mt-4 flex">
                                <button className="px-3 py-1 mr-2 text-sm bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    View
                                </button>
                                <button className="px-3 py-1 text-sm bg-gray-700 rounded-lg font-semibold text-white hover:bg-gray-600 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    Code
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Project Card: X.com */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden hover:shadow-green-500/20 transition-all duration-300 flex flex-col h-full">
                        <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-xl font-bold text-center">
                                X.com
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold mb-2">X.com</h2>
                            <p className="text-gray-300 text-sm flex-grow">
                                Responsive layout implementation inspired by X/Twitter's interface, built with HTML and Tailwind CSS.
                            </p>
                            <div className="mt-4 flex">
                                <button className="px-3 py-1 mr-2 text-sm bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    View
                                </button>
                                <button className="px-3 py-1 text-sm bg-gray-700 rounded-lg font-semibold text-white hover:bg-gray-600 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    Code
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Project Card: Omnifood */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden hover:shadow-green-500/20 transition-all duration-300 flex flex-col h-full">
                        <div className="h-48 bg-gradient-to-r from-green-400 to-teal-600 flex items-center justify-center">
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-xl font-bold text-center">
                                Omnifood
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold mb-2">Omnifood</h2>
                            <p className="text-gray-300 text-sm flex-grow">
                                Food website showcasing recipes, gallery, and testimonials with responsive design for all devices.
                            </p>
                            <div className="mt-4 flex">
                                <button className="px-3 py-1 mr-2 text-sm bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    View
                                </button>
                                <button className="px-3 py-1 text-sm bg-gray-700 rounded-lg font-semibold text-white hover:bg-gray-600 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-8">
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/30 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none cursor-pointer">
                        View All Projects
                    </button>
                </div>
            </div>
            <ContactSection />
        </div>
    );
}

export default Main;