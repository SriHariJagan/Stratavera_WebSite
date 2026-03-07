import styles from "./ProjectsSection.module.css";
import { motion } from "framer-motion";

const projects = [
  { image: "/Images/project/project1.jpg", title: "Modern Corporate Office", location: "Hyderabad" },
  { image: "/Images/project/project2.jpg", title: "Luxury Apartment Tower", location: "Bangalore" },
  { image: "/Images/project/project2.jpg", title: "Commercial Complex", location: "Chennai" },
  { image: "/Images/project/project1.jpg", title: "Premium Residential Villa", location: "Vizag" },
];

export default function ProjectsSection() {
  return (
    <section className={styles.wrapper}>

      {/* HEADER */}
      <div className={styles.header}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
        >
          <span className={styles.label}>OUR PROJECTS</span>
          <h2 className={styles.title}>
            Engineered for Strength.<br />
            Designed for Excellence.
          </h2>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <p>
            Our portfolio showcases modern residential, commercial, and
            infrastructure projects built with precision engineering,
            high-quality materials, and contemporary architectural design.
          </p>
          <button className={styles.button}>VIEW ALL PROJECTS</button>
        </motion.div>
      </div>

      {/* PROJECT GRID */}
      <div className={styles.grid}>
        {projects.map((project, index) => {
          // Determine type: alternate full-width for every 3rd image
          const type = index % 3 === 0 ? "horizontal" : "square";

          return (
            <motion.div
              key={index}
              className={`${styles.cardWrapper} ${styles[type]}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <img src={project.image} alt={project.title} className={styles.card} />

              {/* Overlay on hover */}
              <div className={styles.overlay}>
                <div className={styles.projectInfo}>
                  <h4>{project.title}</h4>
                  <span>{project.location}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}