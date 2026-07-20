import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const highlights = [
    "Delivered CMS portfolio, rental, and moving service sites end-to-end with Next.js, Express.js, and TypeScript.",
    "Built rich UI with Tailwind CSS and component libraries, layering Framer Motion for polished interactions.",
    "Implemented JWT + OTP authentication flows with guarded routes and refresh handling.",
  ];

  const engineeringFocus = [
    "Validation and type safety using Zod and TypeScript across API contracts and forms.",
    "State management with Redux for complex flows and Zustand for lean client stores.",
    "Backend routing, middleware, and services in Express.js with reusable modules.",
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-16 md:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Experience
          </h2>

          <div className="rounded-2xl p-6 md:p-8 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 bg-[#0d1117] backdrop-blur-sm shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-2xl uppercase tracking-[0.2em] text-blue-300">Sparktech Agency</p>
                <h3 className="text-2xl font-semibold text-white">Junior Fullstack Developer</h3>
              </div>
              <span className="self-start md:self-auto bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                July 25 - Present
              </span>
            </div>

            <p className="text-gray-300 mt-4 text-sm md:text-base">
              Full-stack ownership across Next.js frontends and Express.js backends. Delivered productized sites using UI libraries and Tailwind CSS with Framer Motion animations, ensuring smooth UX from landing pages to authenticated dashboards.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <h4 className="text-blue-400 font-semibold mb-3">Product wins</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-300 list-disc list-inside">
                  {highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <h4 className="text-blue-400 font-semibold mb-3">Engineering focus</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-300 list-disc list-inside">
                  {engineeringFocus.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Next.js", "Express.js", "TypeScript", "Framer Motion", "Tailwind CSS", "UI Libraries", "Zod", "Redux", "Zustand", "JWT", "OTP"]
                .map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs md:text-sm border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
