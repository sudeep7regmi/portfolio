"use client";

import Image from "next/image";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive interfaces.",
    skills: ["HTML", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Developing APIs and scalable server-side systems.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.IO"],
  },
  {
    title: "Database & Tools",
    description: "Working with data, ORM, validation and development tools.",
    skills: ["MySQL", "Prisma ORM", "Zod", "Git", "GitHub", "Postman"],
  },
];

const projects = [
  {
    title: "SATHI",
    category: "Final Year Project",
    description:
      "A real-time futsal coordination and management platform that helps players discover grounds, organize matches, manage bookings, communicate with other players, and coordinate futsal activities.",
    tech: ["Next.js", "Node.js", "MySQL", "Prisma", "Socket.IO"],
    number: "01",
    featured: true,
  },
  {
    title: "HRM System",
    category: "Full Stack Application",
    description:
      "A human resource management system for managing employees, salaries, leave requests, payroll and other HR operations through a centralized web platform.",
    tech: ["Next.js", "MySQL", "Prisma", "TypeScript"],
    number: "02",
  },
  {
    title: "Government Feedback & Notice System",
    category: "E-Governance",
    description:
      "A full-stack e-governance platform where citizens can submit complaints and feedback while administrators manage notices, users and reports.",
    tech: ["Node.js", "MySQL", "JWT"],
    number: "03",
  },
  {
    title: "AI Assistant",
    category: "AI Application",
    description:
      "An AI-powered web assistant integrating AI APIs to provide conversational responses through a modern interactive interface.",
    tech: ["React", "Node.js", "AI APIs"],
    number: "04",
    link: "https://ai-chatbot-wb64.vercel.app/",
  },
  {
    title: "JobConnect",
    category: "Web Application",
    description:
      "A recruitment and job portal concept designed to connect job seekers and employers while improving the overall hiring workflow.",
    tech: ["Next.js", "Express.js", "MySQL"],
    number: "05",
  },
];

const socials = [
  {
    name: "GitHub",
    value: "github.com/sudeep7regmi",
    href: "https://github.com/sudeep7regmi",
  },
  {
    name: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/sudeep-regmi-94a6b2230",
  },
  {
    name: "Medium",
    value: "@sudeepregmi343",
    href: "https://medium.com/@sudeepregmi343",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden selection:bg-blue-500/30">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute top-[35%] -right-40 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -bottom-40 left-[30%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#020617]/75 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <a
            href="#"
            className="group flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-black text-sm shadow-lg shadow-blue-500/20">
              SR
            </div>

            <div className="hidden sm:block">
              <p className="font-bold tracking-tight">
                Sudeep Regmi
              </p>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">
                Software Engineer
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 hover:border-white/20 text-white transition"
            >
              Resume
            </a>
          </div>

          <a
            href="#contact"
            className="md:hidden px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[calc(100vh-73px)] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 py-20 md:py-28">

          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-16 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-7">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </div>

              <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-5">
                Software Engineering Student
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-[78px] font-black leading-[0.95] tracking-[-0.04em]">
                Building
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  digital
                </span>
                experiences.
              </h1>

              <p className="mt-8 max-w-2xl text-slate-400 text-base sm:text-lg leading-8">
                I’m Sudeep Regmi, a Software Engineering student from Nepal
                focused on building full-stack web applications, scalable
                backend systems, real-time platforms and AI-powered solutions.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <a
                  href="#projects"
                  className="group px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm transition shadow-xl shadow-blue-600/20"
                >
                  Explore my work
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 font-semibold text-sm transition"
                >
                  Download Resume
                </a>

              </div>

              {/* Socials */}

              <div className="flex items-center gap-6 mt-10">

                <a
                  href="https://github.com/sudeep7regmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition text-sm"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/sudeep-regmi-94a6b2230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition text-sm"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://medium.com/@sudeepregmi343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition text-sm"
                >
                  Medium ↗
                </a>

              </div>
            </div>

            {/* RIGHT */}

            <div className="flex justify-center lg:justify-end">

              <div className="relative">

                {/* Glow */}

                <div className="absolute -inset-10 bg-blue-500/15 blur-[80px] rounded-full" />

                {/* Image Card */}

                <div className="relative w-[280px] sm:w-[340px]">

                  <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-blue-500/60 via-transparent to-cyan-400/40" />

                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 p-2">

                    <Image
                      src="/Profile.jpeg"
                      alt="Sudeep Regmi"
                      width={400}
                      height={400}
                      priority
                      className="w-full aspect-square object-cover rounded-[1.5rem]"
                    />

                    {/* Image Overlay */}

                    <div className="absolute bottom-5 left-5 right-5">

                      <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3">

                        <div className="flex items-center justify-between">

                          <div>
                            <p className="text-xs text-slate-400">
                              Currently building
                            </p>

                            <p className="text-sm font-semibold mt-1">
                              Full-Stack Applications
                            </p>
                          </div>

                          <span className="text-blue-400 text-lg">
                            ✦
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Floating card */}

                <div className="hidden sm:block absolute -right-16 top-12 px-4 py-3 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-xl">

                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                    Focus
                  </p>

                  <p className="text-sm font-semibold mt-1">
                    Full Stack + AI
                  </p>

                </div>

                <div className="hidden sm:block absolute -left-16 bottom-20 px-4 py-3 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-xl">

                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                    Based in
                  </p>

                  <p className="text-sm font-semibold mt-1">
                    Nepal 🇳🇵
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK STATS
      ========================================================= */}

      <section className="border-y border-white/[0.06] bg-white/[0.015]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">

            <div className="py-8 text-center">
              <p className="text-3xl font-black text-white">5+</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">
                Projects
              </p>
            </div>

            <div className="py-8 text-center">
              <p className="text-3xl font-black text-white">Full</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">
                Stack
              </p>
            </div>

            <div className="py-8 text-center">
              <p className="text-3xl font-black text-white">10+</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">
                Technologies
              </p>
            </div>

            <div className="py-8 text-center">
              <p className="text-3xl font-black text-white">∞</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">
                Curiosity
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-28 scroll-mt-20"
      >

        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-16">

          <div>

            <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              About Me
            </p>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Turning ideas into
              <span className="text-slate-500"> useful software.</span>
            </h2>

          </div>

          <div>

            <p className="text-slate-400 text-lg leading-8">
              I’m a Software Engineering student from Nepal with a strong
              interest in full-stack development and modern web technologies.
              I enjoy understanding how systems work from the user interface
              all the way to the database and backend.
            </p>

            <p className="text-slate-400 text-lg leading-8 mt-6">
              My projects have involved e-governance, human resource
              management, AI applications and real-time sports platforms.
              I particularly enjoy building practical systems that solve
              real-world problems rather than just creating interfaces.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              <div className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02]">

                <div className="text-blue-400 text-xl mb-3">
                  ◈
                </div>

                <h3 className="font-semibold">
                  Problem Solver
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-6">
                  Interested in designing systems that solve practical
                  problems efficiently.
                </p>

              </div>

              <div className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02]">

                <div className="text-cyan-400 text-xl mb-3">
                  ⌘
                </div>

                <h3 className="font-semibold">
                  Continuous Learner
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-6">
                  Always exploring new technologies, architectures and
                  development practices.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}

      <section
        id="skills"
        className="border-y border-white/[0.06] bg-white/[0.015] py-28 scroll-mt-20"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-14">

            <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Skills
            </p>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              My technical toolkit.
            </h2>

            <p className="text-slate-500 mt-5 leading-7">
              Technologies I use to design, develop, test and deploy modern
              web applications.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {skillGroups.map((group, index) => (

              <div
                key={group.title}
                className="group p-7 rounded-3xl border border-white/[0.07] bg-slate-950/50 hover:bg-white/[0.03] hover:border-blue-500/20 transition duration-300"
              >

                <div className="flex items-center justify-between mb-5">

                  <span className="text-xs font-mono text-blue-400">
                    0{index + 1}
                  </span>

                  <span className="text-slate-700 group-hover:text-blue-400 transition">
                    ↗
                  </span>

                </div>

                <h3 className="text-xl font-bold">
                  {group.title}
                </h3>

                <p className="text-sm text-slate-500 leading-6 mt-2 mb-6">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {group.skills.map((skill) => (

                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.035] border border-white/[0.06] text-xs text-slate-300 hover:text-white hover:border-blue-500/30 transition"
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

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-28 scroll-mt-20"
      >

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">

          <div>

            <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Selected Work
            </p>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Things I’ve built.
            </h2>

          </div>

          <p className="max-w-md text-sm text-slate-500 leading-6">
            A collection of academic, personal and practical projects
            exploring different areas of software engineering.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {projects.map((project) => (

            <article
              key={project.title}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border transition duration-300 ${
                project.featured
                  ? "md:col-span-2 lg:col-span-2 border-blue-500/20 bg-gradient-to-br from-blue-500/[0.08] via-white/[0.02] to-transparent"
                  : "border-white/[0.07] bg-white/[0.015]"
              } hover:border-blue-500/30`}
            >

              {/* Project visual */}

              <div className="relative h-48 overflow-hidden border-b border-white/[0.06]">

                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-950 to-cyan-500/10" />

                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-blue-400/30" />
                  <div className="absolute bottom-[-40px] right-10 w-40 h-40 rounded-full border border-cyan-400/20" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="text-center">

                    <p className="text-5xl font-black text-white/[0.08]">
                      {project.number}
                    </p>

                    <p className="text-xs uppercase tracking-[0.3em] text-blue-400/60 font-bold">
                      {project.category}
                    </p>

                  </div>

                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                    Featured Project
                  </div>
                )}

              </div>

              {/* Content */}

              <div className="p-6 flex flex-col flex-1">

                <div className="flex justify-between items-start gap-4">

                  <div>

                    <p className="text-[10px] text-slate-600 font-mono mb-2">
                      PROJECT_{project.number}
                    </p>

                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>

                  </div>

                  {project.link && (

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-slate-400 hover:text-white hover:border-white/20 transition"
                    >
                      Live ↗
                    </a>

                  )}

                </div>

                <p className="text-sm text-slate-500 leading-6 mt-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-blue-500/[0.06] border border-blue-500/10 text-blue-300 text-[10px] font-medium"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="contact"
        className="relative border-t border-white/[0.06] py-28 scroll-mt-20 overflow-hidden"
      >

        <div className="absolute inset-0 flex justify-center pointer-events-none">

          <div className="w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full" />

        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-5">
            Contact
          </p>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight">
            Let’s build something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              meaningful.
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-slate-500 leading-7 mt-6">
            Whether it’s a software project, collaboration, internship or
            simply a conversation about technology, feel free to reach out.
          </p>

          <a
            href="mailto:sudeepregmi343@gmail.com"
            className="inline-flex items-center gap-3 mt-9 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition"
          >
            Get in touch
            <span>↗</span>
          </a>

          <div className="grid sm:grid-cols-3 gap-4 mt-16">

            {socials.map((social) => (

              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/20 transition text-left"
              >

                <div className="flex justify-between items-center">

                  <h3 className="font-semibold text-slate-300 group-hover:text-white transition">
                    {social.name}
                  </h3>

                  <span className="text-slate-600 group-hover:text-blue-400 transition">
                    ↗
                  </span>

                </div>

                <p className="text-xs text-slate-600 mt-2">
                  {social.value}
                </p>

              </a>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/[0.06]">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-xs font-black">
              SR
            </div>

            <p className="text-xs text-slate-600">
              © 2026 Sudeep Regmi
            </p>

          </div>

          <p className="text-xs text-slate-700">
            Built with Next.js & Tailwind CSS
          </p>

          <a
            href="#"
            className="text-xs text-slate-600 hover:text-white transition"
          >
            Back to top ↑
          </a>

        </div>

      </footer>

    </main>
  );
}

