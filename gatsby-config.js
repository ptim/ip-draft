module.exports = {
  siteMetadata: {
    title: 'Interplay Project',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog/`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',

    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-N4Z8CVF',
        // a lookup table is configured to track by environment
        includeInDevelopment: true,
      },
    },

    // gatsby-plugin-netlify must be the last plugin
    {
      // > enable HTTP/2 server push of critical Gatsby assets through the Link headers.
      // https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          // > Basic-Auth is only available if you’re on a Teams Pro plan (US$45pcm) or higher.
          // https://www.netlify.com/docs/headers-and-basic-auth/#basic-auth
          // "/*": [
          //   "Basic-Auth: interplay:drafty-parcel-subject",
          // ],
        },
      },
    },
  ],
}
