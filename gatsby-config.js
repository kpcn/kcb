const path = require('path');

module.exports = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: "KC's Blog",
    description: 'Some thoughts on the things I like, especially on Web Dev',
    siteUrl: 'https://kcnk.me',
    author: 'Ko Chan',
    image: 'https://kcnk.me/images/kc-img.png',
    socialHandles: {
      github: 'kpcn',
      codesandbox: 'kpcn',
      twitter: 'kchancnk',
    },
    organization: {
      name: "KC's Blog",
      url: 'https://kcnk.me',
      logo: 'https://kcnk.me/icons/icon-512x512.png',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@components': path.join(__dirname, 'src/components'),
        '@shortcodes': path.join(__dirname, 'src/mdx-shortcodes'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@images': path.join(__dirname, 'src/images'),
        '@pages': path.join(__dirname, 'src/pages'),
        '@templates': path.join(__dirname, 'src/templates'),
        '@styles': path.join(__dirname, 'src/styles'),
        '@utils': path.join(__dirname, 'src/utils'),
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `src/images/icon.png`,
        name: `Ko Chan's Blog`,
        short_name: `KC's Blog`,
        start_url: `/`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    'gatsby-remark-images',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        plugins: ['gatsby-remark-prismjs'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 300,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `kcnk`,
      },
    },
  ],
};
