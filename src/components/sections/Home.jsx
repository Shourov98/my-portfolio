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
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-24 sm:px-6"
    >
      <RevealOnScroll>
        <div className="z-10 mx-auto w-full max-w-5xl text-center">
          {/* Heading */}
          <h1 className="animated-name mx-auto mb-6 max-w-4xl break-words bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-500 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-7xl">
            Hi, I&apos;m Mahbubul Hoque Shourov
          </h1>

          {/* Summary */}
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Junior Full Stack Developer at SparkTech Agency building production SaaS applications with Next.js, React, TypeScript, Node.js, Express, FastAPI, MongoDB, and LLM APIs. I work across secure authentication, RBAC dashboards, API integrations, Stripe billing, CI/CD, and deployment on cloud/VPS infrastructure.
          </p>

          {/* Buttons */}
          <div className="mx-auto mb-10 flex w-full max-w-xs flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="relative inline-flex w-full justify-center overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] sm:w-auto"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex w-full justify-center rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] sm:w-auto"
            >
              Contact Me
            </a>
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded border border-cyan-400/50 px-6 py-3 font-medium text-cyan-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] sm:w-auto"
            >
              <FaEye size={16} />
              View Resume
            </a>
            <a
              href={resumePath}
              download="Mahbubul-Hoque-Shourov-Resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded border border-white/20 px-6 py-3 font-medium text-gray-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-white/5 sm:w-auto"
            >
              <FaDownload size={16} />
              Download Resume
            </a>
          </div>

          <div className="hero-snapshot mx-auto mb-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0d1117]/80 p-4 shadow-xl backdrop-blur-md md:p-5">
            <div className="grid gap-4 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div className="text-center md:text-left">
                <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
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

              <div className="mx-auto grid w-full max-w-sm grid-cols-2 gap-2 sm:max-w-none sm:grid-cols-4 md:grid-cols-2">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-action flex min-h-20 flex-col items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-200 sm:min-h-24"
                >
                  <FaEye size={20} />
                  <span className="mt-2 text-xs font-medium">View CV</span>
                </a>
                <a
                  href={resumePath}
                  download="Mahbubul-Hoque-Shourov-Resume.pdf"
                  className="quick-action flex min-h-20 flex-col items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-200 sm:min-h-24"
                >
                  <FaDownload size={20} />
                  <span className="mt-2 text-xs font-medium">Download</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="quick-action flex min-h-20 flex-col items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-200 sm:min-h-24"
                >
                  {copiedEmail ? <FaCheckCircle size={20} /> : <FaCopy size={20} />}
                  <span className="mt-2 text-xs font-medium">
                    {copiedEmail ? "Copied" : "Email"}
                  </span>
                </button>
                <a
                  href="#experience"
                  className="quick-action flex min-h-20 flex-col items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-200 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-200 sm:min-h-24"
                >
                  <FaBriefcase size={20} />
                  <span className="mt-2 text-xs font-medium">Work</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mb-8 flex flex-wrap justify-center gap-6 md:gap-8">
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
          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-6 md:gap-8 md:text-base">
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
