import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-950">

      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-24">

        <p className="text-sm text-gray-400 mb-4">
          About
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          A little about me.
        </h1>

        <div className="mt-12 space-y-6 text-lg text-gray-500 leading-8">

          <p>
            I’m Sudeep Regmi, a Software Engineering student from Nepal
            interested in building practical and reliable software.
          </p>

          <p>
            My main area of interest is full-stack web development. I enjoy
            working across the entire application stack — from designing
            interfaces and building APIs to managing databases and
            authentication.
          </p>

          <p>
            During my academic projects, I have worked on e-governance,
            human resource management, AI applications and real-time futsal
            coordination systems.
          </p>

          <p>
            I’m particularly interested in understanding how different parts
            of a software system work together and how those systems can be
            designed to remain maintainable as they grow.
          </p>

        </div>

        <div className="border-t border-gray-200 mt-16 pt-10">

          <h2 className="text-xl font-semibold mb-6">
            What I enjoy
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">

            {[
              "Building full-stack applications",
              "Designing REST APIs",
              "Working with databases",
              "Real-time applications",
              "Learning new technologies",
              "Solving practical problems",
            ].map((item) => (
              <div
                key={item}
                className="border border-gray-200 rounded-lg px-5 py-4 text-sm text-gray-600"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
