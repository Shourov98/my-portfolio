import { RevealOnScroll } from "../RevealOnScroll";
import { FaFacebook, FaLinkedin, FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Mahbubul Hoque Shourov
          </h1>

          {/* Summary */}
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            A recent graduate in Mechatronics & Industrial Engineering from CUET, transitioning into full-stack development. Proficient in JavaScript, React, and problem-solving with a strong foundation in data structures and algorithms. Passionate about building clean, scalable, and user-friendly web applications.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 mb-10">
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