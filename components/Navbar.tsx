"use client";

import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-950 font-black text-xs flex items-center justify-center tracking-wider">
            SR
          </div>
          <div className="hidden sm:block">
            <p className="font-semibold text-sm tracking-tight text-zinc-100">
              Sudeep Regmi
            </p>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
              Software Engineer
            </p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-400">
          <a href="#about" className="hover:text-zinc-100 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        <a
          href="#contact"
          className="md:hidden px-3.5 py-1.5 rounded-md bg-zinc-100 text-zinc-950 text-xs font-semibold"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}