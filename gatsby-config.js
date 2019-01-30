require(`dotenv`).config({ path: `.env` });

module.exports = {
  siteMetadata: {
    title: `Mij`,
    siteUrl: `https://mijung.io`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: 'UA-133426620-1',
        head: false,
        anonymize: true,
      },
    },
  ],
};
