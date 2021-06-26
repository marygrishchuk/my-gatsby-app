import React from "react"
import Layout from "../../components/Layout"
import * as styles from '../../styles/projects.module.css'

const Projects = () => {
  return (
    <Layout>
      <div className={styles.projects}>
        <h2>Projects</h2>
        <h3>Apps & Websites I've Created</h3>
      </div>
    </Layout>
  )
}

export default Projects