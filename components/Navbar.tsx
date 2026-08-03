"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

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
    <header className="fixed left-0 top-5 z-50 w-full px-6">

      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-2xl backdrop-blur-xl">


        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-black tracking-wide"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            IK
          </span>
          <span className="text-white">.</span>
        </a>



        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">

          {menu.map((item)=>(
            <li key={item.name}>
              <a
                href={item.link}
                className="transition hover:text-cyan-400"
              >
                {item.name}
              </a>
            </li>
          ))}

        </ul>




        {/* Right Side Desktop */}

        <div className="hidden items-center gap-4 md:flex">

          <a
            href="https://github.com/indrajeetkhatarkar"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-gray-300 transition hover:scale-125 hover:text-cyan-400"
          >
            <FaGithub />
          </a>


          <a
            href="https://linkedin.com/in/indrajeet-khatarkar"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-gray-300 transition hover:scale-125 hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>


          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-bold text-black transition hover:scale-105"
          >
            Resume
          </a>

        </div>




        {/* Mobile Button */}

        <button
          onClick={()=>setOpen(!open)}
          className="text-2xl text-cyan-400 md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>



      </nav>




      {/* Mobile Menu */}

      {open && (

        <div className="mx-6 mt-3 rounded-2xl border border-white/10 bg-[#050816]/95 p-6 backdrop-blur-xl md:hidden">

          <ul className="flex flex-col gap-5 text-center text-gray-300">

            {menu.map((item)=>(

              <li key={item.name}>

                <a
                  href={item.link}
                  onClick={()=>setOpen(false)}
                  className="transition hover:text-cyan-400"
                >
                  {item.name}
                </a>

              </li>

            ))}


            <li>

              <a
                href="/resume.pdf"
                download
                className="inline-block rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 font-bold text-black"
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