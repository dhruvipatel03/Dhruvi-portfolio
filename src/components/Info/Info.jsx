import React from 'react'
import styles from './Info.module.css'
import { assets } from '../../assets/assets'

export const Info = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
          <div className={styles.hey}>Hey, </div>
          <div className={styles.name}> I'm Dhruvi patel
          </div>
          </h1>
        <p className={styles.description}>A tech enthusiast with a strong passion for innovation and problem-solving.I am eager to explore new opportunities and contribute to the ever-evolving world of software development,With a keen eye for technology and a drive to build impactful solutions.</p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>Connect with Me</a>
       
    </div>
    <img className={styles.mypic} src={assets.mypic} alt="" />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}

export default Info