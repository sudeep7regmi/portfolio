"use client";

import { Code, Terminal, Layers, Sparkles } from "lucide-react";

export default function QuickStats() {
  const stats = [
    { label: "Projects Completed", value: "5+", icon: Layers },
    { label: "Core Specialty", value: "Full Stack", icon: Terminal },
    { label: "Tech Stack", value: "10+ Tools", icon: Code },
    { label: "Focus", value: "Web & AI", icon: Sparkles },
  ];

  return (
    <section className="border-y border-zinc-800/80 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800/80">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="py-6 px-4 text-center flex flex-col items-center justify-center">
                <Icon className="w-4 h-4 text-zinc-400 mb-2" />
                <p className="text-xl font-bold text-zinc-100">{stat.value}</p>
                <p className="text-[11px] text-zinc-400 tracking-wide mt-0.5">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}