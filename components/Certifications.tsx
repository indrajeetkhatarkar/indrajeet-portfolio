"use client";

import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Coursera Certificate",
    org: "Coursera",
    link: "https://coursera.org/share/be5d097b61eb61670a2119802f7cad1b",
  },
  {
    title: "Udacity Certificate",
    org: "Udacity",
    link: "https://www.udacity.com/certificate/e/f4658462-851e-11f1-90ba-4ba619845aab",
  },
  {
    title: "Credly Badge",
    org: "Credly",
    link: "https://www.credly.com/badges/5aa78748-a885-4fb6-a591-adfab39d16bc/linked_in_profile",
  },
  {
    title: "Deloitte Technology Job Simulation",
    org: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_s3ZwZipFtQu8ik8FN_1736956111705_completion_certificate.pdf",
  },
  {
    title: "Java (Basic)",
    org: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/96c8c4f9c8fb",
  },
  {
    title: "AWS APAC Virtual Experience",
    org: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_s3ZwZipFtQu8ik8FN_1728419063935_completion_certificate.pdf",
  },
  {
    title: "Master in Artificial Intelligence",
    org: "Udemy",
    link: "https://www.udemy.com/certificate/UC-db7d40b2-112d-49de-866c-f0356284cf46/",
  },
  {
    title: "Java Programming",
    org: "Great Learning",
    link: "https://www.mygreatlearning.com/certificate/RRQJDFAP?referrer_code=GL6O5Z8SRLVAW",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white"
    >
      <div className="absolute left-0 top-16 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-80" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
            Verified credentials
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            My
            <span className="ml-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            A collection of verified certifications, badges and industry credentials that reflect real skills and hands-on completion.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-40px_rgba(31,41,55,0.8)] backdrop-blur-xl transition-transform duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 shadow-inner shadow-cyan-400/10 transition group-hover:bg-cyan-400/20">
                <FaCertificate className="text-3xl" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">{c.title}</h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan-300/80">{c.org}</p>

              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/40 bg-slate-950/70 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                <FaExternalLinkAlt />
                View Credential
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}