import styles from "./projectShowcase.module.css";
interface ProjectLinkProps {
  url: string;
  className: string;
  title: string;
}

function ProjectLink({ className, title, url }: ProjectLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.link} ${className}`}
      aria-label="project link (opens in new tab)"
    >
      {title}
    </a>
  );
}

export default ProjectLink;
