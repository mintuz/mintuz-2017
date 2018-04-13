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

        // Create Paginated List of blog posts
        createPaginatedPages({
          edges: result.data.posts.edges,
          createPage: createPage,
          pageTemplate: "./src/templates/blog.js",
          pageLength: 5,
          pathPrefix: "blog",
        });

        createPage({
          edges: result.data.posts.edges
          path: '/',
          component: homepage,
          context: {
            path: '/'
          }
        });

        // Create blog posts pages.
        _.each(result.data.posts.edges, edge => {
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
