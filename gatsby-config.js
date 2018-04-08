module.exports = {
  siteMetadata: {
    title: "Mintuz",
    titlePrefix: 'CSS, Javascript and Web Performance',
    locale: 'en_GB',
    googleVerification: 'RnXDiD3_kyC6xc4y2AbSsJoXcLZvza1W7rYVHBGA89M',
    author: "Adam Bulmer",
    siteUrl: "https:/next.mintuz.com",
    twitterHandle: '@mintuz',
    seoKeywords: ['Web Performance', 'Web Developer', 'Web Developer Manchester', 'Software Engineer Manchester', 'ReactJS', 'React', 'React Components'],
    seoDescription: 'Software Engineer from Manchester writing posts on CSS, React, JavaScript and Web Performance.'
  },
  pathPrefix: `/mintuz-2017`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-11322782-9`,
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-next`
  ]
}
