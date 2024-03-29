require("dotenv").config()

const postQuery = `{
    posts: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
            objectID: id
            fields {
              slug              
            }
            frontmatter {
              category
              color
              description
              hero_image {
                childImageSharp {
                  gatsbyImageData(width: 200, height: 200)
                }
              }
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")                  
              title
              date_timestamp: date
            }
            internal{
              contentDigest
            }
            excerpt(pruneLength: 5000)
            modified: frontmatter{date}
          }
        }
      }  
    }`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
    {
      query: postQuery,
      transformer: ({ data }) => flatten(data.posts.edges),
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      settings,
    },
  ]
  
  module.exports = queries