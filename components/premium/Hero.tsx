"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white"
    >
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-150, 150, -150],
            y: [-80, 80, -80],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-cyan-500/25 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [150, -150, 150],
            y: [80, -80, 80],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 bottom-0 h-[700px] w-[700px] rounded-full bg-purple-600/25 blur-[180px]"
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="text-6xl font-bold">Premium Hero</h1>
      </div>
    </section>
  );
}