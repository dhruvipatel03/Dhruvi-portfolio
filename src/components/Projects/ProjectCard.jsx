import React, { useEffect } from "react";
import styles from "./ProjectCard.module.css";
import { assets } from "../../assets/assets";

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  useEffect(() => {
    const adjustCardHeights = () => {
      const cards = document.querySelectorAll(`.${styles.container}`);
      let maxHeight = 0;

      // Find the max height among all cards
      cards.forEach((card) => {
        card.style.height = "auto"; // Reset height before calculation
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });

      // Apply max height to all cards
      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    adjustCardHeights();
    window.addEventListener("resize", adjustCardHeights); // Adjust on window resize

    return () => window.removeEventListener("resize", adjustCardHeights); // Cleanup event listener
  }, []);

  return (
    <div className={styles.container}>
      <img
        src={assets.project}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Demo
        </a>
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
