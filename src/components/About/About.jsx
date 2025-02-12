import React from "react";
import styles from "./About.module.css";
import skills from '../../assets/assets.js';
import { assets } from '../../assets/assets'

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>
        About
      </h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skill.imageSrc} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={assets.code} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer with experience in building interactive, responsive, and optimized web applications.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={assets.layers} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing secure, scalable, and high-performance backend systems and APIs.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={assets.coding} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>I build end-to-end software solutions, integrating frontend, backend, and databases for seamless user experiences.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};