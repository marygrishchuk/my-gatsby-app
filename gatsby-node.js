const path = require(`path`)

// Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const projectTemplate = path.resolve(`./src/templates/project-details.js`)
  const {data} = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}