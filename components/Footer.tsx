"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-8 text-white">

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">


        {/* Logo */}

        <div className="text-2xl font-black">

          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            IK
          </span>

          <span>
            .
          </span>

        </div>



        {/* Copyright */}

        <p className="text-center text-sm text-gray-400">

          © {new Date().getFullYear()} Indrajeet Khatarkar.
          All rights reserved.

        </p>




        {/* Social */}

        <div className="flex gap-5 text-xl">


          <a
            href="https://github.com/indrajeetkhatarkar"
            target="_blank"
            className="text-gray-400 transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>



          <a
            href="https://linkedin.com/in/indrajeet-khatarkar"
            target="_blank"
            className="text-gray-400 transition hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>


        </div>


      </div>

    </footer>
  );
}