import React from "react";
import styles from "./contact.module.css";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaFacebook,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

import PageHero from "../../components/PageHero/PageHero";
import heroImg from "/Images/heroImg.avif";

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Let's Build Something Amazing Together"
        badge="WE ARE HERE"
        image={heroImg}
      />

      <section className={styles.contactSection}>
        <motion.div
          className={styles.contactGrid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {/* LEFT CONTENT */}

          <motion.div variants={fadeUp} className={styles.contactInfo}>
            <span className={styles.label}>WE'RE HERE TO HELP</span>

            <h2>Let’s Talk About Your Next Build!</h2>

            <p>
              Fill out the form or give us a call to stop by our office for a
              coffee. Let’s start building something great together.
            </p>

            <div className={styles.googleReview}>
              ⭐⭐⭐⭐⭐ <span>200+ Reviews (4.9/5)</span>
            </div>
          </motion.div>

          {/* CONTACT FORM */}

          <motion.form variants={fadeUp} className={styles.form}>
            <div className={styles.row}>
              <input placeholder="First Name*" />
              <input placeholder="Last Name*" />
            </div>

            <div className={styles.row}>
              <input placeholder="Email*" />
              <input placeholder="Phone Number*" />
            </div>

            <textarea placeholder="Your Message*" rows="5"></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.button}
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>

        {/* CONTACT INFO CARDS */}

        <div className={styles.infoSection}>
          <div className={styles.sectionHeader}>
            <span>WE ARE HERE</span>
            <h2>Find us on Google</h2>
          </div>

          <motion.div
            className={styles.infoGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div variants={fadeUp} className={styles.infoCard}>
              <FaMapMarkerAlt />
              <h4>Address</h4>
              <p>Chicago Heights, TX 60411</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.infoCard}>
              <FaEnvelope />
              <h4>Send Email</h4>
              <p>info@company.com</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.infoCard}>
              <FaPhoneAlt />
              <h4>Call Us</h4>
              <p>+888 (246) 642-2710</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.infoCard}>
              <FaPaperPlane />
              <h4>Follow Us</h4>

              <div className={styles.socials}>
                <FaFacebook />
                <FaInstagram />
                <FaYoutube />
              </div>
            </motion.div>
          </motion.div>

          {/* MAP */}

          <motion.div
            className={styles.map}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=london&t=&z=11&ie=UTF8&iwloc=&output=embed"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}