import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-950">

      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-24">

        <p className="text-sm text-gray-400 mb-4">
          Contact
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Let’s talk.
        </h1>

        <p className="max-w-xl mt-6 text-lg text-gray-500 leading-8">
          Interested in working together, discussing a project or simply
          talking about software? Feel free to reach out.
        </p>

        <div className="mt-14 border-t border-gray-200">

          <a
            href="mailto:sudeepregmi343@gmail.com"
            className="flex items-center justify-between py-7 border-b border-gray-200 group"
          >
            <div>
              <p className="text-sm text-gray-400">
                Email
              </p>

              <p className="mt-2 font-medium group-hover:underline">
                sudeepregmi343@gmail.com
              </p>
            </div>

            <span className="text-gray-400 group-hover:text-gray-950 transition">
              ↗
            </span>
          </a>

          <a
            href="https://github.com/sudeep7regmi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-7 border-b border-gray-200 group"
          >
            <div>
              <p className="text-sm text-gray-400">
                GitHub
              </p>

              <p className="mt-2 font-medium group-hover:underline">
                github.com/sudeep7regmi
              </p>
            </div>

            <span className="text-gray-400 group-hover:text-gray-950 transition">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/sudeep-regmi-94a6b2230"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-7 border-b border-gray-200 group"
          >
            <div>
              <p className="text-sm text-gray-400">
                LinkedIn
              </p>

              <p className="mt-2 font-medium group-hover:underline">
                linkedin.com/in/sudeep-regmi
              </p>
            </div>

            <span className="text-gray-400 group-hover:text-gray-950 transition">
              ↗
            </span>
          </a>

          <a
            href="https://medium.com/@sudeepregmi343"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-7 group"
          >
            <div>
              <p className="text-sm text-gray-400">
                Medium
              </p>

              <p className="mt-2 font-medium group-hover:underline">
                @sudeepregmi343
              </p>
            </div>

            <span className="text-gray-400 group-hover:text-gray-950 transition">
              ↗
            </span>
          </a>

        </div>

      </section>

    </main>
  );
}
