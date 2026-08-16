"use client";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 py-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-zinc-200 text-zinc-950 font-black text-[10px] flex items-center justify-center">
            SR
          </div>
          <span>© 2026 Sudeep Regmi</span>
        </div>

        <p className="text-[11px]">Built with Next.js & Tailwind CSS</p>

        <a href="#" className="hover:text-zinc-300 transition-colors text-[11px]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}