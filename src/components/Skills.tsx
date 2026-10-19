import { motion } from "motion/react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building modern, responsive and interactive web interfaces.",
    skills: [
      { name: "HTML5", icon: "5", color: "text-orange-400", detail: "Semantic markup" },
      { name: "CSS3", icon: "3", color: "text-blue-400", detail: "Modern styling" },
      { name: "JavaScript", icon: "JS", color: "text-yellow-300", detail: "Web interactivity" },
      { name: "ES6+", icon: "ES", color: "text-yellow-200", detail: "Modern JavaScript" },
      { name: "TypeScript", icon: "TS", color: "text-sky-400", detail: "Typed JavaScript" },
      { name: "React", icon: "⚛", color: "text-cyan-300", detail: "UI development" },
      { name: "Next.js", icon: "N", color: "text-white", detail: "React framework" },
      { name: "Better Auth", icon: "BA", color: "text-violet-300", detail: "Authentication" },
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Learning server-side development and API building.",
    skills: [
      { name: "Node.js", icon: "JS", color: "text-green-400", detail: "JavaScript runtime" },
      { name: "Express.js", icon: "EX", color: "text-gray-200", detail: "Backend framework" },
    ],
  },
  {
    number: "03",
    title: "Styling & UI",
    description: "Creating clean layouts and reusable UI components.",
    skills: [
      { name: "Tailwind CSS", icon: "≈", color: "text-cyan-300", detail: "Utility-first CSS" },
      { name: "daisyUI", icon: "D", color: "text-pink-300", detail: "UI components" },
      { name: "shadcn/ui", icon: "S", color: "text-white", detail: "Reusable components" },
      { name: "HeroUI", icon: "H", color: "text-violet-300", detail: "React components" },
    ],
  },
  {
    number: "04",
    title: "Tools & Design",
    description: "Tools for coding, version control and interface design.",
    skills: [
      { name: "Git", icon: "G", color: "text-orange-400", detail: "Version control" },
      { name: "GitHub", icon: "GH", color: "text-white", detail: "Code collaboration" },
      { name: "VS Code", icon: "VS", color: "text-blue-400", detail: "Code editor" },
      { name: "Figma", icon: "F", color: "text-pink-300", detail: "UI/UX design" },
      { name: "Windows", icon: "W", color: "text-sky-300", detail: "Operating system" },
    ],
  },
  {
    number: "05",
    title: "Deployment Platform",
    description: "Deploying projects and making web apps accessible online.",
    skills: [
      { name: "Vercel", icon: "V", color: "text-white", detail: "Web deployment" },
      { name: "Netlify", icon: "N", color: "text-teal-300", detail: "Web deployment" },
    ],
  },
  {
    number: "06",
    title: "Database",
    description: "Learning to store, manage and retrieve application data.",
    skills: [
      { name: "MongoDB", icon: "M", color: "text-green-400", detail: "NoSQL database" },
      { name: "MySQL", icon: "SQL", color: "text-sky-300", detail: "Relational database" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-purple-700/15 blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-200 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            WHAT I WORK WITH
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              Skills
            </span>
            <span className="text-purple-400">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Technologies and tools I'm learning and using to build
            modern, responsive and user-friendly web applications.
          </p>

          <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        </motion.div>

        {/* Skills categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.number}
              variants={cardVariants}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-purple-400/20 bg-[#100C1F]/80 p-5 shadow-lg shadow-purple-950/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-950/20 sm:p-6"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/5 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Category heading */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-xs font-bold tracking-[0.2em] text-purple-400">
                    CATEGORY {group.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    {group.title}
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-sm font-bold text-purple-300 transition-transform duration-300 group-hover:rotate-6">
                  {group.number}
                </div>
              </div>

              <p className="mt-3 min-h-12 text-sm leading-6 text-gray-400">
                {group.description}
              </p>

              <div className="my-5 h-px bg-gradient-to-r from-purple-400/30 via-purple-400/10 to-transparent" />

              {/* Skills list */}
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.045,
                    }}
                    className="flex min-w-0 items-center gap-2.5 rounded-xl border border-white/[0.07] bg-black/20 p-3 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/[0.08] sm:gap-3 sm:p-3.5"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.04] text-sm font-extrabold ${skill.color}`}
                    >
                      {skill.icon}
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate text-xs font-semibold text-gray-200 sm:text-sm">
                        {skill.name}
                      </h4>

                      <p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-[11px]">
                        {skill.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom hover accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-fuchsia-400 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>

        {/* Closing text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center text-xs leading-6 text-gray-500 sm:mt-12 sm:text-sm"
        >
          Always learning, always building, always improving.
          <span className="ml-2 text-purple-300">✦</span>
        </motion.p>
      </div>
    </section>
  );
}

export default Skills;
