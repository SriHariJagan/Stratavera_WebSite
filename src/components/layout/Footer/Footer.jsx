import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* CTA SECTION */}
      <div className={styles.cta}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaLeft}>
            <span className={styles.small}>
              START YOUR CONSTRUCTION PROJECT
            </span>
            <h2>
              Building the Future,
              <br />
              Together
            </h2>
          </div>

          <div className={styles.ctaRight}>
            <p>
              We transform ideas into strong and elegant structures. Let our
              expert team bring your residential or commercial project to life
              with precision and quality.
            </p>

            <button className={styles.ctaBtn}>GET A FREE CONSULTATION</button>
          </div>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className={styles.footerContent}>
        {/* BRAND */}
        <div className={styles.brand}>
          <h3><img src="/Images/logo.png" alt="logo" width={200}/></h3>

          <p>
            BuildCraft is a modern construction company delivering high-quality
            residential, commercial, and infrastructure projects with
            reliability, innovation, and excellence.
          </p>

          <div className={styles.socials}>
            <Facebook size={45} />
            <Instagram size={45} />
            <Youtube size={45} />
            <Twitter size={45} />
          </div>
        </div>

        {/* COMPANY */}
        <div className={styles.links}>
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className={styles.links}>
          <h4>Services</h4>

          <Link to="/services/feasibility-dprs">
            Feasibility Studies & DPRs
          </Link>

          <Link to="/services/project-structuring-ppp-advisory">
            Project Structuring & PPP Advisory
          </Link>

          <Link to="/services/project-management-consultancy">
            Project Management Consultancy
          </Link>

          <Link to="/services/financing-strategy">Financing Strategy</Link>

          <Link to="/services/bid-process-management">
            Bid Process Management
          </Link>
        </div>

        {/* CONTACT */}
        <div className={styles.contact}>
          <h4>Contact Us</h4>

          <div className={styles.contactItem}>
            <Phone size={35} />
            <div>
              <span>Call Us</span>
              <p>+91 9810417398</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <Mail size={35} />
            <div>
              <span>Email</span>
              <p>mohit.sinha@stratavera.in</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <MapPin size={35} />
            <div>
              <span>Office</span>
              <p>Gurugram, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <span>
          © {new Date().getFullYear()} BuildCraft. All rights reserved.
        </span>
        <span>Designed & Developed with Precision</span>
      </div>
    </footer>
  );
};

export default Footer;
