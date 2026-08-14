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
    <main className="min-h-screen bg-white text-gray-950">

      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-sm text-gray-400 mb-4">
          Skills
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          My toolkit.
        </h1>

        <p className="max-w-xl mt-6 text-gray-500 leading-7">
          Technologies and tools I use to build, test and maintain software
          applications.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mt-16">

          {skills.map((group) => (

            <div
              key={group.category}
              className="border border-gray-200 rounded-xl p-7"
            >

              <h2 className="text-lg font-semibold">
                {group.category}
              </h2>

              <div className="flex flex-wrap gap-2 mt-6">

                {group.items.map((skill) => (

                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-600"
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
