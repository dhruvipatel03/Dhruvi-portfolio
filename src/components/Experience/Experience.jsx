import React from "react";
import historyData from "../../data/history.json"; // Ensure correct path
import styles from "./Experience.module.css"; // Import CSS file

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {historyData.map((exp, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            {/* Timeline Circle (Icon) */}
            <div className={styles.timelineCircle}>
              
            </div>

            {/* Experience Content */}
            <div className={styles.timelineContent}>
              <h3 className={styles.role}>{exp.role}</h3>
              <p className={styles.organisation}>{exp.organisation}</p>
              <p className={styles.date}>{exp.startDate} - {exp.endDate}</p>
              <ul className={styles.experiences}>
                {exp.experiences.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
