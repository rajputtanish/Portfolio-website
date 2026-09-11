import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, Terminal, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";
// import { Github, , Linkedin } from "lucide-react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <section
        id="home"
        className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden"
      >
        {/* Background glow lines */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full relative z-10 py-12 md:py-0">
          {/* Left: Content */}
          <div className="space-y-6">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-sm text-cyan-400">
            <Terminal size={16} />
            <span>Available for new projects</span>
          </div> */}

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-violet-600">
                Tanish Rajput
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-400 font-medium h-10">
              {typedText}
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>

            <p className="text-slate-400 max-w-md text-lg leading-relaxed">
              I'm a passionate developer focused on creating interactive, highly
              responsive, and visually stunning web applications. I merge
              aesthetic UI/UX principles with clean, scalable code.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="projects"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                View Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="contact"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-white/10 hover:bg-slate-700 hover:border-cyan-500/50 text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right: Visual Asset */}
          <div className="relative flex justify-center items-center w-full max-w-md aspect-square mx-auto mt-12 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="relative w-64 h-64 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden animate-[bounce_4s_infinite]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
              <img
                src={logo}
                alt="Tanish Rajput"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-3 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Created with React & Tailwind. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="Github"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#"
              className="text-slate-500 hover:text-violet-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
