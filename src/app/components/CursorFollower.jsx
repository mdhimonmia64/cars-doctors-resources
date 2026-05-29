"use client";
import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const bigRef = useRef(null);
  const dotsRef = useRef([...Array(7)].map(() => ({ x: 0, y: 0 })));

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      const x = mouse.current.x;
      const y = mouse.current.y;

      if (bigRef.current) {
        bigRef.current.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`;
      }

      dotsRef.current.forEach((dot, i) => {
        const el = document.getElementById(`dot-${i}`);
        const speed = 0.07 - i * 0.005;

        dot.x += (x - dot.x) * speed;
        dot.y += (y - dot.y) * speed;

        if (el) {
          el.style.transform = `translate3d(${dot.x - 4}px, ${dot.y - 4}px, 0)`;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={bigRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-black opacity-60 pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      />
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          id={`dot-${i}`}
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-black opacity-30 pointer-events-none z-[9998]"
          style={{ willChange: "transform" }}
        />
      ))}
    </>
  );
}
