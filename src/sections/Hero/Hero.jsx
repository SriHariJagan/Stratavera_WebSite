import React from "react";
import styles from "./Hero.module.css";
import heroImg from "/Images/heroImg.avif";
import Highlights from "../Highlights/Highlights";

const Hero = () => {
  return (
    <>
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <span className={styles.badge}>25+ YEARS OF TRUST & EXCELLENCE</span>

        <h1>
          Designing & Building <br />
          <span>Spaces That Inspire</span>
        </h1>

        <p>
          We deliver innovative construction and infrastructure solutions
          tailored for modern living and business environments — combining
          quality craftsmanship, advanced engineering, and on-time project
          delivery.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>START YOUR PROJECT</button>
          <button className={styles.secondary}>EXPLORE OUR PROJECTS</button>
        </div>
      </div>
    </section>
    <Highlights />
    </>
  );
};

export default Hero;