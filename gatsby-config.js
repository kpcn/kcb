module.exports = {
  siteMetadata: {
    title: "KC's Blog",
    description: 'Just musing on the things I like, especially on Web Dev',
    siteUrl: 'https://kcnk.me',
    author: 'Ko Chan',
    image: 'https://kcnk.me/images/kcb-ws-img.png',
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
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
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
            options: {
              classPrefix: ['language-js', 'language-bash'],
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 300,
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
