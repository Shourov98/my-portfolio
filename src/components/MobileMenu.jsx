export const MobileMenu = ({ menuOpen, setMenuOpen, activeSection }) => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#problem-solving", label: "Problem Solving" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {navLinks.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`mobile-nav-link text-2xl font-semibold my-3 transform transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } ${activeSection === link.href.slice(1) ? "mobile-nav-link-active" : ""}`}
          style={{ transitionDelay: menuOpen ? `${index * 45}ms` : "0ms" }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
