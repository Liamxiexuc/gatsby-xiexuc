const path = require(`path`);
const os = require('os');
const Linux_DIR = __dirname;
const Win_DIR = Linux_DIR.replace(/\\/g,'\/');
const DIR_NAME = os.type() === 'Windows_NT' ? Win_DIR : Linux_DIR;

module.exports = {
  siteMetadata: {
    title: 'gatsby-xiexuc',
    author: 'Xiexu Chen',
    description: 'Personal blog by Xiexu Chen. I make websites.',
    url: 'https://xiexuc.xyz',
    menuLinks: [
      {
        name: 'Landing',
        link: '/'
      },
      {
        name: 'Home',
        link: '/home/'
      },
      {
        name: 'Projects',
        link: '/project/'
      },
      {
        name: 'Blog',
        link: '/blog/'
      },
      {
        name: 'Gallery',
        link: '/gallery/'
      },
      {
        name: 'Contact',
        link: '/contact/'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "256111289",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0
      },
    },
    `gatsby-plugin-react-helmet`,
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
        path: `${__dirname}/src/assets/`
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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xiexuc.xyz`,
        short_name: `Xiexuc`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      },
    },
  ]
}
