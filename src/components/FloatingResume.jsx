import { FaDownload, FaEye } from "react-icons/fa";

export const FloatingResume = () => {
  const resumePath = "/resume/mahbubul-hoque-shourov-resume.pdf";

  return (
    <div className="floating-resume" aria-label="Resume actions">
      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-resume-link"
      >
        <FaEye size={15} />
        <span>Resume</span>
      </a>
      <a
        href={resumePath}
        download="Mahbubul-Hoque-Shourov-Resume.pdf"
        className="floating-resume-download"
        aria-label="Download resume"
      >
        <FaDownload size={14} />
      </a>
    </div>
  );
};
