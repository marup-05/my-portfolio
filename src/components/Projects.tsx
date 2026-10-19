
"use client";

import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "BazarDor",
    category: "Full-Stack E-commerce Platform",
    description:
      "A full-stack marketplace project built with Next.js, featuring authentication, a modern UI, and MongoDB integration.",
    image: "/bazardor.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Better Auth",
      "HeroUI",
      "Tailwind CSS",
    ],
    github: "https://github.com/marup-05/A7-Bazardor",
    demo: "https://a7-bazardor.vercel.app/",
    featured: true,
  },
  {
    number: "02",
    title: "Fitlog",
    category: "Fitness Web Application",
    description:
      "A fitness-focused web application built with Next.js and React, using reusable components and a responsive interface.",
    image: "/fitlog.png",
    tech: ["Next.js", "React", "TypeScript", "daisyUI", "Tailwind CSS"],
    github: "https://github.com/marup-05/A6-Fit-Log",
    demo: "https://a6-fit-log-theta.vercel.app/",
    featured: false,
  },
  {
    number: "03",
    title: "Book Vibe",
    category: "Book Discovery Application",
    description:
      "A book-related web application designed to provide an engaging browsing experience with a clean, responsive UI.",
    image: "/book.png",
    tech: ["Next.js", "React", "JavaScript", "daisyUI", "Tailwind CSS"],
    github: "https://github.com/marup-05/book-vibe",
    demo: "https://book-vibe-iz3j.vercel.app/",
    featured: false,
  },
  {
    number: "04",
    title: "DevStack",
    category: "Developer Resource Platform",
    description:
      "A React-based web project built with TypeScript and Tailwind CSS, featuring a responsive interface and reusable UI components.",
    image: "/dev.png",
    tech: ["React", "TypeScript", "daisyUI", "Tailwind CSS"],
    github: "https://github.com/marup-05/b14-as5",
    demo: "https://as-5-devstack.netlify.app/",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative isolate scroll-mt-28 overflow-hidden bg-transparent px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-purple-700/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            MY PORTFOLIO
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            Here are some projects I have built while learning and exploring
            modern web development.
          </p>
        </motion.div>

        {/* Project cards: 2 columns on desktop */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className={`group overflow-hidden rounded-2xl border bg-[#100C1F] transition-colors duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/20 ${
                project.featured
                  ? "border-purple-500/40"
                  : "border-white/[0.08]"
              }`}
            >
              {/* Project screenshot */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-500/10 via-[#171126] to-fuchsia-500/10 sm:h-64">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Screenshot overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100C1F]/60 via-transparent to-black/10" />

                <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-[#0B0915]/80 px-3 py-1.5 text-xs text-gray-200 backdrop-blur-md">
                  PROJECT {project.number}
                </div>

                {project.featured && (
                  <div className="absolute right-4 top-4 rounded-lg border border-purple-300/30 bg-purple-600/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    Featured
                  </div>
                )}
              </div>

              {/* Project details */}
              <div className="p-5 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-purple-300 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-purple-500/15 bg-purple-500/[0.07] px-2.5 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub and Live Demo */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} GitHub repository`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:border-purple-400/50 hover:bg-purple-500/10"
                  >
                    <span className="font-bold">GH</span>
                    GitHub
                    <span>↗</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-950/20 transition hover:-translate-y-0.5 hover:shadow-purple-800/30"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* More projects on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/marup-05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-purple-500/30 px-6 py-3.5 text-sm font-medium text-white transition hover:border-purple-400/60 hover:bg-purple-500/10"
          >
            <span className="font-bold">GH</span>
            Explore More on GitHub
            <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
