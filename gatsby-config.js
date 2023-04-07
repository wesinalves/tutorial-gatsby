require("dotenv").config();

const queries = require("./src/utils/algolia_queries");

module.exports = {
    siteMetadata: {
      title: `Engenheiro Moderno`,
      siteUrl: `https://www.engmoderno.com.br`,
      author: `Wesin Alves`,
      description: `Portfólio online de Engenheiro Moderno.`,
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
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-DF3NWC9FZ9", // Google Analytics / GA            
          ],
          // This object gets passed directly to the gtag config command
          // This config will be shared across all trackingIds
          gtagConfig: {            
            anonymize_ip: true,
            cookie_expires: 0,
          },
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: false,
            // Setting this parameter is also optional
            respectDNT: true,
            // Defaults to https://www.googletagmanager.com
            //origin: "https://engmoderno.com.br",
          },
        },
      },
      {
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: `engmoderno`
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Engenheiro Moderno`,
          short_name: `Engmoderno`,
          start_url: `/`,
          icon: "src/images/perfil2.png",
          background_color: `#fffff`,
          theme_color: `#ffffff`,
          display: `standalone`,
        },
      },
    ]
}
