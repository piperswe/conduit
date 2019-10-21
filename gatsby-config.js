module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-manifest',
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
