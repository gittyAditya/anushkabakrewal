import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
