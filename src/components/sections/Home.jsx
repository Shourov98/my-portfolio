import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaBriefcase,
  FaCheckCircle,
  FaCopy,
  FaDownload,
  FaEye,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

export const Home = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "mahbubulhoqueshourov@gmail.com";
  const resumePath = "/resume/mahbubul-hoque-shourov-resume.pdf";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Heading */}
          <h1 className="animated-name text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-500 bg-clip-text text-transparent leading-right">
            Hi, I&apos;m Mahbubul Hoque Shourov
          </h1>

          {/* Summary */}
          <p className="text-gray-400 align-left text-lg mb-8 max-w-lg mx-auto">
            Junior Full Stack Developer at SparkTech Agency building production SaaS applications with Next.js, React, TypeScript, Node.js, Express, FastAPI, MongoDB, and LLM APIs. I work across secure authentication, RBAC dashboards, API integrations, Stripe billing, CI/CD, and deployment on cloud/VPS infrastructure.
          </p>

          {/* Buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cyan-400/50 text-cyan-300 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:bg-cyan-400/10"
            >
              <FaEye size={16} />
              View Resume
            </a>
            <a
              href={resumePath}
              download="Mahbubul-Hoque-Shourov-Resume.pdf"
              className="inline-flex items-center gap-2 border border-white/20 text-gray-200 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-white/5"
            >
              <FaDownload size={16} />
              Download Resume
            </a>
          </div>

          <div className="hero-snapshot mx-auto mb-10 max-w-3xl rounded-2xl border border-white/10 bg-[#0d1117]/80 p-4 shadow-xl backdrop-blur-md md:p-5">
            <div className="grid gap-4 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div className="text-left">
                <div className="mb-3 flex items-center gap-2">
                  <span className="availability-dot h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Available for full-stack roles
                  </span>
                </div>
                <p className="text-sm leading-6 text-gray-300">
                  Production SaaS, AI automation, secure auth, RBAC dashboards,
                  Stripe billing, REST APIs, and cloud/VPS deployment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-action flex min-h-24 flex-col items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-200"
                >
                  <FaEye size={20} />
                  <span className="mt-2 text-xs font-medium">View CV</span>
                </a>
                <a
                  href={resumePath}
                  download="Mahbubul-Hoque-Shourov-Resume.pdf"
                  className="quick-action flex min-h-24 flex-col items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-200"
                >
                  <FaDownload size={20} />
                  <span className="mt-2 text-xs font-medium">Download</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="quick-action flex min-h-24 flex-col items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-200"
                >
                  {copiedEmail ? <FaCheckCircle size={20} /> : <FaCopy size={20} />}
                  <span className="mt-2 text-xs font-medium">
                    {copiedEmail ? "Copied" : "Email"}
                  </span>
                </button>
                <a
                  href="#experience"
                  className="quick-action flex min-h-24 flex-col items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-200"
                >
                  <FaBriefcase size={20} />
                  <span className="mt-2 text-xs font-medium">Work</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 md:space-x-8 mb-8">
            <a
              href="https://facebook.com/your-profile" // Replace with your Facebook profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahbubul-hoque-shourov/" // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Shourov98/" // Replace with your GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://wa.me/8801521528480" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>

          {/* Email and Phone Number */}
          <div className="flex justify-center space-x-6 md:space-x-8 mt-8">
            {/* Phone Number */}
            <div className="flex items-center space-x-2">
              <a
                href="tel:+8801521528480"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaPhone size={24} />
              </a>
              <p className="text-gray-400 hover:text-blue-500 transition-colors">
                <a href="tel:+8801521528480">+8801521528480</a>
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <a
                href="mailto:mahbubulhoqueshourov@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <HiMail size={24} />
              </a>
              <p className="text-gray-400 hover:text-blue-500 transition-colors">
                <a href="mailto:mahbubulhoqueshourov@gmail.com">mahbubulhoqueshourov@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
