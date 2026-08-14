import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-950">

      <Navbar />

      {/* Hero */}

      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">

        <div className="grid md:grid-cols-[1fr_280px] gap-16 items-center">

          <div>

            <p className="text-sm text-gray-500 mb-5">
              Software Engineering Student · Nepal
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[1.05]">
              Hi, I’m Sudeep.
              <span className="block text-gray-400">
                I build useful software.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-500">
              I’m a Software Engineering student focused on full-stack
              development, backend systems, real-time applications and
              practical software solutions.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">

              <Link
                href="/projects"
                className="px-5 py-3 rounded-lg bg-gray-950 text-white text-sm font-medium hover:bg-gray-800 transition"
              >
                View projects
              </Link>

              <Link
                href="/contact"
                className="px-5 py-3 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
              >
                Contact me
              </Link>

            </div>

          </div>

          <div className="flex justify-center md:justify-end">

            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-gray-200">

              <Image
                src="/Profile.jpeg"
                alt="Sudeep Regmi"
                width={300}
                height={300}
                priority
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Intro */}

      <section className="border-y border-gray-200 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <p className="text-sm text-gray-400 mb-2">
                Focus
              </p>

              <h2 className="font-medium">
                Full-stack development
              </h2>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">
                Currently learning
              </p>

              <h2 className="font-medium">
                System design & AI
              </h2>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">
                Based in
              </p>

              <h2 className="font-medium">
                Nepal
              </h2>
            </div>

          </div>

        </div>

      </section>

      {/* Featured Projects */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="flex items-end justify-between mb-10">

          <div>

            <p className="text-sm text-gray-400 mb-2">
              Selected work
            </p>

            <h2 className="text-3xl font-semibold tracking-tight">
              Featured projects
            </h2>

          </div>

          <Link
            href="/projects"
            className="hidden sm:block text-sm text-gray-500 hover:text-gray-950 transition"
          >
            View all →
          </Link>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <ProjectPreview
            number="01"
            title="SATHI"
            description="A real-time futsal coordination and management platform for discovering grounds, organizing matches, managing bookings and connecting players."
            tech="Next.js · Node.js · MySQL · Prisma · Socket.IO"
          />

          <ProjectPreview
            number="02"
            title="HRM System"
            description="A human resource management platform for employees, salaries, leave management and payroll operations."
            tech="Next.js · MySQL · Prisma"
          />

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
  tech: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-7 hover:border-gray-400 transition">

      <p className="text-xs text-gray-400 mb-7">
        {number}
      </p>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-500 leading-7 mt-3">
        {description}
      </p>

      <p className="text-xs text-gray-400 mt-7">
        {tech}
      </p>

    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200">

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-4">

        <p className="text-sm text-gray-400">
          © 2026 Sudeep Regmi
        </p>

        <div className="flex gap-5 text-sm">

          <a
            href="https://github.com/sudeep7regmi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-950"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sudeep-regmi-94a6b2230"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-950"
          >
            LinkedIn
          </a>

          <a
            href="https://medium.com/@sudeepregmi343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-950"
          >
            Medium
          </a>

        </div>

      </div>

    </footer>
  );
}
