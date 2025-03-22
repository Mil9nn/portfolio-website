function SkillsSection(props) {
    return (
        <div className={`max-w-5xl mx-auto mt-16 transition-all duration-1000 delay-500 transform ${props.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Skills</h3>

            {/* Scrolling container for skills */}
            <div className="relative overflow-hidden">
                <div className="flex animate-scroll">
                    {/* Skills in a scrollable container with proper sizing */}
                    <div className="flex gap-4 flex-nowrap">
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/c.svg" alt="c-programming-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">C Programming</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/html.svg" alt="html-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">HTML5</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/css.svg" alt="css-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">CSS3</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/bootstrap.svg" alt="bootstrap-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Bootstrap</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/javascript.svg" alt="bootstrap-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">JavaScript</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/react.svg" alt="react-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">React</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/tailwind.svg" alt="tailwind-css-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Tailwind CSS</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/mongodb.png" alt="mongodb-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">MongoDB</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/express.svg" alt="express-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Express</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/nodejs.svg" alt="nodejs-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Node.js</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/restapi.png" alt="rest-api-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">RESTful APIs</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/version.svg" alt="git-version-control-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Version control</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/branching.svg" alt="git-branching-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Git Branching</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/merging.svg" alt="git-merging-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Merging</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/pullrequest.svg" alt="pullrequest-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Pull requests</span>
                        </p>
                    </div>

                    {/* Duplicate for continuous scrolling effect with consistent styling */}
                    <div className="flex gap-4 flex-nowrap">
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/c.svg" alt="c-programming-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">C Programming</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/html.svg" alt="html-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">HTML5</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/css.svg" alt="css-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">CSS3</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/bootstrap.svg" alt="bootstrap-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Bootstrap</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/javascript.svg" alt="bootstrap-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">JavaScript</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/react.svg" alt="react-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">React</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/tailwind.svg" alt="tailwind-css-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Tailwind CSS</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/mongodb.png" alt="mongodb-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">MongoDB</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/express.svg" alt="express-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Express</span>
                        </p>
                        <p className="flex items-center gap-2 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/nodejs.svg" alt="nodejs-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Node.js</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/restapi.png" alt="rest-api-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">RESTful APIs</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/version.svg" alt="git-version-control-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Version control</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/branching.svg" alt="git-branching-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Git Branching</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/merging.svg" alt="git-merging-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Merging</span>
                        </p>
                        <p className="flex items-center gap-1 p-3 rounded-lg whitespace-nowrap">
                            <img src="/svgs/pullrequest.svg" alt="pullrequest-logo" className="w-5 h-5" />
                            <span className="text-gray-800 font-semibold">Pull requests</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;