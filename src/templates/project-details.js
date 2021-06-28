import Layout from "../components/Layout"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as style from '../styles/project-details.module.css'
import { graphql } from "gatsby"

export default function ProjectDetails({data}) {
  const {html} = data.markdownRemark
  const {title, stack, featuredImg} = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={style.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={style.featuredImg}>
          <GatsbyImage image={getImage(featuredImg)} alt={'project banner'}/>
        </div>
        <div className={style.html} dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        stack
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      html
    }
  }
`