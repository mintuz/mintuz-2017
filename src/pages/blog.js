import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Header from '../components/header';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <React.Fragment>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Header mode={'compact'} title="Blog Posts" />
        <div className="o-main u-pv++ p-post">
            <div className="o-wrap">
                <div className="o-grid">
                    <div className="o-grid__col o-grid__col--1/1 o-grid__col--2/3@bp-m p-post__body">
                      {posts.map(post => {
                        if (post.node.path !== '/404/') {
                          return (
                            <article key={post.node.frontmatter.path} className="o-article-list__item">
                              <h1 className="u-type-double-pica u-mb+">
                                <Link to={post.node.frontmatter.path} className="o-article-list__item-title">
                                  {post.node.frontmatter.title}
                                </Link>
                              </h1>
                              <p className="u-mb+" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                              <Link className="o-btn o-btn--small o-btn--light-gray u-type-minion" to={post.node.frontmatter.path}>
                                Read more
                              </Link>
                            </article>
                          )
                        }
                      })}
                    </div>
                    <div className="o-grid__col o-grid__col--1/1 o-grid__col--1/3@bp-m p-post__sidebar">
                        <div className="p-post__sidebar-content">
                            <a href="#" className="o-btn o-btn--large o-btn--light-blue u-text-align-center u-mb+">Get in touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
