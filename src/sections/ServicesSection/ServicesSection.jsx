import React from "react";
import styles from "./ServicesSection.module.css";
import { Home, Building2, Wrench } from "lucide-react";
import { motion } from "framer-motion";

import img1 from "/Images/services/1.jpg";
import img2 from "/Images/services/1.jpg";
import img3 from "/Images/services/1.jpg";

const services = [
  {
    image: img1,
    icon: <Home size={30} />,
    title: "Residential Construction",
    desc: "We design and build modern homes with strong foundations, elegant architecture, and long-lasting quality.",
  },
  {
    image: img2,
    icon: <Building2 size={30} />,
    title: "Commercial Projects",
    desc: "From office spaces to commercial complexes, we deliver smart, scalable buildings tailored for business growth.",
  },
  {
    image: img3,
    icon: <Wrench size={30} />,
    title: "Renovation & Remodeling",
    desc: "Upgrade existing homes and buildings with modern design, improved functionality, and premium finishes.",
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      
      {/* SECTION HEADER */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <span className={styles.label}>OUR SERVICES</span>
        <h2>Complete Construction Solutions</h2>
      </motion.div>

      {/* SERVICE CARDS */}
      <div className={styles.cards}>
        {services.map((service, index) => (
          <motion.div
            className={styles.card}
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <img src={service.image} alt={service.title} />

            <div className={styles.cardContent}>
              <div className={styles.icon}>{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <a href="#">ENQUIRE NOW</a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;