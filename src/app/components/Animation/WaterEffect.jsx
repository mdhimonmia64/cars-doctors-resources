"use client";
import { useEffect, useRef } from "react";

export default function WaterEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let ripples = [];

    function createRipple(x, y) {
      ripples.push({
        x,
        y,
        radius: 0,
        alpha: 0.5,
      });
    }

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      createRipple(e.clientX - rect.left, e.clientY - rect.top);
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.forEach((ripple, i) => {
        ripple.radius += 2;
        ripple.alpha -= 0.008;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (ripple.alpha <= 0) {
          ripples.splice(i, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
  className="absolute inset-0 w-full h-full z-10"
  ref={canvasRef}
/>
  );
}