import { RevealOnScroll } from "../RevealOnScroll";

export const ProblemSolving = () => {
  const questionTypes = [
    "Array",
    "String",
    "Linked List",
    "Stack",            // 
    "Queue",
    "Heap",
    "Tree",
    "Graph",
    "Greedy",
    "Two Pointers",
    "Sliding Window",
    "Dynamic Programming",
    "Topological Sort",
    "DFS",
    "BFS",
    "Binary Search",
    "Backtracking",
  ];

  const platforms = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/shourov_mahbub/",
      totalProblems: "160+",
      handle: "shourov_mahbub",
      text: "Practiced problems from various categories and tried to make the solution optimal and easy to understand. Focused on algorithms and data structures related to graphs, dynamic programming, and databases.",
      languages: ["Python", "C++", "SQL"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png", // LeetCode logo URL
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/Mahbub_Shourov",
      totalProblems: "250+",
      handle: "Mahbub_Shourov",
      text: "Participated in 40+ contests in Division 2 and 3. Solved problems to improve problem-solving speed and accuracy.",
      maxRating: "1350+",
      languages: ["C++"],
      logo: "https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png", // Codeforces logo URL
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/shourov_06",
      totalProblems: "60+",
      handle: "shourov_06",
      text: "Participated in 20+ contests. Solved problems from various categories and achieved a max rating of 1700+.",
      languages: ["C++"],
      logo: "https://cdn.codechef.com/images/cc-logo.svg", // CodeChef logo URL
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/Shourov",
      totalProblems: "100+",
      handle: "Shourov",
      text: "Solved problems from various categories. Participated in company and university contests. Earned certifications in Problem Solving, SQL, JavaScript, and React.",
      certifications: [
        "Problem Solving (Intermediate)",
        "SQL (Intermediate)",
        "JavaScript (Basic)",
        "React (Basic)",
      ],
      languages: ["Python", "C++", "SQL", "JavaScript"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png", // HackerRank logo URL
    },
  ];

  return (
    <section
      id="problem-solving"
      className="min-h-screen flex items-center justify-center py-12 md:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Problem Solving
          </h2>

          {/* Platforms Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {platforms.map((platform, id) => (
              <div
                key={id}
                className="rounded-xl p-4 md:p-6 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 bg-black/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Platform Logo */}
                  <img
                    src={platform.logo}
                    alt={`${platform.name} Logo`}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-blue-500">
                    {platform.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm md:text-base mb-4">
                  {platform.text}
                </p>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="font-semibold">Total Solved:</span>{" "}
                    {platform.totalProblems} problems
                  </p>
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="font-semibold">Handle:</span>{" "}
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {platform.handle}
                    </a>
                  </p>
                  {platform.maxRating && (
                    <p className="text-gray-300 text-sm md:text-base">
                      <span className="font-semibold">Max Rating:</span>{" "}
                      {platform.maxRating}
                    </p>
                  )}
                  {platform.certifications && (
                    <div className="mt-4">
                      <p className="font-semibold text-gray-300 text-sm md:text-base mb-2">
                        Certifications:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {platform.certifications.map((certification, key) => (
                          <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs md:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                          >
                            {certification}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Question Types Section */}
          <div className="mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-500 text-center">
              Problem Types I've Worked On
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {questionTypes.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 md:py-2 md:px-4 rounded-full text-xs md:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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