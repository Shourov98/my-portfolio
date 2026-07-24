import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

// Array of project objects
const projectsData = [
  {
    title: "AI Marketplace Product Generator (CommandCtr)",
    description:
      "AI agent for generating marketplace-ready product listings with SEO-friendly titles, descriptions, specifications, pricing suggestions, and listing images.",
    badges: ["AI", "FastAPI", "Production"],
    technologies: ["Python", "FastAPI", "OpenAI API", "Next.js", "Node.js"],
    highlights: [
      "Built REST APIs for AI services using FastAPI.",
      "Customized outputs for Amazon, eBay, Etsy, TikTok Shop, and Shopify.",
      "Integrated frontend dashboards for managing AI-generated content.",
    ],
  },
  {
    title: "BeforeListed - Apartment Rental Platform",
    description:
      "Full-stack apartment rental platform with referral signup, RBAC dashboards, JWT authentication, Stripe transactions, and admin approval workflows.",
    badges: ["SaaS", "RBAC", "Stripe"],
    technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Hetzner VPS"],
    highlights: [
      "Built scalable frontend state flows with Redux Toolkit, OTP validation, reusable UI components, and real-time toast notifications.",
      "Designed REST APIs with secure authentication, PIN salting encryption, and user/admin management workflows.",
      "Deployed the platform on Hetzner VPS.",
    ],
  },
  {
    title: "Chatty - Real time Chatting App (MERN Stack)",
    description:
      "Modern real-time chat platform with authentication, profile management, responsive UI, online user status, and live message delivery.",
    badges: ["Real-time", "MERN", "Socket.io"],
    technologies: ["React 18", "Vite", "Zustand", "Tailwind CSS", "DaisyUI", "Express.js", "MongoDB", "Socket.io", "JWT"],
    images: ["/chatty/ss-1.png", "/chatty/ss-2.png", "/chatty/ss-3.png", "/chatty/ss-4.png"],
    highlights: [
      "Implemented RESTful backend APIs with JWT authentication and real-time messaging using Socket.io.",
      "Built dark/light theme support, reusable components, toast feedback, and skeleton loaders.",
      "Documented backend APIs with Swagger UI.",
    ],
    backend: "https://github.com/Shourov98/chat-app-express-backend",
    frontend: "https://github.com/Shourov98/chat-app-react-frontend",
  },
  {
    title: "Socially - Full-Stack Blog Platform",
    description:
      "Responsive social blog platform built with Next.js App Router, TypeScript, Clerk authentication, Prisma ORM, Shadcn UI, and Tailwind CSS.",
    badges: ["Full Stack", "Next.js", "Prisma"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Clerk", "Shadcn UI"],
    images: ["/socially/ss-1.png", "/socially/ss-2.png", "/socially/ss-3.png"],
    highlights: [
      "Designed a normalized Prisma database schema for efficient relationship-based data retrieval.",
      "Implemented authentication with Clerk and reusable UI components with Shadcn UI.",
    ],
    githubLink: "https://github.com/Shourov98/Socially",
    liveView: "https://socially-flax.vercel.app/",
  },
  {
    title: "Sorting Visualizer - Interactive Algorithm Learning Tool",
    description:
      "Interactive algorithm learning tool that visually demonstrates sorting algorithms and lets users compare performance in real time.",
    badges: ["Algorithm", "Visualizer", "React"],
    technologies: ["React", "JavaScript", "Styled Components", "Vite"],
    images: ["/sortingAlgo/ss-1.png", "/sortingAlgo/ss-2.png", "/sortingAlgo/ss-3.png"],
    highlights: [
      "Visualized 6 sorting algorithms with custom React hook-based animations.",
      "Added controls for array size, sorting speed, and time complexity comparison.",
    ],
    githubLink: "https://github.com/Shourov98/sorting_algo_visualization",
    liveView: "https://sorting-algorithm-visualization-kappa.vercel.app/",
  },
];

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to close the modal
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="projects" className="flex items-start justify-center py-16 md:min-h-screen md:items-center md:py-20">
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent md:text-4xl">
            Featured Projects
          </h2>
          <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 md:gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="project-card rounded-2xl border border-white/10 bg-[#161B22]/90 p-4 shadow-lg transition hover:-translate-y-1 hover:border-blue-500/50 sm:p-6"
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <span key={badge} className="project-badge">
                      {badge}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">{project.title}</h3>
                <p className="mb-4 text-sm leading-6 text-gray-400 sm:text-base">{project.description}</p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span key={key} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400 sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.highlights && (
                  <ul className="mb-4 space-y-2 text-sm leading-6 text-gray-300 list-disc list-inside">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Image Section - Click to Expand */}
                <div className="relative group">
                  {project.images?.length ? (
                    <>
                      <img
                        src={project.images[0]}
                        alt={`${project.title} Cover`}
                        className="rounded-lg object-cover w-full h-48 transition-transform group-hover:scale-105 cursor-pointer"
                        onClick={() => setSelectedImage(project.images[0])}
                      />
                      <div className="flex gap-2 mt-2">
                        {project.images.slice(1).map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            className="rounded-md object-cover w-1/3 h-16 transition-transform hover:scale-105 cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="flex h-40 items-center justify-center rounded-lg border border-blue-500/20 bg-gradient-to-br from-[#0d1117] via-[#132238] to-[#061018] sm:h-48">
                      <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.22em] text-blue-300 sm:text-sm">Production Project</p>
                        <p className="mt-2 px-3 text-base font-semibold text-white sm:text-lg">{project.title}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Buttons Section */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-between">
                  {project.frontend && (
                    <a
                      href={project.frontend}
                      className="project-action"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Frontend
                    </a>
                  )}
                  {project.backend && (
                    <a
                      href={project.backend}
                      className="project-action"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Backend
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="project-action"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveView && (
                    <a
                      href={project.liveView}
                      className="project-action project-action-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img src={selectedImage} alt="Full View" className="max-w-[90vw] max-h-[90vh] rounded-lg" />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 px-3 py-1 rounded-lg"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
