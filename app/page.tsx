import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-zinc-800 selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 z-10">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid md:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Software Engineering Student · Nepal
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Hi, I’m Sudeep.
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">
                I build useful software.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-neutral-400 leading-relaxed">
              I’m a Software Engineering student focused on full-stack development, backend systems, real-time applications, and practical software solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/projects"
                className="px-6 py-3.5 rounded-xl bg-white text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-lg shadow-white/5 active:scale-[0.98]"
              >
                View projects
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-sm font-medium hover:bg-neutral-800 hover:text-white hover:border-neutral-700 transition-all duration-200 active:scale-[0.98]"
              >
                Contact me
              </Link>
            </div>
          </div>

          {/* Profile Image with Ring Glow */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
                <Image
                  src="/Profile.jpeg"
                  alt="Sudeep Regmi"
                  width={300}
                  height={300}
                  priority
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Stats / Quick Overview */}
      <section className="relative z-10 border-y border-neutral-800/80 bg-neutral-900/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-4 rounded-xl border border-neutral-800/50 bg-neutral-900/30">
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-mono mb-1">
                Focus
              </p>
              <h2 className="text-lg font-medium text-neutral-200">
                Full-stack development
              </h2>
            </div>

            <div className="p-4 rounded-xl border border-neutral-800/50 bg-neutral-900/30">
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-mono mb-1">
                Currently learning
              </p>
              <h2 className="text-lg font-medium text-neutral-200">
                System design & AI
              </h2>
            </div>

            <div className="p-4 rounded-xl border border-neutral-800/50 bg-neutral-900/30">
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-mono mb-1">
                Based in
              </p>
              <h2 className="text-lg font-medium text-neutral-200">
                Nepal
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Selected work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
              Featured projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            View all <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectPreview
            number="01"
            title="SATHI"
            description="A real-time futsal coordination and management platform for discovering grounds, organizing matches, managing bookings and connecting players."
            tech={[
              "Next.js",
              "Node.js",
              "MySQL",
              "Prisma",
              "Socket.IO",
            ]}
          />

          <ProjectPreview
            number="02"
            title="HRM System"
            description="A human resource management platform for employees, salaries, leave management and payroll operations."
            tech={["Next.js", "MySQL", "Prisma"]}
          />
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            View all projects <span>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

function ProjectPreview({
  number,
  title,
  description,
  tech,
}: {
  number: string;
  title: string;
  description: string;
  tech: string[];
}) {
  return (
    <div className="group relative p-8 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 rounded-2xl transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono text-neutral-500 bg-neutral-800/80 px-2.5 py-1 rounded-full border border-neutral-700/50">
            {number}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        <p className="text-neutral-400 text-sm leading-relaxed mt-3">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-neutral-800/60">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium text-neutral-400 bg-neutral-800/40 px-2.5 py-1 rounded-md border border-neutral-700/30"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          © 2026 Sudeep Regmi. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/sudeep7regmi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sudeep-regmi-94a6b2230"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="https://medium.com/@sudeepregmi343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}