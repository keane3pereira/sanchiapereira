"use client";

import { useSearchParams } from "next/navigation";

import NavBar from "../../navBar";
import ProjectImage from "../projectImage";
import ProjectDescription from "../projectDescription";
import Footer from "../../footer";
import styles from "../../page.module.css";

export default function Project() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  return (
    <main className={styles.main}>
      <NavBar />

      <ProjectDescription
        title={"Business Design Fundamentals - Skip the Dishes"}
        description={""}
      />

      <div>
        <ProjectImage
          src={"/projects/project - skip the dishes/images/cover.png"}
        />
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Project Description</p>
        <p>
          As part of my Business Design Fundamentals project, we worked with our
          client Skip using business design for increasing their market share.
        </p>
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Skills Gained</p>
        <p>
          storytelling, empathy interviews, problem framing, persona
          development, prototyping
        </p>
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>The Problem</p>

        <ProjectImage
          src={"/projects/project - skip the dishes/images/theproblem1.png"}
        />
        <ProjectImage
          src={"/projects/project - skip the dishes/images/theproblem2.png"}
        />
        <ProjectImage
          src={"/projects/project - skip the dishes/images/theproblem3.png"}
        />
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Innovation Design Brief</p>

        <p>
          Using secondary research, we created an innovation design brief to
          draft our first problem hypothesis and decide on a target segment, and
          came up with a recruitment plan for primary research.
        </p>
        <br />
        <p>
          ( The Innovation Design Brief is a critical document that launches a
          design project and aligns teams for business innovation activities. It
          integrates an innovation intent, project brief and design brief and
          outlines a business challenge as a problem hypothesis. )
        </p>
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - skip the dishes/images/brief1.png"}
        />
        <ProjectImage
          src={"/projects/project - skip the dishes/images/brief2.png"}
        />
        <ProjectImage
          src={"/projects/project - skip the dishes/images/brief3.png"}
        />
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Field Research</p>
      </div>
      <div>
        <p>
          Out of a team of 5, we each conducted observations in different
          locations, and interviewed 3 people each, which totaled 15 interviews
          of our target customer. Here is an example from my research.
        </p>
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - skip the dishes/images/brief4.png"}
        />
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Interviews</p>
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - skip the dishes/images/interview1.png"}
        />
      </div>
      <div>
        <ProjectImage
          src={"/projects/project - skip the dishes/images/interview2.png"}
        />
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Personas</p>
        <p>We created a few personas based on the needs we found.</p>
        <ProjectImage
          src={"/projects/project - skip the dishes/images/personas1.png"}
        />
        <ProjectImage
          src={"/projects/project - skip the dishes/images/personas2.png"}
        />
        <p>We finally settled on Bougie Bianca</p>
        <ProjectImage
          src={"/projects/project - skip the dishes/images/personas3.png"}
        />
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Problem Framing</p>
        <p>
          We constantly reiterated our problem statement for two to three of our
          personas till we finally found a problem that drove down to a core
          need and settled on that persona which was Bougie Bianca.
        </p>
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Problem Statement</p>
        <p>
          <span style={{ fontWeight: 600, letterSpacing: "1px" }}>
            How might we{" "}
          </span>{" "}
          enable{" "}
          <span style={{ fontWeight: 600, letterSpacing: "1px" }}>
            Bougie Bianca
          </span>{" "}
          to indulge in{" "}
          <span style={{ fontWeight: 600, letterSpacing: "1px" }}>
            affordable fine dining experiences
          </span>{" "}
          to make her feel like she is
          <span style={{ fontWeight: 600, letterSpacing: "1px" }}>
            {" "}
            winning at life
          </span>{" "}
          by experiencing an element of a high-end lifestyle?
        </p>
      </div>

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Solution</p>
      </div>
      <div>
        {[...Array(17).keys()].map((index) => (
          <ProjectImage
            src={"/projects/project - skip the dishes/slides/" + index + ".png"}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}
