import React from "react";
import styles from "./Contact.module.css";
import { assets } from "../../assets/assets";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let's connect and build something amazing!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={assets.gmail} alt="Email icon" />
          <a href="mailto:dhruvipatel1033@email.com">mymail@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={assets.lin} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/dhruvi-patel-588534255/">linkedin.com/account</a>
        </li>
        <li className={styles.link}>
          <img src={assets.git} alt="Github icon" />
          <a href="https://github.com/dhruvipatel03">github.com/account</a>
        </li>
      </ul>
    </footer>
  );
};
