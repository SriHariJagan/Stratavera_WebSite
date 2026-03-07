import React, { useState } from "react";
import styles from "./projects.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import homeImg from "/Images/heroImg.avif";
import officeImg from "/Images/services/1.jpg";
import PageHero from "../../components/PageHero/PageHero";

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14
    }
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    transition: { duration: 0.35 }
  }
};

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Modern Home",
      description:
        "2,800 sq. ft. residential build with outdoor living space and energy-efficient upgrades.",
      image: homeImg,
      type: "Residential",
      status: "completed",
      highlights: [
        "Completed in 6 months",
        "$450K budget",
        "Energy rating: 5-star"
      ]
    },
    {
      title: "Office Hub",
      description:
        "6,000 sq. ft. two-story office space with conference rooms and ADA compliance.",
      image: officeImg,
      type: "Commercial",
      status: "upcoming",
      highlights: [
        "Completed in 9 months",
        "20-person capacity",
        "Delivered 3 weeks early"
      ]
    }
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Where Ideas Become Landmarks"
        badge="BUILT TO LAST"
        image={homeImg}
      />

      <section className={styles.projectsSection}>
        {/* HEADER */}

        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <span className={styles.label}>BUILT TO LAST</span>

          <h2>Where Ideas Become Landmarks</h2>

          {/* FILTER BUTTONS */}

          <div className={styles.filters}>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setFilter("all")}
              className={filter === "all" ? styles.active : ""}
            >
              ALL
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setFilter("completed")}
              className={filter === "completed" ? styles.active : ""}
            >
              COMPLETED PROJECTS
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setFilter("upcoming")}
              className={filter === "upcoming" ? styles.active : ""}
            >
              UPCOMING PROJECTS
            </motion.button>
          </div>
        </motion.div>

        {/* PROJECT GRID */}

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;

/* ---------------- PROJECT CARD ---------------- */

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      variants={cardAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{
        y: -12,
        scale: 1.03
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18
      }}
      className={styles.card}
    >
      {/* IMAGE */}

      <motion.div
        className={styles.image}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <img src={project.image} alt={project.title} />
      </motion.div>

      {/* CONTENT */}

      <div className={styles.content}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <h4>Highlights</h4>

        <ul>
          {project.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FaCheckCircle /> {h}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* FOOTER */}

      <div className={styles.footer}>
        Type: {project.type}
      </div>
    </motion.div>
  );
};