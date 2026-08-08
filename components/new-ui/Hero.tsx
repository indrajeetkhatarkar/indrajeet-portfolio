"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

const floatingIcons = [
  { Icon: FaAws, x: "-170px", y: "-170px" },
  { Icon: SiDocker, x: "170px", y: "-120px" },
  { Icon: SiJenkins, x: "-180px", y: "120px" },
  { Icon: SiKubernetes, x: "170px", y: "150px" },
  { Icon: SiReact, x: "0px", y: "-220px" },
  { Icon: SiNextdotjs, x: "0px", y: "220px" },
  { Icon: SiMysql, x: "-240px", y: "-20px" },
  { Icon: SiMongodb, x: "240px", y: "20px" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#030712] text-white"
    >
      {/* Aurora */}
      <div className="absolute inset-0">
        <div className="absolute -left-52 top-0 h-[650px] w-[650px] rounded-full bg-cyan-500/20 blur-[170px]" />
        <div className="absolute right-[-250px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-violet-600/20 blur-[180px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-20 px-6 py-28 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="max-w-2xl"
        >

          <div className="mb-7 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            🚀 Available For Software Engineer Roles
          </div>

          <h1 className="text-6xl font-black leading-none md:text-8xl">
            Indrajeet
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              Khatarkar
            </span>
          </h1>

          <div className="mt-8 text-3xl font-bold text-cyan-300 md:text-5xl">

            <TypeAnimation
              sequence={[
                "Software Engineer",
                1800,
                "DevOps Engineer",
                1800,
                "AWS Cloud Engineer",
                1800,
                "Automation Test Engineer",
                1800,
              ]}
              repeat={Infinity}
              speed={45}
            />

          </div>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">
            Building modern software with Java, AWS, Docker,
            Kubernetes, Automation Testing and scalable cloud
            solutions.
          </p>

                    {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: .95 }}
              href="/resume.pdf"
              download
              className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-5 font-bold text-black shadow-[0_0_50px_rgba(34,211,238,.35)]"
            >
              <FaDownload />

              Download Resume

              <FaArrowRight className="transition group-hover:translate-x-1" />

            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="rounded-2xl border border-cyan-400/40 bg-white/5 px-8 py-5 font-bold backdrop-blur-xl transition hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </motion.a>

          </div>

          {/* Social */}

          <div className="mt-10 flex gap-5">

            <a
              href="https://github.com/indrajeetkhatarkar"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/indrajeet-khatarkar"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:indrajeetkhatarkar5@gmail.com"
              className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="relative flex h-[650px] w-[650px] items-center justify-center"
        >

                  {/* Rotating Rings */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[560px] w-[560px] rounded-full border border-cyan-400/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[470px] w-[470px] rounded-full border border-violet-400/20"
          />

          {/* Glow */}

          <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />

          {/* Floating Tech Icons */}

          {floatingIcons.map(({ Icon, x, y }, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -18, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
              }}
              className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-cyan-300 backdrop-blur-xl"
              style={{
                transform: `translate(${x},${y})`,
              }}
            >
              <Icon />
            </motion.div>
          ))}

          {/* Profile */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="relative rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 p-[6px] shadow-[0_0_80px_rgba(34,211,238,.45)]"
          >
            <div className="rounded-full bg-[#07111f] p-5">

              <Image
                src="/profile.png"
                alt="Indrajeet"
                width={420}
                height={420}
                priority
                className="rounded-full object-cover"
              />

            </div>
          </motion.div>

                    {/* Floating Cards */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-0 top-24 rounded-2xl border border-cyan-400/20 bg-black/40 px-6 py-4 backdrop-blur-xl"
          >
            <p className="text-sm text-slate-400">Experience</p>
            <h3 className="mt-1 text-lg font-bold text-cyan-400">
              DevOps • Automation
            </h3>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute right-0 bottom-24 rounded-2xl border border-violet-400/20 bg-black/40 px-6 py-4 backdrop-blur-xl"
          >
            <p className="text-sm text-slate-400">Tech Stack</p>
            <h3 className="mt-1 text-lg font-bold text-violet-400">
              AWS • Docker • Kubernetes
            </h3>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-xl"
          >
            🟢 Open to Work
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}