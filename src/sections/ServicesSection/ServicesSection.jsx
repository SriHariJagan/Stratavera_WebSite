import React from "react";
import styles from "./ServicesSection.module.css";
import { FileText, Network, ClipboardList, DollarSign, Gavel } from "lucide-react";import { motion } from "framer-motion";

import img1 from "/Images/services/1.jpg";
import img2 from "/Images/services/1.jpg";
import img3 from "/Images/services/1.jpg";
import img4 from "/Images/services/1.jpg";
import img5 from "/Images/services/1.jpg";

const services = [
  {
    image: img1,
    icon: <FileText size={30} />,
    title: "Feasibility Studies & DPRs",
    desc: "Comprehensive feasibility studies and Detailed Project Reports (DPRs) to evaluate project viability, costs, risks, and long-term sustainability.",
  },
  {
    image: img2,
    icon: <Network size={30} />,
    title: "Project Structuring & PPP Advisory",
    desc: "Strategic project structuring and Public-Private Partnership (PPP) advisory to ensure efficient collaboration, compliance, and financial feasibility.",
  },
  {
    image: img3,
    icon: <ClipboardList size={30} />,
    title: "Project Management Consultancy",
    desc: "End-to-end project management services ensuring timely delivery, quality control, cost management, and seamless coordination between stakeholders.",
  },
  {
    image: img4,
    icon: <DollarSign size={30} />,
    title: "Financing Strategy",
    desc: "Expert guidance in developing financing strategies, identifying funding sources, and structuring financial models for successful project execution.",
  },
  {
    image: img5,
    icon: <Gavel size={30} />,
    title: "Bid Process Management",
    desc: "Professional bid management services including tender preparation, evaluation, documentation, and transparent procurement support.",
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