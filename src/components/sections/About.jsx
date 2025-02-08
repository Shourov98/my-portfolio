import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "C++",
    "JavaScript",
    "React",
    "TypeScript",
    "TailwindCSS",
    "SQL",
    "Git",
    "Python",
    "Data Structures",
    "Algorithms",
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
              Recent graduate with a Bachelor's degree in Mechatronics & Industrial Engineering from CUET, actively pursuing a career in Front-end Development. Proficient in JavaScript and the React framework, with a solid foundation in core computer science principles, data structures, and algorithms. Passionate about applying technology to solve complex, real-world challenges and driven to contribute to innovative projects.
            </p>
            <p className="text-gray-300 text-sm md:text-base p-4">
              Eager to bring a blend of technical knowledge, commitment, and adaptability to a collaborative, forward-thinking team, with a dedication to continuous professional growth.
            </p>
          </div>

          {/* Skills Section */}
          <div className="rounded-xl p-6 md:p-8 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 bg-black/10 backdrop-blur-sm mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-500">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs md:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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