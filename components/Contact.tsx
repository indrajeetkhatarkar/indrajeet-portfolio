"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      description: "indrajeetkhatarkar5@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:indrajeetkhatarkar5@gmail.com",
      color: "text-cyan-400",
    },
    {
      title: "LinkedIn",
      description: "Connect professionally",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/indrajeet-khatarkar",
      color: "text-blue-400",
    },
    {
      title: "GitHub",
      description: "View my projects",
      icon: <FaGithub />,
      link: "https://github.com/indrajeetkhatarkar",
      color: "text-purple-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white"
    >

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />


      <div className="relative z-10 mx-auto max-w-6xl">


        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="text-center"
        >

          <h2 className="text-4xl font-black md:text-5xl">

            Let's{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>

          </h2>


          <p className="mt-5 text-gray-400">
            Open to Software Engineering, DevOps and Automation Testing opportunities.
          </p>


        </motion.div>



        <div className="mt-14 grid gap-8 md:grid-cols-3">


          {contacts.map((item,index)=>(

            <motion.a

              key={item.title}

              href={item.link}

              target="_blank"

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index*0.15
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-10
              }}

              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"

            >

              <div className={`mx-auto text-5xl ${item.color}`}>
                {item.icon}
              </div>


              <h3 className="mt-5 text-2xl font-bold">
                {item.title}
              </h3>


              <p className="mt-3 text-sm text-gray-400">
                {item.description}
              </p>


            </motion.a>

          ))}


        </div>


      </div>


    </section>
  );
}