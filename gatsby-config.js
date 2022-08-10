require("dotenv").config();

const queries = require("./src/utils/algolia_queries");

module.exports = {
    siteMetadata: {
      title: `Portfólio Online`,
      siteUrl: `https://www.engmoderno.com.br`,
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
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "G-DF3NWC9FZ9",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 0,
          // Defers execution of google analytics script after page load
          defer: false,
          // Any additional optional fields
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          cookieDomain: "engmoderno.com.br",
          // defaults to false
          enableWebVitalsTracking: true,
        },
      },
    ]
}