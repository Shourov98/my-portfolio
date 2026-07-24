import { useEffect } from "react";

export const Navbar = ({ activeSection, menuOpen, setMenuOpen }) => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#problem-solving", label: "Problem Solving" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="nav-brand font-mono text-xl font-bold text-white">
            Portfolio<span className="text-blue-500">.shourov</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.slice(1) ? "nav-link-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
