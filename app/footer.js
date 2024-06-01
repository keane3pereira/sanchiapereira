import Link from "next/link";

import styles from "./page.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Copyright &copy; 2024&nbsp;|&nbsp;
        <Link className={styles.navLinkDark} href="/">
          Home
        </Link>
        &nbsp;|&nbsp;
        <Link className={styles.navLinkDark} href={"/#projects"}>
          Projects
        </Link>
      </p>
    </div>
  );
}
