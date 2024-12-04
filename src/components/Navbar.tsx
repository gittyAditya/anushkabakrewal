import styles from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.name}>
          <Link href="/">Anushka Bakrewal</Link>
        </div>
        <div className={styles.navItems}>
          <div>
            <Link href="/#about" className={styles.navItem}>
              About
            </Link>
          </div>
          <div>
            <Link href="/#projects" className={styles.navItem}>
              My Work
            </Link>
          </div>
          <div>
            <Link href="/#contact" className={styles.navItem}>
              Get In Touch
            </Link>
          </div>
          <div>
            <Link
              href="/anushka-bakrewal-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.downloadBtn}>
                <FontAwesomeIcon icon={faDownload} width={20} height={15} />{" "}
                Resume
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
