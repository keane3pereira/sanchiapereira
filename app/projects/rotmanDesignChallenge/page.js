"use client";

import { useSearchParams } from "next/navigation";

import NavBar from "../../navBar";
import ProjectImage from "../projectImage";
import ProjectDescription from "../projectDescription";
// import { projectMap } from "./projectMap";
import Footer from "../../footer";
import styles from "../../page.module.css";

export default function Project() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  return (
    <main className={styles.main}>
      <NavBar />

      <ProjectDescription
        title={"Project - Rotman Design Challenge 2024 Kickoff"}
        description={""}
      />

      <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image1.png"}
        />
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Project Description</p>
        <p>
          RDC is a unique, 6-week long virtual event that invites graduate
          students from around the world to test and use design thinking
          principles to solve relevant business problems of the future.
        </p>
        <p>
          The sponsor for 2024 is Workomics. Workomics helps organizations who
          are at an inflection point in their growth trajectory
        </p>
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>My Role</p>
        <p>
          Team Leader - Working with a team of six across schools in Canada and
          US
        </p>
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Skills Gained</p>
        <p>
          multinational team leadership, empathy interviews, ideation,
          prototyping, usability testing
        </p>
      </div>

      <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image2.png"}
        />
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image3.png"}
        />
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>The Problem</p>
        <p>
          How might we help organizations actively create engaging remote/hybrid
          work environments, that are economically sustainable, for today’s
          knowledge workers?
        </p>
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Design Process</p>
        {/* <p>
          How might we help organizations actively create engaging remote/hybrid
          work environments, that are economically sustainable, for today’s
          knowledge workers?
        </p> */}
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image4.png"}
        />
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Primary Research</p>
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image5.png"}
        />
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image6.png"}
        />
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image7.png"}
        />
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image8.1.png"}
        />
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image8.2.png"}
        />
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image8.3.png"}
        />
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Solution</p>
      </div>
      <div>
        {[...Array(39).keys()].map((index) => (
          <ProjectImage
            src={"/projects/project - designing for the future/images/" + index + ".png"}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}
