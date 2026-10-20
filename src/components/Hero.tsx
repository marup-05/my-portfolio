import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const techStack = [
  { name: "HTML", icon: "5", color: "text-orange-400" },
  { name: "CSS", icon: "3", color: "text-blue-400" },
  { name: "JavaScript", icon: "JS", color: "text-yellow-300" },
  { name: "TypeScript", icon: "TS", color: "text-sky-400" },
  { name: "React", icon: "⚛", color: "text-cyan-300" },
  { name: "Next.js", icon: "N", color: "text-white" },
  { name: "Tailwind CSS", icon: "≈", color: "text-cyan-300" },
];

function Hero() {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, { stiffness: 150, damping: 18 });
  const smoothY = useSpring(rotateY, { stiffness: 150, damping: 18 });

  const imageRotateX = useTransform(smoothX, (value) => -value);
  const imageRotateY = useTransform(smoothY, (value) => value);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setCursor({ x: x * 100, y: y * 100 });
    rotateX.set((y - 0.5) * 12);
    rotateY.set((x - 0.5) * 12);
  }

  function resetMouse() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const introVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="relative isolate flex min-h-[calc(100svh-90px)] scroll-mt-28 items-center overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      {/* Cursor-following background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(380px circle at ${cursor.x}% ${cursor.y}%, rgba(139, 92, 246, 0.16), transparent 70%)`,
        }}
      />

      {/* Ambient purple lights */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-purple-700/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.13 },
            },
          }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <motion.div
            variants={introVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-200 sm:text-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            Hello, welcome to my portfolio
          </motion.div>

          <motion.h1
            variants={introVariants}
            className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              Marup
            </span>
            <span className="text-purple-400">.</span>
          </motion.h1>

          <motion.h2
            variants={introVariants}
            className="mt-5 text-xl font-semibold text-gray-200 sm:text-2xl lg:text-3xl"
          >
            Aspiring Full-Stack Developer
          </motion.h2>

          <motion.p
            variants={introVariants}
            className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:mx-0"
          >
            I'm passionate about building modern, responsive, and user-friendly
            web experiences. I'm continuously learning web development and
            turning ideas into interactive digital projects.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={introVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/30 sm:px-6 sm:text-base"
            >
              View My Projects <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-purple-400/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10 sm:px-6 sm:text-base"
            >
              View Resume <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          {/* Core tech stack */}
          <motion.div
            variants={introVariants}
            className="mx-auto mt-10 max-w-xl md:mx-0"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/70 to-transparent" />

              <h3 className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-purple-300 sm:text-sm">
                Core Tech Stack
              </h3>

              <div className="h-px flex-1 bg-gradient-to-l from-purple-500/70 to-transparent" />
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 md:justify-start">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.75 + index * 0.08,
                  }}
                  className="group flex min-w-[76px] flex-col items-center gap-2 rounded-xl border border-purple-400/20 bg-[#130E25]/80 px-3 py-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-500/15 sm:min-w-[84px]"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center text-xl font-extrabold ${tech.color}`}
                  >
                    {tech.icon}
                  </span>

                  <span className="text-center text-[11px] font-medium text-gray-300 group-hover:text-white sm:text-xs">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="mt-3 text-center text-xs text-gray-500 md:text-left">
              Technologies I'm learning and using in my projects.
            </p>
          </motion.div>
        </motion.div>

        {/* Portrait with cursor tilt */}
        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
          className="order-1 flex justify-center md:order-2"
          style={{ perspective: 1000 }}
        >
          <motion.div
            style={{
              rotateX: imageRotateX,
              rotateY: imageRotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[250px] sm:max-w-[320px] lg:max-w-[390px]"
          >
            <div className="absolute inset-5 rounded-full bg-purple-600/35 blur-3xl" />

            <div className="relative rounded-[2rem] border border-purple-400/30 bg-gradient-to-br from-purple-500/20 to-violet-950/50 p-2 shadow-2xl shadow-purple-950/40 sm:rounded-[2.5rem]">
              <img
                src="/self.jpg"
                alt="Portrait of Marup"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center sm:rounded-[2rem]"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -right-3 rounded-xl border border-purple-400/30 bg-[#130E25]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-5"
            >
              <p className="text-xs text-gray-400">Currently learning</p>
              <p className="mt-1 text-sm font-semibold text-purple-300">
                Node & Express.js
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
