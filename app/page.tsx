"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "MySQL",
  "Python",
  "Tailwind CSS",
  "Git",
];

const projects = [
  {
    title: "Government Feedback System",
    description:
      "A platform for citizens to provide feedback and complaints to government services.",
    tech: "Next.js, Node.js, MySQL",
    link: "#",
  },
  {
    title: "KaamSetu Job Portal",
    description:
      "A smart job portal connecting employers and job seekers efficiently.",
    tech: "React, Node.js, MongoDB",
    link: "#",
  },
  {
    title: "Ai-Chatbot",
    description:
      "AI-based assistant for managing healthcare appointments and reminders.",
    tech: "Python, Flask, SQLite",
    link: "#",
  },
];

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 scroll-smooth">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <h1 className="font-bold text-xl">Sudeep Regmi</h1>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className={`h-screen flex flex-col justify-center items-center text-center px-6 transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Image
  src="/Profile.jpeg"
  alt="Sudeep Regmi"
  width={180}
  height={180}
  priority
  className="rounded-full border-4 border-blue-500 shadow-2xl object-cover mb-6 hover:scale-105 transition duration-300"
/>
        <h2 className="text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-600">Sudeep Regmi</span>
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Software Engineering Student & Full Stack Developer building modern,
          scalable web applications.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow hover:scale-105 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>

        <p className="text-gray-600 leading-relaxed text-lg">
          I am a passionate software engineering student focused on building
          full-stack applications. I enjoy turning ideas into real-world
          products using modern technologies like Next.js, Node.js, and
          databases. I am currently working on academic and personal projects
          that solve real-world problems.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Skills</h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white shadow rounded-full text-sm hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <h4 className="text-xl font-semibold">{p.title}</h4>

              <p className="mt-2 text-gray-600">{p.description}</p>

              <p className="mt-3 text-sm text-gray-500">
                Tech: {p.tech}
              </p>

              <a
                href={p.link}
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
          
      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Contact</h3>

          <p className="text-gray-600 mb-6">
            Let’s connect and build something amazing.
          </p>

          <div className="flex flex-col gap-3 text-gray-700">
            <p>Email: sudeepregmi343@gmail.com</p>
            <p>GitHub: github.com/sudeep7regmi</p>
            <p>LinkedIn: linkedin.com/in/sudeepregmi</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white border-t">
        <p className="text-sm text-gray-500">
          © 2026 Sudeep Regmi. Built with Next.js & Tailwind.
        </p>
      </footer>
    </div>
  );
}