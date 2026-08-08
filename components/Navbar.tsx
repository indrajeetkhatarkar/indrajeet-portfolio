"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-4 z-50 w-full px-4 md:px-6">

      <nav className="mx-auto flex h-[58px] max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#070b16]/80 px-4 shadow-2xl backdrop-blur-xl">

        {/* LOGO */}
        <a
          href="#home"
          className="relative flex h-9 w-12 shrink-0 items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt="IK Logo"
            width={70}
            height={70}
            priority
            className="h-9 w-9 scale-[2.4] object-contain drop-shadow-[0_0_22px_rgba(0,180,255,0.7)]"
          />
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden items-center gap-9 text-sm font-medium text-gray-300 md:flex">
          {menu.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="transition-colors duration-300 hover:text-cyan-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP RIGHT */}
        <div className="hidden items-center gap-3 md:flex">

          <a
            href="https://github.com/indrajeetkhatarkar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-gray-300 transition duration-300 hover:scale-110 hover:border-cyan-400/50 hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/indrajeet-khatarkar"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-gray-300 transition duration-300 hover:scale-110 hover:border-cyan-400/50 hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="/resume.pdf"
            download
            className="ml-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(59,130,246,0.25)] transition duration-300 hover:scale-105"
          >
            Resume
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-cyan-400 md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-[#080d1c]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden">

          <ul className="flex flex-col gap-5 text-center text-gray-300">

            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block py-1 transition hover:text-cyan-400"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <a
                href="/resume.pdf"
                download
                className="inline-block rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-7 py-3 font-bold text-black"
              >
                Download Resume
              </a>
            </li>

          </ul>

        </div>
      )}

    </header>
  );
}