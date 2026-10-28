import React, { useRef, useEffect } from "react";

export function ParticleCanvas({ isActive = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let parts = [];
    let t = 0;
    let animationFrameId = null;

    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#06090E";
      ctx.fillRect(0, 0, W, H);
    };

    const seed = () => {
      parts = [];
      const n = W < 600 ? 450 : 900;
      for (let i = 0; i < n; i++) {
        parts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          life: Math.random() * 200,
        });
      }
    };

    const angle = (x, y) => {
      const s = 0.0028;
      return (
        Math.sin(x * s + t * 0.4) * 1.6 +
        Math.cos(y * s * 1.3 - t * 0.3) * 1.6 +
        Math.sin((x + y) * s * 0.5)
      );
    };

    const step = () => {
      ctx.fillStyle = "rgba(6, 9, 14, 0.08)";
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        const a = angle(p.x, p.y);
        const nx = p.x + Math.cos(a) * 1.1;
        const ny = p.y + Math.sin(a) * 1.1;

        // Brighter toward the right, dissipating toward the headline
        const alpha = 0.12 + 0.5 * (p.x / (W || 1));
        ctx.strokeStyle = `rgba(62, 214, 240, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;
        p.life--;

        if (p.life < 0 || p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          p.x = Math.random() * W;
          p.y = Math.random() * H;
          p.life = 120 + Math.random() * 200;
        }
      }
      t += 0.004;
    };

    const loop = () => {
      if (isActive && !document.hidden) {
        step();
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      size();
      seed();
    };

    size();
    seed();
    window.addEventListener("resize", handleResize);

    if (reduceMotion) {
      for (let k = 0; k < 160; k++) step();
    } else {
      for (let k2 = 0; k2 < 40; k2++) step();
      animationFrameId = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isActive]);

  return <canvas id="field" ref={canvasRef} aria-hidden="true" />;
}
