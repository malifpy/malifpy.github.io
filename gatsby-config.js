const remarkMath = require(`remark-math`);

module.exports = {
  siteMetadata: {
    siteUrl: "https://malifpy.github.io",
    title: "Experimental Static Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/post`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
            },
          },
          `gatsby-remark-katex`,
        ],
        remarkPlugins: [remarkMath],
      },
    },
  ],
};
