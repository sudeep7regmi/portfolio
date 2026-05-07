"use client";

import Image from "next/image";

const skillGroups = [
  {
    title: "Frontend",
    skills: [ "HTML","JS","Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "Git", "GitHub", "Postman"],
  },
];

const projects = [
  {
    title: "Government Feedback & Notice System",
    description:
      "A full-stack e-governance platform where citizens can submit complaints and feedback while administrators manage notices and reports.",
    tech: [ "Node.js", "MySQL", "JWT"],
  },  
  {
    title: "AI Assistant Web Application",
    description:
      "An AI-powered assistant using API integrations for real-time conversational responses and interactive experiences.",
    tech: ["AI APIs", "Node.js", "React"],
    link: "https://ai-chatbot-wb64.vercel.app/"
  },
  {
    title: "KaamSetu Job Portal",
    description:
      "A smart recruitment and job portal concept focused on improving hiring workflows and connecting opportunities efficiently.",
    tech: ["React", "MongoDB", "Express.js"],
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-slate-950/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">
            Sudeep Regmi
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-slate-300">
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
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Software Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Sudeep
              <span className="block text-blue-500">Regmi</span>
            </h1>

            <p className="mt-8 text-slate-300 text-lg leading-relaxed max-w-xl">
              Aspiring Software Engineering student passionate about full-stack
              development, scalable web applications, AI integration, and modern
              software architecture.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="px-7 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition shadow-2xl shadow-blue-500/20"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-7 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-6 mt-10 text-slate-400 text-sm">
              <a
                href="https://github.com/sudeep7regmi"
                target="_blank"
                className="hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sudeep-regmi-94a6b2230"
                target="_blank"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>

              <a
                href="https://medium.com/@sudeepregmi343"
                target="_blank"
                className="hover:text-white transition"
              >
                Medium
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full"></div>

              <Image
                src="/Profile.jpeg"
                alt="Sudeep Regmi"
                width={340}
                height={340}
                priority
                className="relative rounded-[2rem] border border-white/10 shadow-2xl object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-28"
      >
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Building practical software for real-world problems.
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <p className="text-slate-300 text-lg leading-relaxed">
              I’m a Software Engineering student from Nepal with experience in
              full-stack development, REST APIs, authentication systems, and
              scalable backend architecture. I enjoy building systems that solve
              practical challenges in areas like e-governance, AI applications,
              and platform development.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400">3+</h3>
                <p className="text-slate-400 text-sm mt-1">Major Projects</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400">Full Stack</h3>
                <p className="text-slate-400 text-sm mt-1">Development Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="bg-white/[0.03] border-y border-white/10 py-28"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Skills
            </p>

            <h2 className="text-5xl font-bold">
              Technologies & Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-slate-300"
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

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-28"
      >
        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Projects
          </p>

          <h2 className="text-5xl font-bold">
            Featured Work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition duration-500 shadow-2xl"
            >
              <div className="h-52 bg-gradient-to-br from-blue-600 to-cyan-500"></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs"
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

      {/* Contact */}
      <section
        id="contact"
        className="py-28 bg-white/[0.03] border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Let’s build something amazing.
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I’m always interested in new opportunities, collaborations, and
            innovative software projects.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <a
              href="mailto:sudeepregmi343@gmail.com"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-slate-400 text-sm break-all">
                sudeepregmi343@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/sudeep7regmi"
              target="_blank"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-slate-400 text-sm">
                github.com/sudeep7regmi
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/sudeep-regmi-94a6b2230"
              target="_blank"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-400 text-sm">
                Connect with me
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-sm">
        © 2026 Sudeep Regmi — Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}