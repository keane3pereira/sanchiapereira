import Image from "next/image";

import styles from "../page.module.css";

export default function ProjectImage({ src }) {
  console.log(src);
  return (
    <div className={styles.projectImage}>
      <Image
        className={styles.projectCoverImage}
        src={src}
        alt="image"
        fill={true}
      />
    </div>
  );
}
