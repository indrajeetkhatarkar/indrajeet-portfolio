import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Global Background Glow */}
      <div className="pointer-events-none fixed -left-40 -top-40 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="pointer-events-none fixed -bottom-40 -right-40 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]" />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Contact />

      <Footer />

    </main>
  );
}