import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const impactStats = [
    { value: "30+", label: "REST APIs integrated" },
    { value: "50+", label: "API endpoints documented" },
    { value: "25%", label: "fewer integration issues" },
    { value: "30%", label: "faster onboarding" },
  ];

  const responsibilities = [
    {
      title: "Production SaaS Development",
      text: "Built and maintained production-grade SaaS applications using Next.js, React, Node.js, Express, FastAPI, MongoDB, and TypeScript.",
    },
    {
      title: "REST API Integration",
      text: "Collaborated with frontend teams to integrate 30+ REST APIs, improving data consistency and reducing integration issues by about 25%.",
    },
    {
      title: "AI Automation",
      text: "Built AI-powered automation systems using LLM APIs for marketplace content generation and workflow automation.",
    },
    {
      title: "Secure Authentication",
      text: "Developed authentication systems using JWT, Clerk, Firebase Authentication, refresh tokens, and OTP flows.",
    },
    {
      title: "RBAC Dashboards",
      text: "Implemented Role-Based Access Control across admin dashboards and multi-role product workflows.",
    },
    {
      title: "Stripe Booking Platform",
      text: "Developed a subscription-based booking platform for events, services, and venues with Stripe billing and access management.",
    },
    {
      title: "CI/CD & Deployment",
      text: "Configured GitHub Actions CI/CD and deployed applications on Hetzner VPS and AWS EC2 to reduce release friction.",
    },
    {
      title: "API Documentation",
      text: "Authored Swagger API documentation and Postman collections for 50+ endpoints, improving onboarding and integration efficiency by about 30%.",
    },
  ];

  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "FastAPI",
    "MongoDB",
    "LLM APIs",
    "Stripe",
    "JWT",
    "Clerk",
    "Firebase Auth",
    "RBAC",
    "GitHub Actions",
    "Hetzner VPS",
    "AWS EC2",
    "Swagger",
    "Postman",
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-16 md:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Experience
          </h2>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] p-6 shadow-xl md:p-8 experience-shell">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent experience-glow" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.28em] text-blue-300">
                  SparkTech Agency
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                  Junior Full Stack Developer
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-300 md:text-base">
                  Full-stack development across SaaS products, AI automation,
                  booking platforms, and authenticated dashboards. I contribute
                  to frontend delivery, API integration, backend implementation,
                  documentation, CI/CD, and cloud/VPS deployments.
                </p>
              </div>

              <div className="shrink-0 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-left md:text-right">
                <p className="text-sm font-medium text-blue-200">
                  July 2025 - Present
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-400">
                  Full-time role
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {impactStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="experience-stat rounded-xl border border-white/10 bg-black/25 p-4"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <p className="text-2xl font-bold text-cyan-300">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {responsibilities.map((item, index) => (
                <article
                  key={item.title}
                  className="experience-item group rounded-xl border border-white/10 bg-black/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/5"
                  style={{ animationDelay: `${160 + index * 70}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-sm font-bold text-blue-300 transition-colors group-hover:border-cyan-400/60 group-hover:text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs md:text-sm border border-blue-500/20 transition hover:border-cyan-400/40 hover:text-cyan-300"
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
