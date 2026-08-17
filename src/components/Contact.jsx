import React from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
              Let's Connect
            </h2>

            <p className="text-slate-400 mt-4 text-lg max-w-md">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                <Mail className="text-cyan-400" size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer">Email</p>
                <p className="font-medium hover:text-cyan-400 transition-colors cursor-pointer">
                  rajputtanish2006@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                <FaGithub className="text-violet-400" size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Github</p>
                <p className="font-medium">Tanish Rajput</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                <FaLinkedin className="text-blue-400" size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">LinkedIn</p>
                <p className="font-medium hover:text-cyan-400 transition-colors cursor-pointer">Tanish Rajput</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                <FaTwitter className="text-blue-400" size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Twitter</p>
                <p className="font-medium hover:text-cyan-400 transition-colors cursor-pointer">Tanish Rajput</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6 bg-slate-800/30 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-400"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-600"
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-400"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all placeholder:text-slate-600"
              placeholder="Your email"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-400"
            >
              Message
            </label>

            <textarea
              id="message"
              rows="4"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-600 resize-none"
              placeholder="How can I help you?"
            />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium py-3 px-6 rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}