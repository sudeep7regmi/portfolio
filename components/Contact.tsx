"use client";

import { socials } from "@/data/portfolio";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-800/80 py-24 scroll-mt-16 bg-zinc-900/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-zinc-400 text-xs font-semibold tracking-wider uppercase">
          Get in Touch
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold text-zinc-100 tracking-tight mt-2">
          Let&apos;s connect.
        </h2>

        <p className="max-w-md mx-auto text-xs text-zinc-400 leading-relaxed mt-4">
          Open for technical discussions, software roles, collaborations, or inquiries.
        </p>

        <a
          href="mailto:sudeepregmi343@gmail.com"
          className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-md bg-zinc-100 text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>sudeepregmi343@gmail.com</span>
        </a>

        <div className="grid sm:grid-cols-3 gap-4 mt-12 text-left">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-200">{social.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">{social.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}