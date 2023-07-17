"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Inknut_Antiqua, Vollkorn, Playfair_Display } from "next/font/google";
import { Button } from "@mui/material";
import { East } from "@mui/icons-material";

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  variable: "--font-inknut",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const vollkorn = Vollkorn({
  subsets: ["latin"],
  variable: "--font-vollkorn",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={`${styles["main-section"]}`}>
        <video autoPlay muted loop className={`${styles["main-video"]}`}>
          <source
            // src="https://la-wedding-rsvp.s3.ap-south-1.amazonaws.com/wedding_header_cmp.mp4"
            src="/videos/wedding_header_cmp.mp4"
            type="video/mp4"
          />
        </video>
        <div className={`${styles["main-section-wrapper"]}`}>
          <div className={`${styles["main-text"]} ${playfair.className}`}>
            We're getting married.
          </div>
          <div>
            <Button
              href="/rsvp"
              variant="contained"
              sx={{
                textTransform: "none",
                height: "clamp(2.5rem, 5vw, 3.5rem)",
                width: "clamp(6rem, 5vw, 10rem)",
                backgroundColor: "#6C1C61",
                borderRadius: 0,
              }}
              endIcon={<East />}
            >
              RSVP
            </Button>
          </div>
        </div>
      </section>
      <div style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        another
      </div>
    </main>
  );
}
