import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="flex items-start justify-center px-4 py-16 md:min-h-screen md:items-center md:py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent md:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-6 text-gray-400 md:text-base">
            Have a role, project, or technical discussion in mind? Send a
            message and I will get back to you.
          </p>

          <div className="contact-panel grid overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]/85 shadow-xl backdrop-blur-md lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Contact Details
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Let&apos;s build something reliable.
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                I am open to full-stack developer roles and production-focused
                web application work.
              </p>

              <div className="mt-6 space-y-3">
                <a href="mailto:mahbubulhoqueshourov@gmail.com" className="contact-info-link">
                  <HiMail size={20} />
                  <span>mahbubulhoqueshourov@gmail.com</span>
                </a>
                <a href="tel:+8801521528480" className="contact-info-link">
                  <FaPhone size={18} />
                  <span>+8801521528480</span>
                </a>
                <div className="contact-info-link">
                  <FaLocationDot size={18} />
                  <span>Chattogram, Bangladesh</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Shourov98/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mahbubul-hoque-shourov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            <form
              className="w-full space-y-5 p-5 sm:p-6 lg:p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition placeholder:text-gray-500 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                    placeholder="Name..."
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition placeholder:text-gray-500 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                    placeholder="example@gmail.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  value={formData.message}
                  className="w-full resize-none rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition placeholder:text-gray-500 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                  placeholder="Your Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="relative w-full overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
