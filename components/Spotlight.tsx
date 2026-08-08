"use client";

import { motion } from "framer-motion";

export default function Spotlight() {
  return (
    <>
      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [-60, 60, -60],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-1/4 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [120, -120, 120],
          y: [60, -60, 60],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute right-1/4 bottom-10 h-[420px] w-[420px] rounded-full bg-purple-500/15 blur-[140px]"
      />
    </>
  );
}