import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkStyle =
    "text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group";
  const mobileLinkStyle =
    "text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" className={desktopLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={desktopLinkStyle}>
            About
          </NavLink>
          <NavLink to="/skills" className={desktopLinkStyle}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={desktopLinkStyle}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={desktopLinkStyle}>
            Contact
          </NavLink>
        </nav>

        {/* Logo */}
        < div className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
            Tanish Rajput
          </span>
        </div >

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-b border-white/10 absolute w-full left-0 shadow-xl">
          <nav className="flex flex-col items-center py-6 gap-6">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={mobileLinkStyle}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={mobileLinkStyle}>
              About
            </NavLink>
            <NavLink
              to="/skills"
              onClick={() => setIsOpen(false)}
              className={mobileLinkStyle}>
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={mobileLinkStyle}>
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={mobileLinkStyle}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
