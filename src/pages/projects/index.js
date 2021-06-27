import React from "react"
import Layout from "../../components/Layout"
import * as styles from '../../styles/projects.module.css'
import { graphql, Link } from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

const Projects = ({data}) => {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Apps & Websites I've Created</h3>
        <div className={styles.projects}>
          {
            projects.map(project => (
              <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
                <div>
                  <GatsbyImage image={getImage(project.frontmatter.thumb)} alt={'project banner'}/>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            ))
          }
        </div>
        <p>You can email me at {contact}</p>
      </div>
    </Layout>
  )
}

export default Projects

//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
