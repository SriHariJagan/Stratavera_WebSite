import React, { useEffect, useState } from "react";
import styles from "./AboutSection.module.css";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import mainImg from "/Images/aboutUs/homeAboutus_main.jpg";
import smallImg from "/Images/aboutUs/homeAboutus_small.jpg";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}+</span>;
};

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>

        {/* LEFT IMAGES */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={mainImg} alt="construction project" className={styles.mainImage} />

          {/* floating image */}
          <motion.img
            src={smallImg}
            alt="construction detail"
            className={styles.smallImage}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* glass badge */}
          {/* <div className={styles.badge}>
            <strong>10+</strong>
            <span>Years Experience</span>
          </div> */}
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>ABOUT OUR COMPANY</span>

          <h2>
            Building Modern Spaces <br />
            With Quality & Precision
          </h2>

          <p>
            We specialize in delivering high-quality residential and commercial
            construction projects with a strong focus on durability, modern
            design, and engineering excellence. Our experienced team combines
            innovation, craftsmanship, and reliable project management to
            transform ideas into exceptional built environments.
          </p>

          <ul className={styles.list}>
            <li>
              <CheckCircle size={18} /> <Counter target={200} /> Projects Completed
            </li>
            <li>
              <CheckCircle size={18} /> Certified Engineers & Skilled Workforce
            </li>
            <li>
              <CheckCircle size={18} /> Modern Construction & Architectural Solutions
            </li>
            <li>
              <CheckCircle size={18} /> <Counter target={50} /> Happy Clients
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;