import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/sidvsingh" target="_blank">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/sidvsingh25" target="_blank">
        <FaLinkedin />
      </a>
      <a href="mailto:sidvsingh25@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
}
