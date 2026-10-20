
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  star: boolean;
};

export default function CursorEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const isTouchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReducedMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame = 0;
    let lastParticleTime = 0;
    let lastX: number | null = null;
    let lastY: number | null = null;

    const particles: Particle[] = [];
    const maxParticles = 100;

    const colors = [
      "192, 132, 252",
      "216, 180, 254",
      "233, 213, 255",
      "255, 255, 255",
    ];

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = (x: number, y: number) => {
      if (particles.length >= maxParticles) {
        particles.shift();
      }

      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 3 + 1,
        life: 1,
        maxLife: Math.random() * 35 + 25,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.08,
        color: colors[Math.floor(Math.random() * colors.length)],
        star: Math.random() > 0.35,
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const x = event.clientX;
      const y = event.clientY;
      const now = performance.now();

      if (lastX === null || lastY === null) {
        lastX = x;
        lastY = y;
        createParticle(x, y);
        lastParticleTime = now;
        return;
      }

      const distance = Math.hypot(x - lastX, y - lastY);

      if (now - lastParticleTime > 12 && distance > 2) {
        const count = Math.min(4, Math.ceil(distance / 8));

        for (let i = 0; i < count; i++) {
          const progress = (i + 1) / count;

          createParticle(
            lastX + (x - lastX) * progress,
            lastY + (y - lastY) * progress
          );
        }

        lastParticleTime = now;
      }

      lastX = x;
      lastY = y;
    };

    const drawStar = (
      x: number,
      y: number,
      size: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -size * 1.8);
      ctx.quadraticCurveTo(size * 0.2, -size * 0.2, size * 1.8, 0);
      ctx.quadraticCurveTo(size * 0.2, size * 0.2, 0, size * 1.8);
      ctx.quadraticCurveTo(-size * 0.2, size * 0.2, -size * 1.8, 0);
      ctx.quadraticCurveTo(-size * 0.2, -size * 0.2, 0, -size * 1.8);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.rotation += particle.rotationSpeed;
        particle.life -= 1 / particle.maxLife;

        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = Math.max(0, particle.life);
        const twinkle = 0.65 + Math.sin(
          (1 - particle.life) * 18
        ) * 0.35;

        ctx.globalAlpha = alpha * twinkle;
        ctx.fillStyle = `rgba(${particle.color}, 1)`;

        if (particle.star) {
          drawStar(
            particle.x,
            particle.y,
            particle.size * alpha,
            particle.rotation
          );
        } else {
          ctx.beginPath();
          ctx.arc(
            particle.x,
            particle.y,
            Math.max(0.3, particle.size * alpha * 0.65),
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ willChange: "contents" }}
    />
  );
}
