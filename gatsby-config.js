module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Conduit Implementations',
        short_name: 'Conduit Impl.',
        start_url: '/',
        theme_color: '#594E52',
      },
    },
    'gatsby-plugin-nprogress',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-images',
        ],
      },
    },

    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',

    { resolve: 'gatsby-source-filesystem', options: { path: './src/data/' } },
  ],
};
