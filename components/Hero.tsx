"use client";

import Image from "next/image";
import { ArrowUpRight, Download, BookOpen, MapPin, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-65px)] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-12 items-center">
          
          {/* Main Info */}
          <div>
           

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.05]">
              Building scalable <br />
              <span className="text-zinc-400">digital systems.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-zinc-400 text-base leading-relaxed">
              I’m Sudeep Regmi, a full-stack engineering student from Nepal dedicated to architecting clean web applications, robust backend APIs, and integrated software solutions.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-zinc-100 text-zinc-950 hover:bg-zinc-200 font-medium text-xs transition-colors"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium text-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-10 text-xs font-medium text-zinc-400 border-t border-zinc-900 pt-6">
              <a
                href="https://github.com/sudeep7regmi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sudeep-regmi-94a6b2230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://medium.com/@sudeepregmi343"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Medium</span>
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs">
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-2 shadow-2xl">
                <Image
                  src="/Profile.jpeg"
                  alt="Sudeep Regmi"
                  width={360}
                  height={360}
                  priority
                  className="w-full aspect-square object-cover rounded-xl grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />

                <div className="mt-3 p-3 rounded-lg border border-zinc-800/80 bg-zinc-950/80">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Code2 className="w-4 h-4 text-zinc-400" />
                      <span>Full Stack Development</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Nepal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}