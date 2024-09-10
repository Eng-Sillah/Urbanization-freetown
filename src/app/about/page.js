"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./About.module.css";
import aboutImg from "../images/about.jpg";

const About = () => {
  return (
    <main className={styles.container}>
      <section className={styles.aboutSection}>
        <div className={styles.textContainer}>
          <h1 className={styles.aboutTitle}>About the Project</h1>
          <p className={styles.aboutText}>
            This project, titled &quot;Urbanization and Population Growth in Freetown: Challenges and Opportunities,&quot;
            aims to explore how rapid urbanization is impacting the socio-economic and environmental landscape of Freetown.
          </p>
          <p className={styles.aboutText}>
            The study investigates key areas such as housing, infrastructure, economic development, and environmental sustainability. 
            With the population increasing at an unprecedented rate, this research sheds light on the strains placed on the city&apos;s resources, the challenges posed by informal settlements, and the opportunities for future urban planning and development.
          </p>
          <p className={styles.aboutText}>
            By analyzing urbanization trends and their effects on Freetown, we aim to contribute valuable insights that can inform sustainable urban development strategies. 
            The findings of this project highlight the need for better management of urban spaces, environmental protection, and the improvement of public services to accommodate the growing population.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={aboutImg}
            alt="Urbanization in Freetown"
            className={styles.aboutImage}
          />
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Discover More</h2>
        <p className={styles.ctaText}>
          To explore our in-depth research, findings, and recommendations on urbanization in Freetown, visit our full project documentation.
        </p>
        <Link href="/documentation" className={styles.ctaBtn}>
          View Documentation
        </Link>
      </section>
    </main>
  );
};

export default About;
