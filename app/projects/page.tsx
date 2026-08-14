import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "SATHI",
    type: "Final Year Project",
    description:
      "A real-time futsal coordination and management platform that allows players to discover grounds, organize matches, manage bookings and communicate with other players.",
    tech: ["Next.js", "Node.js", "MySQL", "Prisma", "Socket.IO"],
  },
  {
    title: "HRM System",
    type: "Full Stack Application",
    description:
      "A human resource management system for managing employees, salaries, leave requests and payroll operations.",
    tech: ["Next.js", "MySQL", "Prisma", "TypeScript"],
  },
  {
    title: "Government Feedback & Notice System",
    type: "E-Governance",
    description:
      "A platform where citizens can submit feedback and complaints while administrators manage notices, users and reports.",
    tech: ["Node.js", "MySQL", "JWT"],
  },
  {
    title: "AI Assistant",
    type: "AI Application",
    description:
      "An AI-powered web assistant using API integrations to provide conversational responses through a simple interactive interface.",
    tech: ["React", "Node.js", "AI APIs"],
    link: "https://ai-chatbot-wb64.vercel.app/",
  },
  {
    title: "JobConnect",
    type: "Web Application",
    description:
      "A recruitment and job portal concept designed to connect employers and job seekers while improving hiring workflows.",
    tech: ["Next.js", "Express.js", "MySQL"],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-gray-950">

      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-sm text-gray-400 mb-4">
          Projects
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Things I’ve built.
        </h1>

        <p className="max-w-2xl mt-6 text-gray-500 leading-7">
          A selection of academic and personal projects exploring different
          areas of software engineering.
        </p>

        <div className="mt-16 border-t border-gray-200">

          {projects.map((project, index) => (

            <article
              key={project.title}
              className="grid md:grid-cols-[80px_1fr_220px] gap-6 py-10 border-b border-gray-200"
            >

              <span className="text-sm text-gray-400">
                0{index + 1}
              </span>

              <div>

                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                  {project.type}
                </p>

                <h2 className="text-2xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-4 text-gray-500 leading-7 max-w-2xl">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 text-sm font-medium hover:underline"
                  >
                    View project →
                  </a>
                )}

              </div>

              <div className="flex flex-wrap md:flex-col gap-2 md:items-start">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-500 border border-gray-200 rounded-md px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}
