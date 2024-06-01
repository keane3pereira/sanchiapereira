import Link from "next/link";

import styles from "./page.module.css";

export default function NavBar() {
  return (
    <>
    <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div className={styles.profileNameDiv}>
          <span className={styles.profileIntroFirstNameText}> S </span>{" "}
          <span className={styles.profileIntroFirstNameText}> a </span>{" "}
          <span className={styles.profileIntroFirstNameText}> n </span>{" "}
          <span className={styles.profileIntroFirstNameText}> c </span>{" "}
          <span className={styles.profileIntroFirstNameText}> h </span>{" "}
          <span className={styles.profileIntroFirstNameText}> i </span>{" "}
          <span className={styles.profileIntroFirstNameText}> a </span>{" "}
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <div className={styles.profileNameDiv}>
          <span className={styles.profileIntroLastNameText}> P </span>
          <span className={styles.profileIntroLastNameText}> e </span>
          <span className={styles.profileIntroLastNameText}> r </span>
          <span className={styles.profileIntroLastNameText}> e </span>
          <span className={styles.profileIntroLastNameText}> i </span>
          <span className={styles.profileIntroLastNameText}> r </span>
          <span className={styles.profileIntroLastNameText}> a </span>
        </div>
      </div>
    <div className={styles.navDiv}>
      <div className={styles.navItemDiv}>
        <Link href={"/"} className={styles.navLink}>
          Home
        </Link>
      </div>
      <div className={styles.navItemDiv}>
        <Link href={"/#projects"} className={styles.navLink}>
          Projects
        </Link>
      </div>
    </div>
    </>
  );
}
