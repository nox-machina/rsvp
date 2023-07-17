import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import Logo from "../Logo";
// import logo from "/icons/louiseandaaron_white.svg"
// import Logo from "/icons/Logo.js";

export default function Navbar({ font }) {
  return (
    <div className={styles["navbar-container"]}>
      <div className={`${styles["navbar-logo"]}`}>
        <Link href="/">
            <Logo />
        </Link>
      </div>
      <div className={`${font.className} ${styles["nav-links"]}`}>
        <Link href="/">Home</Link>
        <Link href="/something">Venue</Link>
        <Link href="/somethingelse">Details</Link>
      </div>
    </div>
  );
}
