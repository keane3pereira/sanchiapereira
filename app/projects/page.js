"use client";

import { useSearchParams } from "next/navigation";

import NavBar from "../navBar";
import ProjectImage from "./projectImage";
import ProjectDescription from "./projectDescription";
import { projectMap } from "./projectMap";
import Footer from "../footer";
import styles from "../page.module.css";

export default function Project3() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  return (
    <main className={styles.main}>
      <NavBar />

      <ProjectDescription
      
        title={projectMap[projectId].title}
        description={projectMap[projectId].description}
      />

      <div>
        {[...Array(projectMap[projectId].images).keys()].map((index) => (
          <ProjectImage
            src={projectMap[projectId].imagePath + index + ".png"}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}
