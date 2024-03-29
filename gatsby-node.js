/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Creates path to the nodes (md files from MarkdownRemark)
// onCreateNode runs during server start
// bunch of nodes created from the filesystem during server starts
// we are only interested on node.internal.type MarkdownRemark nodes (md files)
// other node.internal.type is SitePage, which is our .js files inside src
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        //const slug = createFilePath({ node, getNode, basePath:"blog"})
        const slug = createFilePath({ node, getNode})
        // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', slug)
        // createNodeField creates "fields" in graphql named 'slug' with value of slug for that node:node
        createNodeField({ node:node, name: `slug`, value: `/blog${slug}` })
    }
}

// Dynamically reate pages based on graphql query on slugs from each node, put component of that page from blog-post.js template
// Create pagination using src/templates/blog-list.js
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
    const blogListTemplate = path.resolve('./src/templates/blog-list.js')

    // this graphql is function string to pass graphql query, this is a node version of graphql
    // this query returns a promise of slugs. use then instead of async await
    return graphql(`
    query loadSlugQuery ($limit: Int!){
        allMdx(
            sort: { frontmatter: { date: DESC }}
            limit: $limit
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        hero_image {
                            childImageSharp {
                              gatsbyImageData(width: 100, height: 100)
                            }
                        }
                    }
                    internal {
                        contentFilePath
                        contentDigest
                    }
                }
            }
        }
    }
    `, { limit: 1000}).then(result => {
        const posts = result.data.allMdx.edges
        posts.forEach((post, index) => {
            // create prev and next on each posts render (for Blog Post Pagination, BPP)
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            // previous and next are objects props sent as pageContect object to blogPostTemplate
            createPage({
                path: post.node.fields.slug,
                component: `${blogPostTemplate}?__contentFilePath=${post.node.internal.contentFilePath}`,
                context: {
                    id: post.node.id,
                    slug: post.node.fields.slug,
                    previous,
                    next,
                },
            })
        })
        // Create blog list pages (for Blog List Pagination, BLP)
        // Assign path /2, /3, p/4, etc
        const postsPerPage = 4
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: blogListTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            });
        });
    })
}