import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Create</h2>
          <h3>Develop & Deploy</h3>
          <p>Front-end developer based in Minsk.</p>
          <Link className={styles.btn} to="/projects">My Projects</Link>
        </div>
        <img src="/maria.jpg" alt="avatar" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  )
}