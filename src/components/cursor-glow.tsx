"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        ref={glowRef}
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, hsl(158 64% 52% / 0.07) 0%, hsl(158 64% 52% / 0.025) 40%, transparent 70%)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
