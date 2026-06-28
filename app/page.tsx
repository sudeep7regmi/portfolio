"use client";

import Image from "next/image";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "JS", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "Git", "GitHub", "Postman", "Prisma ORM"],
  },
];

const projects = [
  {
    title: "Government Feedback & Notice System",
    description:
      "A full-stack e-governance platform where citizens can submit complaints and feedback while administrators manage notices and reports.",
    tech: ["Node.js", "MySQL", "JWT"],
  },  
  {
    title: "AI Assistant Web Application",
    description:
      "An AI-powered assistant using API integrations for real-time conversational responses and interactive experiences.",
    tech: ["AI APIs", "Node.js", "React"],
    link: "https://ai-chatbot-wb64.vercel.app/"
  },
  {
    title: "JobConnect",
    description:
      "A smart recruitment and job portal concept focused on improving hiring workflows and connecting opportunities efficiently.",
    tech: ["Next", "MySQL", "Express.js"],
  },
  {
    title: "HRM-System",
    description:
      "A smart recruitment and job portal concept focused on improving hiring workflows and connecting opportunities efficiently.",
    tech: ["Next", "MySQL", "Prisma"],
  }
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden scroll-smooth selection:bg-blue-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-120 h-120 bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-120 h-120 bg-cyan-400/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-slate-950/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-wide hover:text-blue-400 transition">
            Sudeep Regmi
          </a>

          <div className="hidden md:flex gap-8 text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-68px)] flex items-center justify-center px-6 py-16 md:py-24">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs font-semibold mb-4">
              Software Engineer
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              Sudeep
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mt-2">Regmi</span>
            </h1>

            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Aspiring Software Engineering student passionate about full-stack
              development, scalable web applications, AI integration, and modern
              software architecture.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-medium transition shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 text-sm"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 font-medium transition text-sm"
              >
                Download Resume
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6 mt-10 text-slate-400 text-sm font-medium">
              <a href="https://github.com/sudeep7regmi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
              <a href="https://www.linkedin.com/in/sudeep-regmi-94a6b2230" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
              <a href="https://medium.com/@sudeepregmi343" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Medium</a>
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition duration-500"></div>

              <div className="relative rounded-4xl overflow-hidden border border-white/10 p-2 bg-slate-900/50 backdrop-blur-3xl shadow-2xl">
                <Image
                  src="/Profile.jpeg"
                  alt="Sudeep Regmi"
                  width={340}
                  height={340}
                  priority
                  className="rounded-[1.6rem] object-cover hover:scale-[1.03] transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs font-semibold mb-4">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Building practical software for real-world problems.
            </h2>
          </div>

          <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I’m a Software Engineering student from Nepal with experience in
              full-stack development, REST APIs, authentication systems, and
              scalable backend architecture. I enjoy building systems that solve
              practical challenges in areas like e-governance, AI applications,
              and platform development.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/3 border border-white/5 rounded-2xl p-4">
                <h3 className="text-2xl font-bold text-blue-400">3+</h3>
                <p className="text-slate-400 text-xs mt-1 uppercase tracking-wider font-semibold">Major Projects</p>
              </div>

              <div className="bg-white/3 border border-white/5 rounded-2xl p-4">
                <h3 className="text-2xl font-bold text-cyan-400">Full Stack</h3>
                <p className="text-slate-400 text-xs mt-1 uppercase tracking-wider font-semibold">Development Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white/1 border-y border-white/5 py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs font-semibold mb-4">
              Skills
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Technologies & Tools
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-white/2 border border-white/5 rounded-3xl p-6 backdrop-blur-xl hover:border-white/10 hover:bg-white/4 transition duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-slate-200">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-white/4 border border-white/5 text-xs text-slate-300 font-medium"
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

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-14">
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs font-semibold mb-4">
            Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 hover:bg-white/4 transition-all duration-300 shadow-2xl"
            >
              <div className="h-44 relative bg-gradient-to-br from-blue-900/40 via-slate-900 to-cyan-900/40 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 opacity-50 group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <span className="text-lg font-bold text-slate-400 opacity-40 group-hover:opacity-60 transition duration-300">
                    {project.title.split(" ")[0]} Project
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white bg-white/5 rounded-lg border border-white/5 transition text-xs font-medium shrink-0"
                    >
                      Live ↗
                    </a>
                  )}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-blue-500/5 border border-blue-500/10 text-blue-300 text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white/1 border-t border-white/5 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs font-semibold mb-4">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Let’s build something amazing.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            I’m always interested in new opportunities, collaborations, and
            innovative software projects.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            <a
              href="mailto:sudeepregmi343@gmail.com"
              className="group bg-white/2 border border-white/5 rounded-2xl p-5 hover:bg-white/4 hover:border-white/10 transition"
            >
              <h3 className="text-base font-semibold mb-1 text-slate-300 group-hover:text-blue-400 transition">Email</h3>
              <p className="text-slate-400 text-xs break-all">
                sudeepregmi343@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/sudeep7regmi"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/2 border border-white/5 rounded-2xl p-5 hover:bg-white/4 hover:border-white/10 transition"
            >
              <h3 className="text-base font-semibold mb-1 text-slate-300 group-hover:text-blue-400 transition">GitHub</h3>
              <p className="text-slate-400 text-xs">
                github.com/sudeep7regmi
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/sudeep-regmi-94a6b2230"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/2 border border-white/5 rounded-2xl p-5 hover:bg-white/4 hover:border-white/10 transition"
            >
              <h3 className="text-base font-semibold mb-1 text-slate-300 group-hover:text-blue-400 transition">LinkedIn</h3>
              <p className="text-slate-400 text-xs">
                Connect with me
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-slate-600 text-xs">
        © 2026 Sudeep Regmi — Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}