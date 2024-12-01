import styles from "./about.module.css";
import Workflow from "@/components/Workflow";
import Image from "next/image";
const About = () => {
  return (
    <div id={"about"} className={styles.about}>
      <div className={styles.content}>
        <div className={styles.title}>Fashion Designer</div>
        <div className={styles.description}>
          <div className={styles.aboutText}>
            <div className={styles.heading}>About</div>
            <div className={styles.text}>
              I am Anushka Bakrewal, a Fashion Design student at the National
              Institute of Fashion Technology, eager to apply my creative vision
              and technical skills to the fashion industry. With a strong
              foundation in design principles and experience in creative
              contests, I have developed teamwork, communication, and
              problem-solving abilities. Focused on denim and sustainability, I
              am passionate about creating innovative, eco-friendly designs.
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.heading}>Skills</div>
            <div className={styles.skillIcons}>
              <Image
                src={"/illustrator.svg"}
                alt="illustrator"
                width={48}
                height={48}
              />
              <Image
                src={"/indesign.svg"}
                alt="indesign"
                width={48}
                height={48}
              />
              <Image
                src={"/photoshop.svg"}
                alt="photoshop"
                width={48}
                height={48}
              />
              <Image
                src={"/sketchbook.png"}
                alt="sketchbook"
                width={48}
                height={48}
              />
              <Image src={"/clo.png"} alt="clo" width={48} height={48} />
              <Image src={"/figma.svg"} alt="figma" width={48} height={48} />
              <Image
                src={"/procreate.svg"}
                alt="procreate"
                width={48}
                height={48}
              />
              <Image
                src={"/office.svg"}
                alt="procreate"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className={styles.workflow}>
          <div className={styles.heading}>Work Flow</div>
          <div className={styles.diagram}>
            <Workflow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
