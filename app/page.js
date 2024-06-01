import Image from "next/image";
import Link from "next/link";

import Footer from "./footer";
import styles from "./page.module.css";
import { projectMap } from "./projects/projectMap";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navbar */}
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
      <br />

      {/* Profile */}
      <div className={styles.profileDiv}>
        <div className={styles.profileIntroDiv}>
          <p className={styles.profileIntroDescriptionSpecialCA}>
            Chartered&nbsp;<span style={{ fontWeight: 400 }}>Accountant</span>
          </p>
          <p className={styles.profileIntroDescriptionSpecialMBA}>
            + <span style={{ fontWeight: 400 }}>MBA</span>&nbsp;Candidate
          </p>
          <p className={styles.profileIntroDescription}>
            5 years of experience in managing projects in consulting and
            auditing. A strategic and creative thinker with a strong focus on
            having a unique approach to problem solving by deeply understanding
            client and stakeholder needs.
          </p>
        </div>

        <div className={styles.profileImageDiv}>
          <Image
            className={styles.profilePic}
            src="/sp.png"
            alt="Profile pic"
            fill={true}
          />
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.introDiv}></div>
      </div>

      <div id="projects" className={styles.projectDiv}>
        <h2 className={styles.projectTitleText}>Projects</h2>
        <div className={styles.projectGridDiv}>
        <Link
            href={{ pathname: "/projects/rotmanDesignChallenge" }}
            projectname={"rotmanDesignChallenge"}
            key={"rotmanDesignChallenge"}
            className={styles.projectGridBoxLink}
          >
            <div className={styles.projectGridBoxDiv}>
              <div className={styles.projectImageDiv}>
                <Image
                  className={styles.projectCoverImage}
                  src={
                    "/projects/project - designing for the future/image1.png"
                  }
                  alt={""}
                  fill={true}
                />
              </div>

              <p className={styles.projectDescriptionText}>
                {
                  "Project with a consulting firm using design thinking methodologies for solutioning how the future of work would look like for their clients"
                }
              </p>
            </div>
          </Link>

          <Link
            href={{ pathname: "/projects/skipTheDishes" }}
            projectname={"skipTheDishes"}
            key={"skipTheDishes"}
            className={styles.projectGridBoxLink}
          >
            <div className={styles.projectGridBoxDiv}>
              <div className={styles.projectImageDiv}>
                <Image
                  className={styles.projectCoverImage}
                  src={
                    "/projects/project - skip the dishes/images/cover.png"
                  }
                  alt={""}
                  fill={true}
                />
              </div>

              <p className={styles.projectDescriptionText}>
                {
                  "Strategizing for a food delivery app to build customer loyalty to overcome app-switching"
                }
              </p>
            </div>
          </Link>

          {Object.keys(projectMap).map((key, index) => (
            <Link
              href={{ pathname: "/projects/", query: { id: key } }}
              projectname={key}
              key={key}
              className={styles.projectGridBoxLink}
            >
              <div className={styles.projectGridBoxDiv}>
                <div className={styles.projectImageDiv}>
                  <Image
                    className={styles.projectCoverImage}
                    src={projectMap[key].imagePath + "0.png"}
                    alt={projectMap[key].title}
                    fill={true}
                  />
                </div>

                <p className={styles.projectDescriptionText}>
                  {projectMap[key].description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
