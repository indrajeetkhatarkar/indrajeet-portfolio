"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712] px-6 py-10 text-white">

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* TOP ROW */}

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* BRAND */}

          <motion.a
            href="#home"
            whileHover={{ y: -3, scale: 1.03 }}
            className="flex items-center gap-4"
          >

            <div className="relative flex h-16 w-16 items-center justify-center">

              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />

              <Image
                src="/logo.png"
                alt="IK Logo"
                width={100}
                height={100}
                className="relative h-80 w-80 object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.55)]"
              />

            </div>

            <div>
              <h2 className="text-xl font-bold tracking-wide">
                Indrajeet Khatarkar
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Software Engineer
              </p>
            </div>

          </motion.a>



          {/* NAVIGATION */}

          <nav className="flex flex-wrap items-center gap-6 text-sm text-gray-400">

            <a
              href="#home"
              className="transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>

          </nav>



          {/* SOCIAL */}

          <div className="flex items-center gap-3">

            <motion.a
              href="mailto:indrajeetkhatarkar5@gmail.com"
              aria-label="Email"
              whileHover={{ y: -4, scale: 1.08 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
            >
              <FaEnvelope />
            </motion.a>


            <motion.a
              href="https://github.com/indrajeetkhatarkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -4, scale: 1.08 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
            >
              <FaGithub />
            </motion.a>


            <motion.a
              href="https://linkedin.com/in/indrajeet-khatarkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -4, scale: 1.08 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-purple-400/50 hover:text-purple-400"
            >
              <FaLinkedin />
            </motion.a>

          </div>

        </div>



        {/* DIVIDER */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />



        {/* BOTTOM ROW */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">

          <p className="text-gray-500">
            © 2024 Indrajeet Khatarkar. All rights reserved.
          </p>


          <p className="text-gray-500">
            Building solutions with technology & creativity.
          </p>


          <motion.a
            href="#home"
            aria-label="Back to top"
            whileHover={{ y: -4, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
          >
            <FaArrowUp />
          </motion.a>

        </div>

      </div>

    </footer>
  );
}