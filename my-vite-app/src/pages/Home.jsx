import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useThemeStore from "../store/themeStore";
import { Sparkles, ArrowRight } from "lucide-react";
import ThreeDeeName from "../components/ThreeDeeName";

function Home() {
  const { lightMode } = useThemeStore();

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-70px)] flex items-center justify-center px-6 sm:px-8 py-24"
    >
      <div className="w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20">
            <Sparkles className="size-4 text-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-400">
              Open to opportunities
            </span>
          </div>
          <p
            className={`text-lg sm:text-xl leading-relaxed ${
              lightMode ? "text-zinc-700" : "text-gray-300"
            }`}
          >
            Full Stack Developer building
            <span className="text-purple-400 font-semibold"> reliable</span> &
            <span className="text-blue-400 font-semibold"> high performance</span> web
            systems with <span className="text-purple-400">Node.js</span> and{" "}
            <span className="text-green-400">modern frameworks</span>.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-4">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/Mil9nn",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/milan-singh-51351b1bb/",
                  label: "LinkedIn",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 rounded-full border transition ${
                    lightMode
                      ? "bg-white border-gray-200 hover:border-purple-400 text-gray-700 hover:text-purple-600"
                      : "bg-white/5 border-white/10 hover:border-purple-400 text-gray-300 hover:text-purple-400"
                  }`}
                  aria-label={s.label}
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Animation */}
        <div className="flex justify-center"
        >
          <DotLottieReact
            src="https://lottie.host/2add6f21-9e90-4e0a-ad82-59da626bbd6c/zWWC5qEO2d.lottie"
            loop
            autoplay
            className="w-full max-w-[500px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
