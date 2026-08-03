"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white"
    >

      {/* Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />


      <div className="relative z-10 mx-auto max-w-6xl">


        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="text-center"
        >

          <h2 className="text-4xl font-black md:text-5xl">

            Professional{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>

          </h2>


          <p className="mt-5 text-gray-400">
            Practical experience in software testing, automation and software development practices.
          </p>


        </motion.div>




        <div className="relative mt-16">


          <div className="absolute left-4 top-0 hidden h-full w-px bg-cyan-400/30 md:block" />



          <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:ml-12"
          >


            <div className="absolute -left-[44px] top-10 hidden h-5 w-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 md:block" />



            <div className="flex flex-col justify-between gap-5 md:flex-row">


              <div>

                <h3 className="text-3xl font-bold text-cyan-400">
                  Software Testing Trainee
                </h3>


                <p className="mt-2 text-xl text-gray-300">
                  QSpiders Training Institute
                </p>


              </div>



              <div>

                <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-purple-300">
                  Software Testing & Automation
                </span>

              </div>


            </div>





            <div className="mt-8">


              <h4 className="text-xl font-bold text-purple-400">
                Skills & Responsibilities
              </h4>


              <ul className="mt-5 space-y-4 text-gray-300">


                <li>
                  ✔ Created and executed test cases, test scenarios and defect reports.
                </li>


                <li>
                  ✔ Performed Functional, Smoke, Regression and System Testing.
                </li>


                <li>
                  ✔ Automated web application test cases using Selenium WebDriver with Java.
                </li>


                <li>
                  ✔ Worked with TestNG, Maven and Page Object Model (POM) framework concepts.
                </li>


                <li>
                  ✔ Used SQL queries for database validation and testing activities.
                </li>


              </ul>


            </div>



          </motion.div>


        </div>


      </div>


    </section>
  );
}