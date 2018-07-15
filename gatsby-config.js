module.exports = {
  siteMetadata: {
    siteTitle: "Mintuz",
    siteTitlePrefix: 'CSS, Javascript and Web Performance',
    locale: 'en_GB',
    googleVerification: 'RnXDiD3_kyC6xc4y2AbSsJoXcLZvza1W7rYVHBGA89M',
    author: "Adam Bulmer",
    siteUrl: "https://mintuz.com",
    twitterHandle: '@mintuz',
    description: 'Software Engineer from Manchester writing posts on CSS, React, JavaScript and Web Performance.',
    keywords: ['Web Performance', 'Web Developer', 'Web Developer Manchester', 'Software Engineer Manchester', 'ReactJS', 'React', 'React Components']
  },
  pathPrefix: `/mintuz-2017`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    },
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-next`,
    `gatsby-remark-prismjs`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteTitle
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mintuz",
        short_name: "Mintuz",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#EE403D",
        display: "minimal-ui",
        icon: "src/images/icon.png"
      },
    },
  ]
}
