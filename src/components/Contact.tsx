"use client";

import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const contactLinks = [
  {
    name: "Email",
    value: "mrmarup8393@gmail.com",
    href: "mailto:mrmarup8393@gmail.com",
    symbol: "@",
    description: "Send me an email",
  },
  {
    name: "GitHub",
    value: "github.com/marup-05",
    href: "https://github.com/marup-05",
    symbol: "GH",
    description: "Explore my projects",
  },
  {
    name: "LinkedIn",
    value: "rahman-marup",
    href: "https://www.linkedin.com/in/rahman-marup/",
    symbol: "in",
    description: "Let's connect professionally",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:mrmarup8393@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-transparent px-4 pt-12 pb-4 sm:px-6 sm:pt-14 sm:pb-5 md:pt-16 md:pb-6 lg:px-8"
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
          className="mx-auto mb-9 max-w-2xl text-center sm:mb-10"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            GET IN TOUCH
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea, an opportunity, or just want to say hello?
            My inbox is always open.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left: Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-white">
                Let's talk
              </h3>
              <p className="mt-2 max-w-md leading-7 text-gray-400">
                I'm currently learning and building projects in web
                development. Feel free to reach out for collaboration,
                opportunities, or a friendly conversation.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={item.name === "Email" ? undefined : "_blank"}
                  rel={
                    item.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors duration-300 hover:border-purple-500/40 hover:bg-purple-500/[0.06] sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-sm font-bold text-purple-300 transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-purple-500/20">
                    {item.symbol}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="mt-1 break-all text-sm text-gray-400 transition-colors group-hover:text-purple-300">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="text-lg text-gray-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-300">
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Availability card */}
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
              <div>
                <p className="text-sm font-medium text-emerald-300">
                  Open to opportunities
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Interested in learning, collaboration, and growing as a
                  developer.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-purple-500/20 bg-[#100C1F]/90 p-5 shadow-2xl shadow-purple-950/20 sm:p-7"
          >
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Send me a message
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Fill out the form and let's start a conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0B0915] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0B0915] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={5}
                  maxLength={3000}
                  rows={4}
                  placeholder="Tell me about your idea..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#0B0915] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-800/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#100C1F] active:translate-y-0"
              >
                Send Message
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Your email app will open with your message ready to send.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 border-t border-white/[0.10] pt-5 sm:mt-10 sm:pt-6"
        >
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400">
                Designed & built with{" "}
                <span className="text-purple-400">♥</span> by{" "}
                <span className="font-semibold text-white">Marup</span>
              </p>

              <p className="mt-1.5 text-xs text-gray-500">
                © {new Date().getFullYear()} Marup. All rights reserved.
              </p>
            </div>

            {/* Footer social links with icons */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-400">
              <a
                href="https://github.com/marup-05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-purple-300"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rahman-marup/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-purple-300"
              >
                <FaLinkedinIn className="text-base" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:mrmarup8393@gmail.com"
                aria-label="Email"
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-purple-300"
              >
                <FaEnvelope className="text-base" />
                <span>Email</span>
              </a>

              <a
                href="#home"
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-purple-300"
              >
                <FaArrowUp className="text-xs" />
                <span>Back to Top</span>
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;