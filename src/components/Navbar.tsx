import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.name}>
          <Link href="/">Anushka Bakrewal</Link>
        </div>
        <div className={styles.navItems}>
          <div>
            <Link href="/#about">About</Link>
          </div>
          <div>
            <Link href="/#projects">My Work</Link>
          </div>
          <div>
            <Link href="/#contact">Get In Touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
