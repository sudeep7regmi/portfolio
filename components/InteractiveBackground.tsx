"use client";

import { useEffect, useState } from "react";

const bubbles = [
  { text: "</>", x: "8%", y: "18%", size: 52, delay: "0s" },
  { text: "JS", x: "88%", y: "15%", size: 46, delay: "1s" },
  { text: "TS", x: "92%", y: "65%", size: 58, delay: "2s" },
  { text: "SQL", x: "6%", y: "72%", size: 58, delay: "1.5s" },
  { text: "API", x: "80%", y: "88%", size: 44, delay: "3s" },
  { text: "AI", x: "17%", y: "88%", size: 44, delay: "2.5s" },
];

export default function InteractiveBackground() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // setMounted(true);

    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Subtle grid */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Mouse interaction circle */}

      <div
        className="absolute w-72 h-72 rounded-full border border-gray-200/50 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(
            ${mouse.x - 144}px,
            ${mouse.y - 144}px,
            0
          )`,
        }}
      />

      {/* Floating technology bubbles */}

      {bubbles.map((bubble, index) => {

        const moveX =
          (mouse.x - window.innerWidth / 2) *
          (index % 2 === 0 ? 0.008 : -0.006);

        const moveY =
          (mouse.y - window.innerHeight / 2) * 0.005;

        return (
          <div
            key={bubble.text}
            className="
              absolute
              rounded-full
              border
              border-gray-200
              bg-white/80
              backdrop-blur-sm
              flex
              items-center
              justify-center
              text-gray-400
              font-mono
              text-xs
              shadow-sm
              animate-[float_8s_ease-in-out_infinite]
              transition-transform
              duration-700
            "
            style={{
              left: bubble.x,
              top: bubble.y,
              width: bubble.size,
              height: bubble.size,
              animationDelay: bubble.delay,
              transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
            }}
          >
            {bubble.text}
          </div>
        );
      })}

      {/* Decorative dots */}

      <div className="absolute top-[30%] left-[25%] w-2 h-2 rounded-full bg-gray-300" />

      <div className="absolute top-[55%] left-[75%] w-1.5 h-1.5 rounded-full bg-gray-300" />

      <div className="absolute top-[80%] left-[35%] w-2 h-2 rounded-full bg-gray-200" />

      <div className="absolute top-[12%] left-[60%] w-1.5 h-1.5 rounded-full bg-gray-300" />

    </div>
  );
}
