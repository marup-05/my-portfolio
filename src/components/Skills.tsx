
import { motion } from "motion/react";

import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiShadcnui,
  SiHeroui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import { FaCss3Alt, FaShieldAlt, FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive and interactive web interfaces.",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-400", detail: "Semantic markup" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400", detail: "Modern styling" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300", detail: "Web interactivity" },
      { name: "ES6+", icon: SiJavascript, color: "text-yellow-200", detail: "Modern JavaScript" },
      { name: "TypeScript", icon: SiTypescript, color: "text-sky-400", detail: "Typed JavaScript" },
      { name: "React", icon: SiReact, color: "text-cyan-300", detail: "UI development" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white", detail: "React framework" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300", detail: "Utility-first CSS" },
      { name: "HeroUI", icon: SiHeroui, color: "text-violet-300", detail: "React UI library" },
      { name: "daisyUI", icon: SiDaisyui, color: "text-pink-300", detail: "UI components" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "text-white", detail: "Reusable components" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Building server-side applications, APIs and database systems.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-400", detail: "JavaScript runtime" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-200", detail: "Backend framework" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400", detail: "NoSQL database" },
      { name: "MySQL", icon: SiMysql, color: "text-sky-300", detail: "Relational database" },
      { name: "Better Auth", icon: FaShieldAlt, color: "text-violet-300", detail: "Authentication" },
    ],
  },
  {
    title: "Tools & Design",
    description:
      "Tools for coding, version control, design and deployment.",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-400", detail: "Version control" },
      { name: "GitHub", icon: SiGithub, color: "text-white", detail: "Code collaboration" },
      { name: "VS Code", icon: VscVscode, color: "text-blue-400", detail: "Code editor" },
      { name: "Figma", icon: SiFigma, color: "text-pink-300", detail: "UI/UX design" },
      { name: "Windows", icon: FaWindows, color: "text-sky-300", detail: "Operating system" },
      { name: "Vercel", icon: SiVercel, color: "text-white", detail: "Web deployment" },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-300", detail: "Web deployment" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
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

        {/* Skill Categories */}
        <div className="space-y-14 sm:space-y-16">
          {skillGroups.map((group) => (
            <div key={group.title}>
              {/* Category heading */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="mb-8 text-center"
              >
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {group.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                  {group.description}
                </p>
              </motion.div>

              {/* Technology Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
                className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3"
              >
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.article
                      key={skill.name}
                      variants={cardVariants}
                      className="group relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-blue-400/10 bg-[#0B1020]/80 px-3 py-6 text-center shadow-lg shadow-blue-950/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#10182B] hover:shadow-xl hover:shadow-blue-950/20 sm:min-h-[220px] sm:px-6 sm:py-8"
                    >
                      {/* Card glow */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-purple-500/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Technology Icon */}
                      <Icon
                        className={`relative mb-4 h-9 w-9 transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-12 sm:w-12 ${skill.color}`}
                      />

                      {/* Technology Name */}
                      <h4 className="relative text-base font-bold text-white sm:text-xl">
                        {skill.name}
                      </h4>

                      {/* Short Description */}
                      <p className="relative mt-3 max-w-[260px] text-xs leading-5 text-blue-300/90 sm:mt-4 sm:text-sm sm:leading-6">
                        {skill.detail}
                      </p>

                      {/* Bottom hover accent */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                    </motion.article>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Closing text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-14 text-center text-xs leading-6 text-gray-500 sm:mt-16 sm:text-sm"
        >
          Always learning, always building, always improving.
          <span className="ml-2 text-purple-300">✦</span>
        </motion.p>
      </div>
    </section>
  );
}

export default Skills;
