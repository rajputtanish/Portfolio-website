import React, { useState } from "react";
import { ExternalLink, Image as ImageIcon } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Apps", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "Calculator",
      category: "Web Apps",
      desc: "An interactive software calculator hosted on a website.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Employee Management Software",
      category: "UI/UX",
      desc: "A conceptual overhaul of a modern e-commerce platform focusing on mobile conversions.",
      tech: ["Figma", "React", "Framer Motion"],
    },
    {
      id: 3,
      title: "Web page Portfolio",
      category: "Web Apps",
      desc: "A sleek Kanban-style project management tool with drag-and-drop functionality.",
      tech: ["React", "Context API", "Tailwind"],
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-800/50 border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
              Featured Work
            </h2>

            <p className="text-slate-400 mt-2">
              Some things I've built recently
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-slate-900/50 rounded-lg border border-white/10 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-slate-800 text-cyan-400 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)]"
            >
              <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-slate-700 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex gap-3 text-slate-400">
                    {/* <a
                      href="#"
                      className="hover:text-white transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={20} />
                    </a> */}

                    <a
                      href="#"
                      className="hover:text-cyan-400 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 bg-cyan-950/30 text-cyan-400 rounded-full border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}