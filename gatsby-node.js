const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const select = require(`unist-util-select`);
const fs = require(`fs-extra`);
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/post.js");
    const homepage = path.resolve("./src/templates/index.js");

    resolve(
      graphql(`
        {
          posts: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  path
                  type
                  features
                }
                excerpt
              }
            }
          }
      }
    `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.posts.edges.filter((edge) => {
          return edge.node.frontmatter.type === 'post';
        });

        const pages = result.data.posts.edges.filter((edge) => {
          return edge.node.frontmatter.type === 'page';
        });

        // Create Paginated List of blog posts
        createPaginatedPages({
          edges: posts,
          createPage: createPage,
          pageTemplate: "./src/templates/blog.js",
          pageLength: 5,
          pathPrefix: "blog"
        });

        // Create homepage
        createPage({
          edges: posts,
          path: '/',
          component: homepage,
          context: {
            path: '/'
          }
        });

        // Create blog posts.
        _.each(posts, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path
            },
          })
        })

        // Create blog pages.
        _.each(pages, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path
            },
          })
        })
      })
    )
  })
}
