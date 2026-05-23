function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.featured && (
        <span className="badge">
          Featured
        </span>
      )}

      <img
        src={project.image}
        alt={project.name}
      />

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        View Project
      </a>

      <div className="tech-stack">
        {project.techStack.map((tech, index) => (
          <span
            className="tech-badge"
            key={index}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;