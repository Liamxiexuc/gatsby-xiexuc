/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const os = require('os');
const Linux_DIR = __dirname;
const Win_DIR = Linux_DIR.replace(/\\/g,'\/');
const DIR_NAME = os.type() === 'Windows_NT' ? Win_DIR : Linux_DIR;

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: 'gatsby-xiexuc',
      author: 'Xiexu Chen'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${DIR_NAME}/src/styles/styles";`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
