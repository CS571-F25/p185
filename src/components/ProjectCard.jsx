export default function ProjectCard({ title, description, tag, link }) {
  return (
    <div className="project-card">
      <div className="project-header">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <span>{title}</span>
        )}
        <span className="project-tag">{tag}</span>
      </div>

      <p className="project-description">{description}</p>
    </div>
  );
}
