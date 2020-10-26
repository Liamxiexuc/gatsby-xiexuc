/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`);
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
        name: 'contents',
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
