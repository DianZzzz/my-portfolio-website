/**
 * @type {import('gatsby').GatsbyConfig}
 */

const config = require("./src/config");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
    image: "/og.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Dian Zhao",
        short_name: "Dian Zhao",
        start_url: "/",
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: "minimal-ui",
        icon: "src/images/logo.png",
      },
    },
  ],
};
