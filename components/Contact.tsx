"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    value: "indrajeetkhatarkar5@gmail.com",
    description: "Send me an email",
    icon: FaEnvelope,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=indrajeetkhatarkar5@gmail.com",
    color: "text-cyan-400",
    glow: "bg-cyan-400/10",
  },
  {
    title: "LinkedIn",
    value: "Indrajeet Khatarkar",
    description: "Let's connect professionally",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/indrajeet-khatarkar",
    color: "text-blue-400",
    glow: "bg-blue-400/10",
  },
  {
    title: "GitHub",
    value: "indrajeetkhatarkar",
    description: "Explore my projects",
    icon: FaGithub,
    href: "https://github.com/indrajeetkhatarkar",
    color: "text-purple-400",
    glow: "bg-purple-400/10",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[130px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Have an opportunity, project, or simply want to connect?
            I&apos;d be happy to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Email" ? undefined : "_blank"}
                rel={item.title === "Email" ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >

                {/* Card Glow */}
                <div
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${item.glow} blur-3xl transition-all duration-500 group-hover:scale-150`}
                />

                <div className="relative">

                  {/* Icon */}
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${item.color} text-xl transition duration-300 group-hover:scale-110`}
                  >
                    <Icon />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 truncate text-sm font-medium text-gray-300">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gray-400 transition group-hover:text-cyan-400">
                    Connect
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                </div>
              </motion.a>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.035] px-7 py-6 backdrop-blur-xl md:flex-row"
        >

          <div>
            <h3 className="text-lg font-bold">
              Open to new opportunities
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Software Engineering • DevOps • Cloud • Automation Testing
            </p>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=indrajeetkhatarkar5@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
          >
            <FaEnvelope />
            Email Me
          </a>

        </motion.div>

      </div>
    </section>
  );
}