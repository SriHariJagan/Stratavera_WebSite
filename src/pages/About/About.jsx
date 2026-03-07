import PageHero from "../../components/PageHero/PageHero";
import styles from "./About.module.css";
import heroImg from "/Images/aboutUs/homeAboutus_main.jpg";
import img1 from "/Images/aboutUs/homeAboutus_main.jpg";
import img2 from "/Images/aboutUs/homeAboutus_main.jpg";
import img3 from "/Images/aboutUs/homeAboutus_main.jpg";
import worker from "/Images/aboutUs/homeAboutus_main.jpg";

import { FaEye, FaBullseye, FaGem } from "react-icons/fa";
import { motion } from "framer-motion";

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const About = () => {

  const stats = [
    {
      type: "text",
      title: "Projects",
      value: "100+",
      description:
        "Completed residential projects across Austin and Central Texas with exceptional precision.",
    },
    { type: "image", image: img1 },

    {
      type: "text",
      title: "Happy Clients",
      value: "80+",
      description:
        "We have earned the trust of satisfied homeowners and businesses.",
    },

    { type: "image", image: img2 },

    {
      type: "highlight",
      title: "Commitment",
      value: "110%",
      description:
        "We go above and beyond with dedication to transparency and quality.",
    },

    { type: "image", image: img3 },
  ];

  const values = [
    {
      title: "Our Vision",
      desc: "To revolutionize the construction industry through innovation.",
      icon: <FaEye />,
    },
    {
      title: "Our Mission",
      desc: "Deliver exceptional construction services with integrity.",
      icon: <FaBullseye />,
    },
    {
      title: "Our Values",
      desc: "Commitment, sustainability and trust define everything we do.",
      icon: <FaGem />,
    },
  ];

  return (
    <div className={styles.aboutPage}>

      <PageHero
        title="About Us"
        subtitle="Building With Purpose, Backed by Trust"
        badge="ABOUT"
        image={heroImg}
      />

      <StatsGrid stats={stats} />

      <ValuesSection values={values} />

      <WhyChoose />

    </div>
  );
};

export default About;


/* ---------------- STATS GRID ---------------- */

const StatsGrid = ({ stats }) => {
  return (
    <section className={styles.statsSection}>

      <motion.div
        className={styles.statsHeader}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <h2>Built in Austin. Trusted Across Central Texas.</h2>
        <p>
          At Brikly we believe construction is more than structures.
          It is about delivering lasting value and meaningful spaces.
        </p>
      </motion.div>

      <motion.div
        className={styles.statsGrid}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {stats.map((item, index) => {

          if (item.type === "image") {
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
                className={styles.imageCard}
              >
                <img src={item.image} alt="" />
              </motion.div>
            );
          }

          if (item.type === "highlight") {
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className={styles.highlightCard}
              >
                <span>{item.title}</span>
                <h3>{item.value}</h3>
                <p>{item.description}</p>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }}
              className={styles.textCard}
            >
              <span>{item.title}</span>
              <h3>{item.value}</h3>
              <p>{item.description}</p>
            </motion.div>
          );

        })}
      </motion.div>

    </section>
  );
};


/* ---------------- VALUES ---------------- */

const ValuesSection = ({ values }) => {
  return (
    <section className={styles.values}>

      <motion.span
        className={styles.sectionLabel}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        VALUES
      </motion.span>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Vision, Mission & Values
      </motion.h2>

      <motion.div
        className={styles.valuesGrid}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {values.map((v, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.04 }}
            className={styles.valueCard}
          >
            <div className={styles.icon}>{v.icon}</div>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};


/* ---------------- WHY CHOOSE ---------------- */

const WhyChoose = () => {
  return (
    <section className={styles.whyChoose}>

      <motion.div
        className={styles.whyImage}
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <img src={worker} alt="" />
      </motion.div>

      <motion.div
        className={styles.whyContent}
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >

        <span className={styles.sectionLabel}>OUR PROMISE</span>

        <h2>What Drives Us</h2>

        <p>
          We stand firmly behind our commitment to transparency,
          reliability and craftsmanship.
        </p>

        <ul>
          <li>Licensed, bonded, and insured professionals</li>
          <li>Transparent pricing and communication</li>
          <li>Reliable timelines</li>
          <li>Quality craftsmanship</li>
        </ul>

      </motion.div>

    </section>
  );
};