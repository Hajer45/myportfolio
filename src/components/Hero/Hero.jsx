import React from "react";

import styles from "./Hero.module.css";
import getImageUrl from "../../data/hajer.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Hajer</h2>
        <p className={styles.description}>
        I am a freelancer with a passion for competitive programming, web development, and data science.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
