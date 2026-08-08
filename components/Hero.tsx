"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiJenkins,
  SiSelenium,
  SiNextdotjs,
  SiMysql,
  SiKubernetes,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { icon: <FaJava />, name: "Java" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <SiJenkins />, name: "Jenkins" },
  { icon: <SiSelenium />, name: "Selenium" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white"
    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute -right-40 top-20 h-[650px] w-[650px] rounded-full bg-purple-600/10 blur-[170px]" />

        <div className="absolute bottom-[-250px] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />
      </div>

      {/* GRID */}

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 pb-16 pt-32 lg:flex-row lg:justify-between lg:gap-10">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          {/* AVAILABLE */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-5 py-2.5 text-sm text-emerald-300 backdrop-blur-xl"
          >
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />

            Available for Full-Time Opportunities
          </motion.div>

          {/* HELLO */}

          <p className="text-lg text-gray-300">
            Hello, I'm
          </p>

          {/* NAME */}

          <h1 className="mt-3 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            <span className="block text-white">
              Indrajeet
            </span>

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Khatarkar
            </span>
          </h1>

          {/* TYPING */}

          <div className="mt-7 min-h-[58px] text-3xl font-bold text-cyan-300 md:text-5xl">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1800,
                "AWS Cloud Engineer",
                1800,
                "DevOps Engineer",
                1800,
                "Automation Test Engineer",
                1800,
              ]}
              speed={55}
              repeat={Infinity}
            />
          </div>

          {/* DESCRIPTION */}

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
            Passionate Software Engineer with hands-on experience in Java,
            AWS Cloud, DevOps, Automation Testing, Docker, Jenkins, Git and
            modern web development.
          </p>

          {/* SKILLS */}

          <div className="mt-8 flex max-w-2xl flex-wrap gap-2.5">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-gray-200 backdrop-blur-xl"
              >
                <span className="text-cyan-400">
                  {skill.icon}
                </span>

                {skill.name}
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-7 py-4 font-bold text-black shadow-[0_0_30px_rgba(34,211,238,.18)]"
            >
              <FaDownload />

              Download Resume
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="rounded-2xl border border-cyan-400/60 bg-cyan-400/5 px-7 py-4 font-bold text-white transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="relative flex w-full max-w-[560px] items-center justify-center"
        >
          {/* IMAGE GLOW */}

          <div className="absolute h-[360px] w-[360px] rounded-full bg-cyan-500/15 blur-[110px] md:h-[480px] md:w-[480px]" />

          {/* ORBIT SYSTEM */}

          <div className="relative flex h-[430px] w-[430px] items-center justify-center md:h-[540px] md:w-[540px]">

            {/* OUTER RINGS */}

            <div className="absolute inset-3 rounded-full border border-blue-400/20" />

            <div className="absolute inset-8 rounded-full border border-cyan-400/20" />

            {/* ROTATING CYAN RING */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-5 rounded-full border border-cyan-400/50 border-b-transparent border-l-transparent shadow-[0_0_25px_rgba(34,211,238,.25)]"
            />

            {/* ROTATING PURPLE RING */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-12 rounded-full border border-purple-500/50 border-r-transparent border-t-transparent shadow-[0_0_25px_rgba(168,85,247,.2)]"
            />

            {/* ORBIT DOTS */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,1)]" />

              <span className="absolute bottom-[13%] right-[8%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,1)]" />

              <span className="absolute bottom-[16%] left-[7%] h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(168,85,247,1)]" />
            </motion.div>

            {/* ELLIPTICAL ORBIT */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[180px] rounded-full border border-blue-400/20 md:h-[500px] md:w-[230px]"
            />

            {/* PROFILE IMAGE */}

            <div className="relative z-10 flex h-[350px] w-[350px] items-end justify-center md:h-[430px] md:w-[430px]">

              <div className="absolute bottom-10 h-[300px] w-[280px] rounded-full bg-cyan-400/10 blur-[70px]" />

              <Image
                src="/profile.png"
                width={430}
                height={430}
                alt="Indrajeet Khatarkar"
                priority
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_35px_rgba(34,211,238,.12)]"
              />
            </div>
          </div>

          {/* EXPERIENCE CARD */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-20 rounded-2xl border border-cyan-400/20 bg-[#07111f]/90 px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-xl"
          >
            <p className="text-xs text-gray-400">
              Experience
            </p>

            <h3 className="mt-1 font-bold text-cyan-300">
              DevOps • AWS
            </h3>
          </motion.div>

          {/* FOCUS CARD */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-16 right-0 rounded-2xl border border-purple-400/20 bg-[#0b0a1d]/90 px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-xl"
          >
            <p className="text-xs text-gray-400">
              Focus
            </p>

            <h3 className="mt-1 font-bold text-purple-400">
              Cloud • Automation
            </h3>
          </motion.div>

          {/* SOCIAL ICONS */}

          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-4">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/indrajeetkhatarkar",
              },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/in/indrajeet-khatarkar",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:indrajeetkhatarkar5@gmail.com",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.12,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-gray-300 backdrop-blur-xl transition hover:border-cyan-400/50 hover:text-cyan-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}