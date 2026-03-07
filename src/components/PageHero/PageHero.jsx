import styles from "./PageHero.module.css";

const PageHero = ({ title, subtitle, badge, image }) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {badge && <span className={styles.badge}>{badge}</span>}

        <h1 className={styles.title}>{title}</h1>

        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.curve}></div>
    </section>
  );
};

export default PageHero;