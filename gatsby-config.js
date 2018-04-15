module.exports = {
  siteMetadata: {
    title: 'Interplay Project',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',

    // gatsby-plugin-netlify must be the last plugin
    {
      // https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          "/*": [
            "Basic-Auth: interplay:drafty-parcel-subject",
          ],
        },
      },
    },
  ],
};
