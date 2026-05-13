import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiArrowRight,
  FiDownload,
  FiMail,
} from "react-icons/fi";

import portfolio from "./assets/portfolio.jpeg";
import deliveryApp from "./assets/delivery.png";
import packageSystem from "./assets/packages.jfif";
import trackerApp from "./assets/tracking.png";

export default function App() {
  const projects = [
    {
      title: "Delivery Intelligence Platform",
      description:
        "Enterprise-grade real-time tracking ecosystem with live driver sync, optimized delivery orchestration and Firebase architecture.",
      image: deliveryApp,
      tech: ["React Native", "Firebase", "Expo", "Firestore"],
    },
    {
      title: "Logistics Workflow System",
      description:
        "Admin-controlled package lifecycle engine with notifications, task assignment and production-ready state management.",
      image: packageSystem,
      tech: ["Node.js", "FCM", "Redux", "Firebase"],
    },
    {
      title: "Background Tracking Engine",
      description:
        "Persistent GPS tracking architecture using Expo TaskManager with resilient sync and authentication systems.",
      image: trackerApp,
      tech: ["Expo", "TaskManager", "React Navigation"],
    },
  ];

  const skills = [
    "React Native",
    "Expo",
    "Firebase",
    "TypeScript",
    "Node.js",
    "REST APIs",
    "Push Notifications",
    "Google Maps",
    "Redux",
    "Git",
    "Firestore",
    "Mobile Architecture",
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* BACKGROUND LIGHTING */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-300px] left-[-200px] w-[700px] h-[700px] bg-orange-500/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-purple-500/20 blur-[160px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-black tracking-[0.25em] text-orange-400"
          >
            ANUSHA.DEV
          </motion.h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center relative pt-24 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.18),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="uppercase tracking-[0.35em] text-orange-400 text-xs mb-6"
            >
              REACT NATIVE ENGINEER
            </motion.p>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-[-0.04em]">
              Building
              <br />
              <span className="text-white/40">Mobile Systems</span>
              <br />
              That Scale.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-xl">
              I engineer production-grade mobile applications focused on
              real-time infrastructure, tracking systems, Firebase architecture,
              and scalable user experiences.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="group px-7 py-4 bg-orange-500 rounded-2xl text-black font-bold flex items-center gap-2 hover:scale-105 transition"
              >
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition" />
              </a>

              <a
                href="/cv.pdf"
                download
                className="px-7 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition flex items-center gap-2"
              >
                <FiDownload />
                Download CV
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-10 text-2xl text-gray-400">
              <a
                href="https://github.com/AnushaAmin"
                target="_blank"
                className="hover:text-white transition"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/anusha-amin-b59080258"
                target="_blank"
                className="hover:text-white transition"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:anusha.amin03@gmail.com"
                className="hover:text-white transition"
              >
                <FiMail />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2 }}
            className="relative flex justify-center"
          >

            <div className="absolute inset-0 bg-orange-500 blur-[140px] opacity-30 rounded-full" />

            <div className="relative backdrop-blur-2xl border border-white/10 bg-white/5 rounded-[40px] p-5 shadow-2xl">

              <img
                src={portfolio}
                alt=""
                className="w-[380px] h-[480px] object-cover rounded-[30px]"
              />

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-10 -left-10 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-5"
              >
                <h3 className="text-3xl font-black text-orange-400">
                  5+
                </h3>
                <p className="text-gray-400 text-sm">
                  Production Applications
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-4 gap-6">

        {[
          ["Real-Time", "Tracking Systems"],
          ["Firebase", "Architecture"],
          ["Cross Platform", "Mobile Apps"],
          ["Scalable", "Engineering"],
        ].map(([a, b], i) => (
          <motion.div
            whileHover={{ y: -8 }}
            key={i}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-black text-orange-400">
              {a}
            </h2>

            <p className="text-gray-400 mt-2">
              {b}
            </p>
          </motion.div>
        ))}
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-black mb-14">
          Engineering Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {skills.map((skill, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
            >
              <p className="font-semibold">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-28 bg-zinc-950 border-y border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black mb-16">
            Selected Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {projects.map((project, i) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={i}
                className="group bg-black border border-white/10 rounded-[32px] overflow-hidden"
              >

                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-28 text-center"
      >

        <h2 className="text-5xl font-black mb-8">
          Engineering Mindset
        </h2>

        <p className="text-xl text-gray-400 leading-relaxed">
          I focus on building systems that work reliably in production —
          real-time mobile experiences, scalable Firebase architecture,
          background tracking, authentication systems, and smooth UX.
          <br /><br />
          My goal is to combine engineering quality with premium product design.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 border-t border-white/10 text-center"
      >

        <h2 className="text-6xl font-black leading-tight">
          Let’s Build
          <br />
          Something Exceptional.
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          Open for React Native, Firebase and mobile engineering opportunities.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <a
            href="mailto:anusha.amin03@gmail.com"
            className="px-8 py-4 bg-orange-500 rounded-2xl text-black font-bold hover:scale-105 transition"
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/anusha-amin-b59080258"
            target="_blank"
            className="px-8 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition"
          >
            LinkedIn
          </a>

        </div>
      </section>

    </div>
  );
}