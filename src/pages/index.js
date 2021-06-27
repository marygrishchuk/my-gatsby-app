import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

export default function Home({data}) {
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Create</h2>
          <h3>Develop & Deploy</h3>
          <p>Front-end developer based in Minsk.</p>
          <Link className={styles.btn} to="/projects">My Projects</Link>
        </div>
        <GatsbyImage image={getImage(data.file)} alt={'avatar'}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Avatar {
    file(relativePath: {eq: "maria.jpg"}) {
      childImageSharp {
       gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`