import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Styled Components",
        "Framer Motion",
        "Shadcn UI",
        "DaisyUI",
        "Redux",
        "Zustand",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "REST API",
        "JWT",
        "Refresh Tokens",
        "OTP Auth",
        "RBAC",
        "Stripe",
        "OpenAI API",
        "Zod",
        "Socket.IO",
        "Swagger",
        "Postman",
        "Prisma",
        "Clerk",
        "Firebase Auth",
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        "MongoDB",
        "MySQL",
        "SQL",
        "Appwrite",
        "GitHub Actions",
        "AWS EC2",
        "Hetzner VPS",
        "Git",
        "GitHub",
        "VS Code",
        "Chrome DevTools",
        "Webpack",
        "Vite",
        "Vercel",
      ],
    },
    {
      title: "Problem Solving",
      skills: [
        "C++",
        "Python",
        "Data Structures",
        "Algorithms",
        "Dynamic Programming",
        "Graph Algorithms",
      ],
    },
  ];

  const softSkills = [
    "Client Communication",
    "Stakeholder Management",
    "Technical Communication",
    "Cross-functional Collaboration",
    "Analytical Thinking",
    "Adaptability",
    "Ownership",
    "Continuous Learning",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-12 md:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Summary Section */}
          <div className="rounded-xl p-6 md:p-8 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 bg-black/10 backdrop-blur-sm mb-8">
            <p className="text-gray-300 text-sm md:text-base mb-4 p-4">
              I am a Junior Full Stack Developer at SparkTech Agency, where I build and maintain production-grade SaaS applications using Next.js, React, Node.js, Express, FastAPI, MongoDB, and TypeScript. My work spans frontend interfaces, REST API integration, backend services, secure authentication, RBAC dashboards, AI automation, Stripe billing, and deployment workflows.
            </p>
            <p className="text-gray-300 text-sm md:text-base p-4">
              I also keep a strong problem-solving practice across Codeforces, CodeChef, LeetCode, and HackerRank. My engineering background from CUET helps me approach software with analytical thinking, ownership, clear communication, and attention to practical user needs.
            </p>
          </div>

          {/* Skills Section */}
          <div id="skills" className="rounded-xl p-6 md:p-8 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 bg-black/10 backdrop-blur-sm mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-500">
              Skills
            </h3>
            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-400">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs md:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 md:p-8 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 bg-black/10 backdrop-blur-sm mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-500">
              Professional Strengths
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-cyan-500/10 text-cyan-400 py-1 px-3 rounded-full text-xs md:text-sm hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.18)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="rounded-xl p-6 md:p-8 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 bg-black/10 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-500">
              🏫 Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                <strong>B.Sc in Mechatronics & Industrial Engineering</strong> - Chittagong University of Engineering and Technology (2018 - 2023)
                <br />
                <span className="text-gray-400">CGPA: 3.27</span>
              </li>
              <li>
                <strong>HSC (Higher Secondary Certificate)</strong> - Islamia University College, Chattogram (2015 - 2017)
                <br />
                <span className="text-gray-400">Science Group</span>
              </li>
              <li>
                <strong>SSC (Secondary School Certificate)</strong> - Railway Public High School, Chattogram (2010 - 2015)
                <br />
                <span className="text-gray-400">Science Group</span>
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
