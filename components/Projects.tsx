"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Java Application DevOps Deployment",
    description:
      "Implemented DevOps workflow for a Java application using Git, Maven, Jenkins and Docker. Practiced CI/CD pipeline concepts, application build automation and deployment on AWS cloud environment.",
    tech: [
      "Java",
      "Maven",
      "Jenkins",
      "Docker",
      "AWS EC2",
      "Linux",
    ],
    icon: "🚀",
    github: "https://github.com/indrajeetkhatarkar",
    demo: "#",
  },

  {
    title: "Timesheet Management Testing Project",
    description:
      "Performed manual and automation testing on a web-based timesheet application. Created test cases, executed functional and regression testing and automated critical scenarios using Selenium WebDriver.",
    tech: [
      "Selenium",
      "Java",
      "TestNG",
      "Maven",
      "SQL",
      "Manual Testing",
    ],
    icon: "🧪",
    github: "https://github.com/indrajeetkhatarkar",
    demo: "#",
  },

  {
    title: "MERN Book Store Application",
    description:
      "Developed a full-stack book store application while learning MERN stack development. Worked with frontend, backend APIs, database integration and version control using Git.",
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "Git",
    ],
    icon: "📚",
    github: "https://github.com/indrajeetkhatarkar",
    demo: "#",
  },
];


export default function Projects() {

  return (

    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white"
    >

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />


      <div className="relative z-10 mx-auto max-w-6xl">


        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="text-center"
        >

          <h2 className="text-4xl font-black md:text-5xl">

            Featured{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>


          <p className="mt-5 text-gray-400">
            Projects demonstrating software development,
            automation testing and DevOps practices.
          </p>


        </motion.div>



        <div className="mt-16 grid gap-8 md:grid-cols-3">


          {projects.map((project,index)=>(

            <motion.div

              key={project.title}

              initial={{opacity:0,y:50}}

              whileInView={{opacity:1,y:0}}

              transition={{
                duration:0.5,
                delay:index*0.15
              }}

              viewport={{once:true}}

              whileHover={{y:-10}}

              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

            >

              <div className="text-5xl">
                {project.icon}
              </div>


              <h3 className="mt-6 text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>


              <p className="mt-4 leading-7 text-gray-300">
                {project.description}
              </p>



              <div className="mt-6 flex flex-wrap gap-2">

                {project.tech.map((item)=>(

                  <span
                    key={item}
                    className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
                  >
                    {item}
                  </span>

                ))}

              </div>



              <div className="mt-8 flex gap-4">


                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border border-cyan-400 px-4 py-2 text-sm transition hover:bg-cyan-400 hover:text-black"
                >

                  <FaGithub />
                  GitHub

                </a>



                <a
                  href={project.demo}
                  className="flex items-center gap-2 rounded-xl border border-purple-400 px-4 py-2 text-sm transition hover:bg-purple-400 hover:text-black"
                >

                  <FaExternalLinkAlt />
                  Demo

                </a>


              </div>


            </motion.div>

          ))}


        </div>


      </div>

    </section>

  );
}