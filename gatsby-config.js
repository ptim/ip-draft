module.exports = {
  siteMetadata: {
    title: 'Interplay Project',
    siteUrl: 'https://interplayproject.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Interplay Project',
        short_name: 'Interplay',
        start_url: '/',
        background_color: '#008fb4',
        theme_color: '#008fb4',
        display: 'minimal-ui',
        icon: 'src/assets/icon-512.png', // This path is relative to the root of the site.
      },
    },

    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N4Z8CVF',
        // a lookup table is configured to track by environment
        includeInDevelopment: true,
      },
    },

    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',

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
