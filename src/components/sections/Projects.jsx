import { RevealOnScroll } from "../RevealOnScroll";

// Array of project objects
const projectsData = [
  {
    title: "Socially",
    description: "A blog site built with NextJs & Shadcn UI, Prisma for Database service.",
    technologies: ["NextJs", "Typescript", "Tailwind", "Prisma", "Clerk"],
    images: ["../../../public/socially/ss-1.png", "../../../public/socially/ss-2.png", "../../../public/socially/ss-1.png"],
    githubLink: "https://github.com/Shourov98/Socially",
    liveView: "https://socially-flax.vercel.app/"
  },
  {
    title: "Sorting Visualizer",
    description: "Sorting algorithms visualizer built with ReactJS.",
    technologies: ["ReactJs", "Javascript", "CSS", "Vite"],
    images: ["../../../public/sortingAlgo/ss-1.png", "../../../public/sortingAlgo/ss-2.png", "../../../public/sortingAlgo/ss-1.png"],
    githubLink: "https://github.com/Shourov98/sorting_algo_visualization",
    liveView: "https://socially-flax.vercel.app/"
  },
  {
    title: "Mega Blog",
    description: "A blog site built with React and Vite environment with Appwrite Database service.",
    technologies: ["ReactJs", "Javascript", "Tailwind", "Appwrite", "Redux"],
    images: ["../../../public/mega-blog/ss-1.png", "../../../public/mega-blog/ss-2.png", "../../../public/mega-blog/ss-1.png"],
    githubLink: "https://github.com/Shourov98/MegaBlogg",
    liveView: "https://mega-blog-smoky.vercel.app/"
  },
  {
    title: "Todo Task",
    description: "Built using React + Vite, Tailwind and Local Storage.",
    technologies: ["ReactJs", "Javascript", "Tailwind", "Redux", "Local Storage"],
    images: ["todo1.jpg", "todo2.jpg", "todo3.jpg"],
    githubLink: "https://github.com/yourusername/TodoTask",
    liveView: "https://todo-task-live-view.com"
  }
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={`/images/${image}`}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="rounded-lg object-cover h-24 w-full"
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                  <a
                    href={project.liveView}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live View →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};