"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCloud,
  FaBug,
  FaServer,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white"
    >

      {/* Glow */}
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

            About{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>

          </h2>


          <p className="mt-5 text-lg text-gray-400">
            Software Engineer focused on Automation Testing,
            DevOps practices, AWS Cloud and building reliable software solutions.
          </p>

        </motion.div>





        <div className="mt-16 grid gap-10 md:grid-cols-2">



          {/* About Content */}


          <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >


            <h3 className="text-2xl font-bold text-cyan-400">
              👨‍💻 Who I Am
            </h3>


            <p className="mt-5 leading-8 text-gray-300">

              I am an MCA graduate aspiring to build my career as a
              Software Engineer. I have hands-on experience in
              Automation Testing, Java, SQL, AWS Cloud and DevOps tools.

            </p>


            <p className="mt-4 leading-8 text-gray-300">

              During my Software Testing training, I worked with Selenium
              WebDriver, TestNG, Maven, Manual Testing and created automated
              test workflows. I am continuously improving my skills in
              CI/CD, Cloud deployment and modern software development practices.

            </p>


          </motion.div>






          {/* Skills Cards */}


          <div className="grid gap-5">



            <motion.div
              whileHover={{scale:1.05}}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl"
            >

              <FaGraduationCap className="text-3xl text-cyan-400"/>

              <h3 className="mt-3 text-2xl font-bold">
                MCA Graduate
              </h3>

              <p className="text-gray-400">
                Computer Applications
              </p>

            </motion.div>





            <motion.div
              whileHover={{scale:1.05}}
              className="rounded-2xl border border-purple-400/20 bg-white/5 p-6 backdrop-blur-xl"
            >

              <FaBug className="text-3xl text-purple-400"/>

              <h3 className="mt-3 text-2xl font-bold">
                Automation Testing
              </h3>

              <p className="text-gray-400">
                Selenium • TestNG • Maven • Manual Testing
              </p>

            </motion.div>





            <motion.div
              whileHover={{scale:1.05}}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl"
            >

              <FaCloud className="text-3xl text-cyan-400"/>

              <h3 className="mt-3 text-2xl font-bold">
                AWS Cloud
              </h3>

              <p className="text-gray-400">
                EC2 • S3 • IAM • Cloud Deployment
              </p>

            </motion.div>





            <motion.div
              whileHover={{scale:1.05}}
              className="rounded-2xl border border-purple-400/20 bg-white/5 p-6 backdrop-blur-xl"
            >

              <FaServer className="text-3xl text-purple-400"/>

              <h3 className="mt-3 text-2xl font-bold">
                DevOps Practices
              </h3>

              <p className="text-gray-400">
                Git • Jenkins • Docker • Linux • CI/CD
              </p>

            </motion.div>



          </div>


        </div>


      </div>

    </section>
  );
}