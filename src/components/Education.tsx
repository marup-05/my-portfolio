
import { motion } from "motion/react";

const educationData = [
  {
    id: "01",
    period: "2024 – Present",
    status: "CURRENTLY STUDYING",
    title: "Diploma in Engineering (Computer Science & Technology)",
    institution: "Feni Govt. Computer Institute",
    description:
      "Currently continuing my academic journey while learning web development and building practical projects.",
    tags: ["Learning", "Personal Growth"],
  },
  {
    id: "02",
    period: "2021 – 2023",
    status: "COMPLETED",
    title: "Secondary School Certificate (Science)",
    institution: "Sonagazi Md.Saber Govt. Pilot High School",
    description:
      "Built my academic foundation and developed an interest in technology and problem-solving.",
    tags: ["Academic Foundation"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function Education() {
  return (
    <section
      id="education"
      className="relative isolate scroll-mt-32 overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-purple-700/15 blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
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
            MY ACADEMIC JOURNEY
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              Education
            </span>
            <span className="text-purple-400">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            My educational background and the experiences that
            continue to shape my learning journey.
          </p>

          <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        </motion.div>

        {/* Education timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-purple-400/70 via-violet-500/30 to-transparent sm:left-[25px]" />

          <div className="space-y-7 sm:space-y-9">
            {educationData.map((education) => (
              <motion.article
                key={education.id}
                variants={cardVariants}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline marker */}
                <div className="absolute left-[11px] top-7 z-10 flex h-[17px] w-[17px] items-center justify-center rounded-full border border-purple-300/70 bg-[#100C1F] shadow-[0_0_18px_rgba(168,85,247,0.35)] sm:left-[17px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                </div>

                {/* Education card */}
                <div className="group relative overflow-hidden rounded-2xl border border-purple-400/20 bg-[#100C1F]/80 p-5 shadow-lg shadow-purple-950/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-950/20 sm:p-7">
                  {/* Card glow */}
                  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/5 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <span className="inline-flex rounded-lg border border-purple-400/25 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-purple-300">
                        {education.period}
                      </span>

                      <h3 className="mt-4 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-200 sm:text-2xl">
                        {education.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-purple-300 sm:text-base">
                        {education.institution}
                      </p>
                    </div>

                    <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold tracking-wider text-gray-400 sm:text-xs">
                      {education.status}
                    </span>
                  </div>

                  <div className="my-5 h-px bg-gradient-to-r from-purple-400/30 via-purple-400/10 to-transparent" />

                  <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                    {education.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {education.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-purple-400/15 bg-purple-500/[0.06] px-3 py-1.5 text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom hover accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-fuchsia-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center text-xs leading-6 text-gray-500 sm:mt-12 sm:text-sm"
        >
          Every step is a part of my journey to grow and build.
          <span className="ml-2 text-purple-300">✦</span>
        </motion.p>
      </div>
    </section>
  );
}

export default Education;
