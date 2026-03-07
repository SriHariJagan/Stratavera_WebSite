import React from "react";
import styles from "./Highlights.module.css";
import { Timer, ShieldCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    icon: <Timer size={28} />,
    title: "On-Time Delivery",
    desc: "We plan every project carefully to ensure deadlines are met without compromising quality.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Trusted Quality",
    desc: "Our construction process follows strict standards ensuring durable and reliable structures.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Expert Engineering",
    desc: "Our experienced engineers deliver modern designs built with precision and innovation.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Highlights = () => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data.map((item, index) => (
          <motion.div
            className={styles.card}
            key={index}
            variants={cardVariants}
          >
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Highlights;