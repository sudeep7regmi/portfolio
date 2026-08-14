import Navbar from "@/components/Navbar";

const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Socket.IO",
    ],
  },
  {
    category: "Database",
    items: [
      "MySQL",
      "Prisma ORM",
      "Database Design",
      "SQL",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Zod",
    ],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-zinc-800 selection:text-white">
      <Navbar />

      <section className="relative max-w-6xl mx-auto px-6 py-24">
        {/* Subtle Background Glows */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Section */}
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Capabilities & Stack
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            My technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">toolkit.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Technologies and tools I leverage to build, test, and scale reliable web applications.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mt-16 relative z-10">
          {skills.map((group) => (
            <div
              key={group.category}
              className="group relative p-8 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 rounded-2xl transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors">
                  {group.category}
                </h2>
                <span className="text-xs font-mono text-neutral-500 bg-neutral-800/80 px-2.5 py-1 rounded-full border border-neutral-700/50">
                  {group.items.length}
                </span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 rounded-xl bg-neutral-800/50 border border-neutral-700/40 text-sm font-medium text-neutral-300 transition-all duration-200 hover:bg-neutral-800 hover:border-neutral-600 hover:text-white hover:scale-[1.02]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}