require("dotenv").config();

const queries = require("./src/utils/algolia_queries");

module.exports = {
    siteMetadata: {
      title: `Portfólio Online`,
      siteUrl: `https://www.yourdomain.tld`,
      author: `Wesin Alves`,
      description: `Portfólio online de Wesin Alves.`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-plugin-react-helmet",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 1200,
              },
            },
          ],
        },
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-material-ui",
      {
        resolve: `gatsby-plugin-algolia`,
        options: {
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_ADMIN_KEY,
          indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
          queries,
          chunkSize: 10000, // default: 1000
          settings: {
            // optional, any index settings
          },
          enablePartialUpdates: true, // default: false          
        },
      },
      "gatsby-plugin-sitemap",
    ]
}