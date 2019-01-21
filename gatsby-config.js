module.exports = {
  pathPrefix: "/reponame",
  siteMetadata: {
    title: '@latina_codes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
      },
    },
    'gatsby-plugin-offline',
  ],
}
