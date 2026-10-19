
import { motion } from "motion/react";

const highlights = [
  {
    number: "01",
    title: "Always Learning",
    description:
      "Continuously improving my web development fundamentals and learning new technologies.",
  },
  {
    number: "02",
    title: "Building Projects",
    description:
      "Applying what I learn by building practical, responsive web projects.",
  },
  {
    number: "03",
    title: "Growing Every Day",
    description:
      "Working toward becoming a skilled full-stack developer, one step at a time.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Get to know me
          </p>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            About <span className="text-purple-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            A little about my journey, my passion for technology,
            and the developer I'm working to become.
          </p>
        </motion.div>

        {/* About content */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-purple-400/20 bg-[#100D20]/75 p-6 backdrop-blur-md sm:p-9"
          >
            <span className="mb-5 inline-flex rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-xs font-semibold tracking-wide text-purple-300 sm:text-sm">
              Aspiring Full-Stack Developer
            </span>

            <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
              Turning curiosity into{" "}
              <span className="text-purple-400">real projects.</span>
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              <p>
                Hi! I'm Marup, an aspiring web developer passionate
                about creating modern, responsive, and user-friendly
                digital experiences.
              </p>

              <p>
                I'm building my foundation in HTML, CSS, JavaScript,
                TypeScript, React, and Next.js. I enjoy exploring how
                websites work and turning new concepts into practical
                projects.
              </p>

              <p>
                My goal is to grow into a full-stack developer who can
                build useful applications from the user interface to
                the backend. I'm focused on learning consistently,
                improving my problem-solving skills, and getting better
                with every project I create.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-500"
              >
                Explore My Work ↗
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:border-purple-400/60 hover:text-purple-300"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {highlights.map((item) => (
              <motion.article
                key={item.number}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                className="group rounded-2xl border border-white/10 bg-[#100D20]/65 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/[0.07] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-500/10 text-sm font-bold text-purple-300">
                    {item.number}
                  </span>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
