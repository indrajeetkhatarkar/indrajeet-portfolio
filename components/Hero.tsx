"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] pt-24 text-white"
    >

      {/* Background Effects */}
      <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[160px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />


      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 lg:flex-row">


        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-5 py-2 text-sm text-green-300">
            🟢 Available for Work
          </div>


          <p className="text-xl text-gray-300">
            Hello, I'm
          </p>


          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">

            Indrajeet

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Khatarkar
            </span>

          </h1>


          <div className="mt-6 text-2xl font-bold text-cyan-300 md:text-4xl">

            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "DevOps Engineer",
                2000,
                "Automation Test Engineer",
                2000,
                "AWS Cloud Engineer",
                2000,
                "QA Engineer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>


          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            MCA graduate skilled in Software Engineering, DevOps practices,
            AWS Cloud, Automation Testing and building reliable software
            solutions using modern development tools.
          </p>



          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              <FaDownload />
              Download Resume
            </a>


            <a
              href="#contact"
              className="rounded-xl border border-cyan-400 px-8 py-4 font-bold transition hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </a>

          </div>



          {/* Social */}

          <div className="mt-10 flex gap-6 text-3xl">

            <a
              href="https://github.com/indrajeetkhatarkar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="cursor-pointer transition hover:scale-125 hover:text-cyan-400" />
            </a>


            <a
              href="https://linkedin.com/in/indrajeet-khatarkar"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="cursor-pointer transition hover:scale-125 hover:text-cyan-400" />
            </a>


            <a href="mailto:indrajeetkhatarkar5@gmail.com">
              <FaEnvelope className="cursor-pointer transition hover:scale-125 hover:text-cyan-400" />
            </a>

          </div>


        </motion.div>



        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[520px] w-[520px] rounded-full border border-cyan-400/30"
          />


          <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[100px]" />


          <div className="relative rounded-full border border-white/20 bg-white/5 p-4 backdrop-blur-xl">

            <Image
              src="/profile.png"
              alt="Indrajeet Khatarkar"
              width={500}
              height={500}
              priority
              className="rounded-full object-cover"
            />

          </div>



          <motion.div
            animate={{ y:[0,-10,0] }}
            transition={{
              duration:3,
              repeat:Infinity
            }}
            className="absolute -left-20 top-20 rounded-2xl border border-cyan-400/30 bg-black/50 p-5 backdrop-blur-xl"
          >

            <p className="text-sm text-gray-400">
              Experience
            </p>

            <h3 className="font-bold text-cyan-400">
              DevOps & Automation
            </h3>

          </motion.div>



          <motion.div
            animate={{ y:[0,10,0] }}
            transition={{
              duration:3,
              repeat:Infinity
            }}
            className="absolute -right-20 bottom-20 rounded-2xl border border-purple-400/30 bg-black/50 p-5 backdrop-blur-xl"
          >

            <p className="text-sm text-gray-400">
              Skills
            </p>

            <h3 className="font-bold text-purple-400">
              AWS • Jenkins • Selenium
            </h3>

          </motion.div>


        </motion.div>


      </div>

    </section>
  );
}