require(`dotenv`).config({ path: `.env` });

module.exports = {
  siteMetadata: {
    name: `Hello Worldldlddldld`,
    tagline: `mij is cool`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: $GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: $GATSBY_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      },
    },
  ],
};
