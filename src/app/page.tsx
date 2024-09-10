"use client";

import Link from "next/link";
import styles from "./Home.module.css";
import aboutImg from "./images/about.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.heroTitle}>Welcome to Urbanization in Freetown</h1>
          <p className={styles.heroText}>
            Exploring the Impact of Urbanization and Population Growth on the City
            of Freetown.
          </p>
        </div>
      </header>

      <section className={styles.intro}>
        <h2 className={styles.introTitle}>About This Project</h2>
        <div className={styles.introContent}>
          <div className={styles.introText}>
          <p className="pb-8 px-0 leading-7">
              This website delves into the multifaceted issues and prospects that
              urbanization and population growth present in Freetown, Sierra Leone. 
              Our analysis is grounded in a comprehensive examination of how these 
              dynamics are reshaping the citys socio-economic fabric and environmental 
              landscape.
            </p>
            <hr />
            <p className="pt-8 px-0 leading-7">
              Urbanization in Freetown has accelerated rapidly, driven by factors such 
              as economic opportunities, rural-to-urban migration, and natural population 
              increase. This growth, while offering potential benefits like enhanced 
              economic activity and improved infrastructure, also poses significant 
              challenges. We explore how these challenges manifest in areas such as 
              housing shortages, transportation congestion, and environmental degradation.
            </p>
            
          </div>
          <div className={styles.introImage}>
            <Image src={aboutImg} alt="Urbanization" />
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Learn More</h2>
        <p>
          Explore our in-depth analysis, research, and findings on how urbanization
          is shaping the future of Freetown. From its impact on infrastructure to
          the environment, we cover it all.
        </p>
        <Link href="/about" className={styles.ctaBtn}>
          Learn More
        </Link>
      </section>
    </main>
  );
};

export default Home;
