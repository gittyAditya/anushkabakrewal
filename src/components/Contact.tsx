import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Contact = () => {
  return (
    <div id={"contact"} className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.title}>Let`s connect</div>
        <div className={styles.social}>
          <Link
            className={styles.linkedin}
            href={"https://www.linkedin.com/in/anushkabakrewal"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              width={48}
              height={48}
              className={styles.icon}
            />
          </Link>
          <Link
            className={styles.mail}
            href="mailto:anushkabakrewal@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              width={48}
              height={48}
              className={styles.icon}
            />
          </Link>
          <Link
            className={styles.behance}
            href={"https://www.behance.net/anushkabakrewal"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faSquareBehance}
              width={48}
              height={48}
              className={styles.icon}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
