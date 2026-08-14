
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-950"
        >
          Sudeep Regmi
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  active
                    ? "text-gray-950 font-medium"
                    : "text-gray-500 hover:text-gray-950"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <a
          href="/resume.pdf"
          download
          className="hidden sm:inline-flex border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
        >
          Resume
        </a>

      </div>
    </header>
  );
}

