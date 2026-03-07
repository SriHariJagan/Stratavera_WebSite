import React from "react";
import styles from "./services.module.css";
import { motion } from "framer-motion";

import { FaClipboardList, FaDraftingCompass, FaUsers, FaCheckCircle } from "react-icons/fa";

import serviceImg from "/Images/heroImg.avif";
import PageHero from "../../components/PageHero/PageHero";

/* ---------------- ANIMATION VARIANTS ---------------- */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut"
    }
  }
};

const Services = () => {

  const services = [
    {
      title: "Feasibility Studies & Detailed Project Reports",
      description:
        "We help transform infrastructure concepts into viable and investment-ready projects through comprehensive feasibility studies and Detailed Project Reports (DPRs).",
      benefits: [
        "Technical and financial feasibility analysis",
        "Demand forecasting and market assessment",
        "Preparation of Detailed Project Reports (DPR)",
        "Policy, regulatory, and environmental evaluation"
      ],
      image: serviceImg
    },
    {
      title: "Project Structuring & PPP Advisory",
      description:
        "Our team provides expert advisory in structuring infrastructure projects and designing Public-Private Partnership (PPP) models that attract investment.",
      benefits: [
        "Design of PPP frameworks",
        "Project structuring for investment readiness",
        "Risk allocation and contract structuring",
        "Strategic advisory for large infrastructure initiatives"
      ],
      image: serviceImg
    },
    {
      title: "Project Management Consultancy",
      description:
        "We provide end-to-end project management consultancy services ensuring infrastructure projects are delivered efficiently and successfully.",
      benefits: [
        "Project planning and monitoring",
        "Stakeholder coordination",
        "Quality assurance and risk management",
        "Performance tracking and reporting"
      ],
      image: serviceImg
    },
    {
      title: "Financing Strategy",
      description:
        "We design robust financing strategies and financial models to help infrastructure projects secure sustainable funding.",
      benefits: [
        "Financial modeling and analysis",
        "Funding strategy development",
        "Debt and equity structuring",
        "Investor and lender engagement support"
      ],
      image: serviceImg
    },
    {
      title: "Bid Process Management",
      description:
        "Our bid management services support clients through transparent procurement processes ensuring competitive and efficient project delivery.",
      benefits: [
        "Tender preparation and documentation",
        "Bid evaluation support",
        "Procurement process management",
        "Transaction advisory and negotiation"
      ],
      image: serviceImg
    }
  ];

  const processSteps = [
    {
      icon: <FaClipboardList />,
      title: "Project Assessment",
      text:
        "We evaluate project feasibility through detailed technical and financial analysis."
    },
    {
      icon: <FaDraftingCompass />,
      title: "Strategy & Structuring",
      text:
        "Our experts design project structures, financing models, and PPP frameworks."
    },
    {
      icon: <FaUsers />,
      title: "Execution Support",
      text:
        "We guide procurement, bidding, and implementation to ensure project success."
    }
  ];

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Infrastructure Advisory & Strategic Project Consulting"
        badge="SERVICES"
        image={serviceImg}
      />

      <div className={styles.servicesPage}>
        <ServicesGrid services={services} />
        <ProcessSection steps={processSteps} />
      </div>
    </>
  );
};

export default Services;

/* ---------------- SERVICES GRID ---------------- */

const ServicesGrid = ({ services }) => {
  return (
    <section className={styles.servicesSection}>

      <motion.span
        className={styles.label}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        WHAT WE DO
      </motion.span>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Advisory Services Across the Infrastructure Lifecycle
      </motion.h2>

      <motion.p
        className={styles.sectionText}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        We provide end-to-end advisory services across infrastructure
        sectors including transport, logistics, urban infrastructure,
        and real estate.
      </motion.p>

      <motion.div
        className={styles.servicesGrid}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </motion.div>

    </section>
  );
};

/* ---------------- SERVICE CARD ---------------- */

const ServiceCard = ({ service, index }) => {

  return (
    <motion.div
      className={styles.serviceCard}
      variants={fadeUp}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120 }}
    >

      <div className={styles.serviceImage}>
        <img src={service.image} alt={service.title} />
      </div>

      <div className={styles.serviceContent}>
        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <ul className={styles.benefits}>
          {service.benefits.map((benefit, i) => (
            <li key={i}>
              <FaCheckCircle className={styles.checkIcon} />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

    </motion.div>
  );
};

/* ---------------- PROCESS SECTION ---------------- */

const ProcessSection = ({ steps }) => {
  return (
    <section className={styles.processSection}>

      <motion.span
        className={styles.label}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        OUR PROCESS
      </motion.span>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Our Approach to Infrastructure Advisory
      </motion.h2>

      <motion.p
        className={styles.processText}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Our approach combines technical expertise, financial insight,
        and policy understanding to deliver high-impact infrastructure
        projects for governments and private sector clients.
      </motion.p>

      <motion.div
        className={styles.processGrid}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, i) => (
          <ProcessCard key={i} step={step} />
        ))}
      </motion.div>

      <motion.button
        className={styles.consultBtn}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        REQUEST CONSULTATION
      </motion.button>

    </section>
  );
};

/* ---------------- PROCESS CARD ---------------- */

const ProcessCard = ({ step }) => {
  return (
    <motion.div
      className={styles.processCard}
      variants={fadeUp}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
    >

      <div className={styles.iconBox}>{step.icon}</div>

      <h4>{step.title}</h4>

      <p>{step.text}</p>

    </motion.div>
  );
};