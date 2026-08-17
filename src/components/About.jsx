import React from "react";
import { Layout, FileCode2, Atom, Wind } from "lucide-react";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 space-y-10 bg-slate-900 relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Bio */}
        <div className="space-y-6 flex gap-10">
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold bg-clip-text text-transparent 
            bg-gradient-to-r from-cyan-400 to-violet-400 inline-block"
            >
              About Me
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              I’m Tanish Rajput, a passionate Full Stack Developer who enjoys
              turning ideas into modern, interactive, and user-friendly web
              experiences.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              From writing clean code to creating intuitive interfaces, I love
              combining logic, creativity, and design to build websites and
              applications that are both visually appealing and functional.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              I’m constantly learning new technologies, improving my development
              skills, and exploring better ways to create meaningful digital
              experiences. I’m excited to grow as a developer, take on new
              challenges, and work with a team where I can contribute, learn,
              and make an impact.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              Let’s connect! Feel free to reach out through the contact form
              below or check me out on my social platforms.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={logo} className="w-80 rounded-xl" />
        </div>
      </div>
      <div className="space-y-6 max-w-7xl mx-auto px-6 grid  px-6">
        <p className="text-slate-400 leading-relaxed text-lg">
          Let’s connect! Feel free to reach out through the contact form below
          or check me out on my social platforms.
        </p>
        <div className="flex items-center align-center gap-4">
          <a
            href="#"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Github"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="#"
            className="text-slate-500 hover:text-violet-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="#"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
