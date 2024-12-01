import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { projectData } from "@/constants/projectData";

export async function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({ id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch the project data using the id
  const project = projectData[id];

  // Handle if the project is not found
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className={styles.projectPage}>
      <Navbar />
      <div className={styles.projectContent}>
        <div className={styles.pageHeader}>
          <Link href="/#projects" className={styles.backLink}>
            <FontAwesomeIcon icon={faArrowLeft} width={36} height={36} />
          </Link>
          <div className={styles.projectTitle}>{projectData[id].title}</div>
        </div>
        <div className={styles.projectImages}>
          {projectData[id].sources.map((path, index) => {
            return (
              <Image
                src={`/${id}/${path}.png`}
                alt={`${id}/${path}.png`}
                key={index}
                width={1000}
                height={667}
                layout="responsive"
              />
            );
          })}
        </div>
      </div>
      <Contact />
    </div>
  );
}
