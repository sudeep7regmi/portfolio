"use client";

import { Cpu, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-16">
      <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12">
        <div>
          <p className="text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-2">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Engineering software with clarity and function.
          </h2>
        </div>

        <div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            I’m a Software Engineering student from Nepal focused on developing efficient web software and robust server systems. I enjoy managing technical solutions end-to-end—from designing responsive UI structures to setting up performant backends and database systems.
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed mt-4">
            My experience spans across custom web tools, HR platforms, e-governance solutions, and real-time coordination systems.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
              <Lightbulb className="w-5 h-5 text-zinc-300 mb-3" />
              <h3 className="font-semibold text-sm text-zinc-200">Pragmatic Solutions</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Prioritizing operational simplicity, reliability, and clear architecture over unnecessary complexity.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
              <Cpu className="w-5 h-5 text-zinc-300 mb-3" />
              <h3 className="font-semibold text-sm text-zinc-200">System Mindset</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Continuous engagement with full-stack frameworks, REST design, and database relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}