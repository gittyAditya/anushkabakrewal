import styles from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projectList = [
    { id: "first", image: "/first.png" },
    { id: "second", image: "/second.png" },
    { id: "third", image: "/third.png" },
    { id: "fourth", image: "/fourth.png" },
    { id: "fifth", image: "/fifth.png" },
    { id: "sixth", image: "/fifth.png" },
  ];

  return (
    <div id={"projects"} className={styles.projects}>
      <div className={styles.content}>
        <div className={styles.title}>Projects</div>
        <div className={styles.grid}>
          {projectList.map((project) => (
            <div className={styles.card} key={project.id}>
              <Link href={`/project/${project.id}`}>
                <Image
                  src={project.image}
                  width={370}
                  height={267}
                  className={styles.projectImg}
                  alt={`Image for ${project.id}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
