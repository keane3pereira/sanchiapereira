"use client";

import { useSearchParams } from "next/navigation";

import NavBar from "../../navBar";
import ProjectImage from "../projectImage";
import ProjectDescription from "../projectDescription";
// import { projectMap } from "./projectMap";
import Footer from "../../footer";
import styles from "../../page.module.css";
import Image from "next/image";

export default function Project() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  return (
    <main className={styles.main}>
      <NavBar />

      <hr style={{ color: "black", width: "100vw", marginTop: "20px" }} />

      <div style={{ textAlign: "center", padding: "20px" }}>
        <p className={styles.projectTitleText}>
          <span style={{ fontWeight: 600 }}>R</span>
          otman <span style={{ fontWeight: 600 }}>D</span>
          esign <span style={{ fontWeight: 600 }}>C</span>
          hallenge <br />
          <span style={{ fontWeight: 600 }}>2024</span>{" "}
          <span style={{ fontWeight: 600 }}>Kickoff</span>
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          height={200}
          width={200}
          src={"/projects/project - designing for the future/rdc_logo.png"}
        />
        <h2>X</h2>
        <Image
          style={{ padding: 30 }}
          height={200}
          width={500}
          src={
            "/projects/project - designing for the future/workomics_logo.png"
          }
        />
      </div>

      <br />
      <br />

      {/* <div>
        <ProjectImage
          src={"/projects/project - designing for the future/image1.png"}
        />
      </div> */}

      <div className={styles.projectDiv}>
        {/* <p className={styles.projectTitleText}>Project Description</p> */}
        <p
          className={styles.projectText}
          style={{ backgroundColor: "#d90166", color: "#fff" }}
        >
          RDC is a unique, 6-week long virtual event that invites graduate
          students from around the world to test and use design thinking
          principles to solve relevant business problems of the future.
        </p>
        <br />
        <p className={styles.projectText}>
          The sponsor for 2024 is Workomics.{" "}
        </p>
        <br />
        <p
          className={styles.projectText}
          style={{ color: "#fff", backgroundColor: "#2e2e2e" }}
        >
          Workomics helps organizations who are at an inflection point in their
          growth trajectory.
        </p>
      </div>
      <br />

      <hr style={{ color: "black", width: "100vw", marginTop: "20px" }} />

      <div className={styles.projectDiv} style={{alignItems: "center"}}>
        <p className={styles.projectTitleText}>My Role</p>
        <p className={styles.projectText}>
        <span style={{fontWeight: 500}}>Team Leader</span>, working with a team of six across schools in Canada & USA.
        </p>
      </div>

      <hr
        style={{
          color: "black",
          width: "100vw",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />

      <br />
      <br />
      <div className={styles.projectDiv} style={{ border: "1px solid black" }}>
        <p className={styles.projectTitleText}>Skills Gained </p>
        <p className={styles.projectText} style={{ textAlign: "center" }}>
          Multi-national Team Leadership, Empathy Interviews,
          <br /> Ideation, Prototyping, Usability Testing
        </p>
      </div>
      <br />
      <br />

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
      <br/>

      <hr
        style={{
          color: "black",
          width: "100vw",
          marginTop: "20px",
        }}
      />

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>The Problem</p>
        <p className={styles.projectText}>
          How might we help organizations actively create engaging remote/hybrid
          work environments that are economically sustainable, for today’s
          knowledge workers?
        </p>
      </div>

      <hr
        style={{
          color: "black",
          width: "100vw",
          marginTop: "20px",
        }}
      />

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
      <br />

      <hr
        style={{
          color: "black",
          width: "100vw",
          marginTop: "20px",
        }}
      />

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Primary Research</p>
      </div>

      <div className={styles.projectDiv} style={{ textAlign: "left" }}>
        <p className={styles.projectSubtitleText}>
          Segmentation of target users
        </p>
        <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          <p className={styles.projectText} style={{ maxWidth: "500px" }}>
            We decided to narrow down our focus segment to{" "}
            <span style={{ fontWeight: 500 }}>
              Gen X, Millennials and Gen Z
            </span>
            , considering where we would get the most valuable feedback to
            design for the future, while understanding real needs.
          </p>
          <div
            style={{ position: "relative", width: "500px", height: "320px" }}
          >
            <Image
              src={
                "/projects/project - designing for the future/segmentation.png"
              }
              fill={true}
            />
          </div>
        </div>
      </div>

      <div
        className={styles.projectDiv}
      >
        <p
          className={styles.projectSubtitleText}
        >
          Need Finding Phase
        </p>
        <p className={styles.projectText}>
          Our team performed secondary research and spoke to 16 more people like
          Jane, who share similar concerns regarding their workplace
        </p>
        <br />
        <div style={{ position: "relative", width: "900px", height: "320px"}}>
          <Image
            src={
              "/projects/project - designing for the future/need_finding_phase.png"
            }
            fill={true}
          />
        </div>

      <br />

      <p className={styles.projectText}>Interview Data: </p>
      <div style={{ position: "relative", width: "1200px", height: "900px" }}>
        <Image
          src={"/projects/project - designing for the future/interviews1.jpeg"}
          fill={true}
        />
      </div>
        <p className={styles.projectSubtitleText}>Research Insights</p>
        <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          <p className={styles.projectText} style={{ textAlign: "left" }}>
            Literature review focused on understanding the current interaction
            of employees with their workplace.
          </p>
          <ProjectImage
            src={
              "/projects/project - designing for the future/research_insights1.png"
            }
          />
          <p className={styles.projectText} style={{ textAlign: "left" }}>
            Interviews focused on themes to understand how employees feel about
            current work culture.
          </p>
          <ProjectImage
            src={
              "/projects/project - designing for the future/research_insights2.png"
            }
          />
        </div>
      </div>
      <hr
        style={{
          color: "black",
          width: "100vw",
          marginTop: "20px",
        }}
      />

      <div className={styles.projectDiv} style={{ textAlign: "center" }}>
        <p className={styles.projectTitleText}>Problem Statement</p>
        <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          <p className={styles.projectText} style={{ textAlign: "center", fontWeight: 500}}>
            How might employees personalize their work architecture to shape
            their work-life balance so that they can accommodate their
            ever-evolving priorities?
          </p>
        </div>
      </div>

      <hr
        style={{
          color: "black",
          width: "100vw",
          marginTop: "20px",
        }}
      />

      <div className={styles.projectDiv}>
        <p className={styles.projectTitleText}>Solution</p>
      </div>
      <div>
        {[...Array(39).keys()].map((index) => (
          <ProjectImage
            src={
              "/projects/project - designing for the future/images/" +
              index +
              ".png"
            }
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}
