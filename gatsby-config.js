module.exports = {
  siteMetadata: {
    title: "The English Bookshop | Used bookshop for expats & locals in Saint Antonin Noble Val, France",
    author: "Laurie Copley",
    description: "Used bookshop for expats & locals in Saint Antonin Noble Val, France"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The English Bookshop',
        short_name: 'English Bookshop',
        start_url: '/',
        background_color: '#0f75bc',
        theme_color: '#0f75bc',
        display: 'minimal-ui',
        icon: 'src/images/englishbookshop-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
