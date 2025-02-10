import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

// Array of project objects
const projectsData = [
  {
    title: "Socially",
    description: "A blog site built with NextJs & Shadcn UI, Prisma for Database service.",
    technologies: ["NextJs", "Typescript", "Tailwind", "Prisma", "Clerk"],
    images: ["/socially/ss-1.png", "/socially/ss-2.png", "/socially/ss-3.png"],
    githubLink: "https://github.com/Shourov98/Socially",
    liveView: "https://socially-flax.vercel.app/",
  },
  {
    title: "Sorting Visualizer",
    description: "Sorting algorithms visualizer built with ReactJS.",
    technologies: ["ReactJs", "Javascript", "CSS", "Vite"],
    images: ["/sortingAlgo/ss-1.png", "/sortingAlgo/ss-2.png", "/sortingAlgo/ss-3.png"],
    githubLink: "https://github.com/Shourov98/sorting_algo_visualization",
    liveView: "https://sorting-algorithm-visualization-kappa.vercel.app/",
  },
  {
    title: "Mega Blog",
    description: "A blog site built with React and Vite environment with Appwrite Database service.",
    technologies: ["ReactJs", "Javascript", "Tailwind", "Appwrite", "Redux"],
    images: ["/mega-blog/ss-1.png", "/mega-blog/ss-2.png", "/mega-blog/ss-3.png"],
    githubLink: "https://github.com/Shourov98/MegaBlogg",
    liveView: "https://mega-blog-smoky.vercel.app/",
  },
  {
    title: "Todo Task",
    description: "Built using React + Vite, Tailwind and Local Storage.",
    technologies: ["ReactJs", "Javascript", "Tailwind", "Redux", "Local Storage"],
    images: ["/todo1.jpg", "/todo2.jpg", "/todo3.jpg"],
    githubLink: "https://github.com/Shourov98/Todo_with_redux",
    liveView: "",
  },
];

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to close the modal
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-[#0D1117]">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/10 bg-[#161B22] hover:border-blue-500/50 transition transform hover:-translate-y-1 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Image Section - Click to Expand */}
                <div className="relative group">
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
                </div>

                {/* Buttons Section */}
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.githubLink}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                  {project.liveView && (
                    <a
                      href={project.liveView}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
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
