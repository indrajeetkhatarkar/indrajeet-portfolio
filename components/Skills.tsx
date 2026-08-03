"use client";

import { motion } from "framer-motion";
import {
  FaJava,
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSelenium,
  SiJenkins,
  SiKubernetes,
  SiMysql,
  SiMaven,
  SiSonarqube,
} from "react-icons/si";


const skills = [
  {
    title: "Programming",
    icon: <FaJava />,
    color: "text-orange-400",
    items: [
      "Core Java",
      "Python Basics",
      "JavaScript",
      "REST APIs",
    ],
  },

  {
    title: "Automation Testing",
    icon: <SiSelenium />,
    color: "text-green-400",
    items: [
      "Selenium WebDriver",
      "TestNG",
      "Playwright",
      "Page Object Model",
      "Postman",
    ],
  },

  {
    title: "DevOps & CI/CD",
    icon: <SiJenkins />,
    color: "text-red-400",
    items: [
      "Git",
      "GitHub",
      "Jenkins",
      "Maven",
      "Docker",
      "Kubernetes",
      "SonarQube",
    ],
  },


  {
    title: "Cloud & Infrastructure",
    icon: <FaAws />,
    color: "text-yellow-400",
    items: [
      "AWS EC2",
      "S3",
      "IAM",
      "VPC",
      "RDS",
      "CloudWatch",
      "Linux",
    ],
  },


  {
    title: "Database",
    icon: <SiMysql />,
    color: "text-blue-400",
    items: [
      "SQL",
      "MySQL",
      "Joins",
      "Subqueries",
      "Aggregations",
    ],
  },


  {
    title: "Operating Systems",
    icon: <FaLinux />,
    color: "text-purple-400",
    items: [
      "Ubuntu",
      "Amazon Linux",
      "Windows",
      "Bash Shell Scripting",
    ],
  },

];


export default function Skills() {

  return (

    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white"
    >


      {/* Glow */}

      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />



      <div className="relative z-10 mx-auto max-w-6xl">



        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="text-center"
        >

          <h2 className="text-4xl font-black md:text-5xl">

            Technical{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>

          </h2>


          <p className="mt-5 text-gray-400">
            Tools and technologies I use for software development,
            automation testing and cloud deployment.
          </p>


        </motion.div>





        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {skills.map((skill,index)=>(


            <motion.div

              key={skill.title}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-8
              }}

              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"

            >



              <div className={`text-4xl ${skill.color}`}>

                {skill.icon}

              </div>



              <h3 className="mt-5 text-2xl font-bold">

                {skill.title}

              </h3>




              <div className="mt-5 flex flex-wrap gap-3">


                {skill.items.map((item)=>(


                  <span

                    key={item}

                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-gray-300"

                  >

                    {item}

                  </span>


                ))}


              </div>


            </motion.div>


          ))}



        </div>


      </div>


    </section>

  );
}