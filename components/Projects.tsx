"use client";

import { projects } from "@/data/portfolio";
import { ExternalLink, Folder } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-2">
            <Folder className="w-3.5 h-3.5" />
            <span>Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Featured Projects
          </h2>
        </div>
        <p className="max-w-sm text-xs text-zinc-400 leading-relaxed">
          A showcase of academic systems, web applications, and personal software builds.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`flex flex-col justify-between p-6 rounded-xl border bg-zinc-900/30 transition-all ${
              project.featured
                ? "md:col-span-2 lg:col-span-2 border-zinc-700 bg-zinc-900/60"
                : "border-zinc-800/80 hover:border-zinc-700"
            }`}
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-100 mt-1">{project.title}</h3>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                    aria-label="Open Project Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-zinc-800/50 text-zinc-300 text-[10px] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}