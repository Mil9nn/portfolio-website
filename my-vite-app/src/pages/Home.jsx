import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useThemeStore from "../store/themeStore";
import { Sparkles, ArrowRight, Download } from "lucide-react";
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
          <div className="flex items-center gap-4 justify-between">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6323A3]/10 border border-[#2247A3]/20">
            <Sparkles className="size-4 text-[#2247A3] animate-pulse" />
            <span className="text-sm font-medium text-[#2247A3]">
              Open to opportunities
            </span>
          </div>
          <button
            onClick={() => alert('Resume is not available yet!')}
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-full flex items-center gap-2 transition"
          >
            Resume <Download className="w-4 h-4 animate-bounce" />
          </button>
          </div>
          <p
            className={`text-lg sm:text-xl leading-relaxed ${
              lightMode ? "text-zinc-700" : "text-theme"
            }`}
          >
            Full Stack Developer building
              <span className="text-brand-blue font-semibold"> reliable</span> &
              <span className="text-brand-blue font-semibold"> high performance</span> web
            systems with <span className="text-purple-400">Node.js</span> and{" "}
            <span className="text-green-400">modern frameworks</span>.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-brand-gradient text-white font-semibold rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300 hover-bg-brand-gradient-strong"
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
                      : "bg-white/5 border border-theme hover:border-purple-400 text-theme-muted hover:text-purple-400"
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
