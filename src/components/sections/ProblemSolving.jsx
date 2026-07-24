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
      totalProblems: "220",
      handle: "shourov_mahbub",
      text: "Solved data structures and algorithms problems with a focus on clear, efficient solutions across common interview patterns.",
      languages: ["Python", "C++", "SQL"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png", // LeetCode logo URL
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/Mahbub_Shourov",
      totalProblems: "276",
      handle: "Mahbub_Shourov",
      text: "Participated in 40+ contests and solved problems to improve algorithmic speed, accuracy, and implementation discipline.",
      maxRating: "1304",
      languages: ["C++"],
      logo: "https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png", // Codeforces logo URL
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/shourov_06",
      totalProblems: "64",
      handle: "shourov_06",
      text: "Participated in 20+ competitions, reached a 4-star profile, and solved problems across multiple algorithm categories.",
      languages: ["C++"],
      maxRating: "1753",
      logo: "https://cdn.codechef.com/images/cc-logo.svg", // CodeChef logo URL
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/Shourov",
      totalProblems: "100+",
      handle: "Shourov",
      text: "Practiced core programming and problem-solving tracks, earning profile stars in Problem Solving and Python.",
      certifications: [
        "2-star Problem Solving",
        "3-star Python",
      ],
      languages: ["Python", "C++", "SQL", "JavaScript"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png", // HackerRank logo URL
    },
  ];

  return (
    <section
      id="problem-solving"
      className="flex items-start justify-center py-16 md:min-h-screen md:items-center md:py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent md:mb-12 md:text-4xl">
            Problem Solving
          </h2>

          {/* Platforms Section */}
          <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-5 md:max-w-none md:grid-cols-2 md:gap-8">
            {platforms.map((platform, id) => (
              <div
                key={id}
                className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-center backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-500/50 md:p-6 md:text-left"
              >
                <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                  {/* Platform Logo */}
                  <img
                    src={platform.logo}
                    alt={`${platform.name} Logo`}
                    className="h-10 w-10 object-contain md:h-12 md:w-12"
                  />
                  <h3 className="text-xl font-bold text-blue-500 md:text-2xl">
                    {platform.name}
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-6 text-gray-400 md:text-base">
                  {platform.text}
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-300 md:text-base">
                    <span className="font-semibold">Total Solved:</span>{" "}
                    {platform.totalProblems} problems
                  </p>
                  <p className="text-sm text-gray-300 md:text-base">
                    <span className="font-semibold">Handle:</span>{" "}
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-blue-500 hover:underline"
                    >
                      {platform.handle}
                    </a>
                  </p>
                  {platform.maxRating && (
                    <p className="text-sm text-gray-300 md:text-base">
                      <span className="font-semibold">Max Rating:</span>{" "}
                      {platform.maxRating}
                    </p>
                  )}
                  {platform.certifications && (
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-semibold text-gray-300 md:text-base">
                        Certifications:
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 md:justify-start">
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
            <h3 className="mb-4 text-center text-xl font-bold text-blue-500 md:mb-6 md:text-2xl">
              Problem Types I&apos;ve Worked On
            </h3>
            <div className="mx-auto flex max-w-md flex-wrap justify-center gap-2 md:max-w-4xl md:gap-3">
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
