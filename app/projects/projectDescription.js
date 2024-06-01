import styles from "../page.module.css";

export default function ProjectDescription({ title, description }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <p className={styles.projectTitleText}>{title}</p>
      <p>{description}</p>
    </div>
  );
}
