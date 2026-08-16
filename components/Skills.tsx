"use client";

import { skillGroups } from "@/data/portfolio";
import { Wrench } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-zinc-800/80 bg-zinc-900/20 py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Developer Toolkit
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-zinc-100">{group.title}</h3>
                <span className="text-xs font-mono text-zinc-500">0{index + 1}</span>
              </div>

              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">{group.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-zinc-800/80 border border-zinc-700/60 text-[11px] text-zinc-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}