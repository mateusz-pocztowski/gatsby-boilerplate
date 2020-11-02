// const activeEnv =
//   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

// require('dotenv').config({
//   path: `.env.${activeEnv}`,
// })

module.exports = {
  siteMetadata: {
    title: `Title`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/MainLayout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Montserrat',
            weights: ['300', '400', '500', '600', '700'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/assets/images/favicon.png`,
      },
    },
  ],
};
