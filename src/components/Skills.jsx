import React from "react";
import { FileCode2, Layout, Atom, Wind } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <FileCode2 size={32} />,
      color: "group-hover:text-orange-400",
    },
    {
      name: "JavaScript",
      icon: <Layout size={32} />,
      color: "group-hover:text-yellow-400",
    },
    {
      name: "React.js",
      icon: <Atom size={32} />,
      color: "group-hover:text-cyan-400",
    },
    {
      name: "Tailwind CSS",
      icon: <Wind size={32} />,
      color: "group-hover:text-teal-400",
    },
  ];

  return (
    <div id="skills" className="flex-col p-10 grid grid-cols-1 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="group p-6 bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-white/20 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 cursor-default flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-cyan-500/10"
        >
          <div
            className={`text-slate-400 transition-colors duration-300 ${skill.color}`}
          >
            {skill.icon}
          </div>

          <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
