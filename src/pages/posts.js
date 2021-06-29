import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import * as style from "../styles/posts.module.css"

export default function Posts({ data }) {
  const { authorName, authorAvatar, date, image, text, attachmentUrl } = data.contentfulPost

  return (
    <Layout>
      <div className={style.postsPage}>
        <h2>Posts</h2>
        <h3>A post from Contentful</h3>
        <div className={style.posts}>
          <div className={style.post}>
            <div className={style.postHeader}>
              <div>
                <GatsbyImage image={getImage(authorAvatar)}
                             className={style.avatar}
                             alt={"author's avatar"} />
              </div>
              <div>
                <strong>{authorName}</strong>
                <div>{new Date(date).toLocaleString()}</div>
              </div>
            </div>
            <p>{text.text}</p>
            <Link to={attachmentUrl}>
              <GatsbyImage image={getImage(image)} alt={"post image"} />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Post {
    contentfulPost {
      authorName
      authorAvatar {
        gatsbyImageData(layout: CONSTRAINED)
      }
      date
      image {
        gatsbyImageData(layout: CONSTRAINED)
      }
      text {
        text
      }
      attachmentUrl
    }
  }
`