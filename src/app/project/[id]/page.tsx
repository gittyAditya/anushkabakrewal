import styles from "../page.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Project = {
  title: string;
  sources: string[];
};

const projectData: Record<string, Project> = {
  first: {
    title: "Resilience",
    sources: [
      "page1",
      "page2",
      "page3",
      "page4",
      "page5",
      "page6",
      "page7",
      "page8",
      "page9",
    ],
  },
  second: {
    title: "Rebellious Threads",
    sources: ["page1", "page2", "page3", "page4", "page5", "page6"],
  },
  third: {
    title: "Rugged Frontier",
    sources: [
      "page1",
      "page2",
      "page3",
      "page4",
      "page5",
      "page6",
      "page7",
      "page8",
    ],
  },
  fourth: {
    title: "Whispering Light",
    sources: [
      "page1",
      "page2",
      "page3",
      "page4",
      "page5",
      "page6",
      "page7",
      "page8",
    ],
  },
  fifth: {
    title: "Imperial Weaves & Rajwada",
    sources: [
      "page1",
      "page2",
      "page3",
      "page4",
      "page5",
      "page6",
      "page7",
      "page8",
      "page9",
    ],
  },
  sixth: {
    title: "Imperial Weaves & Rajwada",
    sources: [
      "page1",
      "page2",
      "page3",
      "page4",
      "page5",
      "page6",
      "page7",
      "page8",
    ],
  },
};

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

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
          <Link href="/#projects">
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
};

export default ProjectPage;
