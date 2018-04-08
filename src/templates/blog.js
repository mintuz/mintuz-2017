import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Header from '../components/header';

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

class BlogIndex extends React.Component {

  renderPagination({ group, index, first, last, pageCount }) {

    const previousUrl = index - 1 === 1 ? "/blog" : `/blog/${(index - 1).toString()}`;
    const nextUrl = `/blog/${(index + 1).toString()}`;

    if (pageCount > 1) {
      return (
        <div className="c-pagination u-mt+">
          <div className="c-pagination__previous">
            <NavLink test={first} url={previousUrl} text="Previous Page" />
          </div>
          <div className="c-pagination__next">
            <NavLink test={last} url={nextUrl} text="Next Page" />
          </div>
        </div>
      );
    }

    return (
      <noscript />
    );
  }

  render() {

    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const { group } = this.props.pathContext;

    return (
      <React.Fragment>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Header mode={'compact'} title="Blog Posts" />
        <div className="o-main u-pv++ p-post">
            <div className="o-wrap">
                <div className="o-grid">
                    <div className="o-grid__col o-grid__col--1/1 o-grid__col--2/3@bp-m p-post__body">
                      {group.map((post) => (
                        <article key={post.node.frontmatter.path} className="o-article-list__item">
                          <h2 className="u-type-double-pica u-mb+">
                            <Link to={post.node.frontmatter.path} className="o-article-list__item-title">
                              {post.node.frontmatter.title}
                            </Link>
                          </h2>
                          <p className="u-mb+" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                          <div aria-hidden="true">
                            <Link className="o-btn o-btn--small o-btn--light-gray u-type-minion" to={post.node.frontmatter.path}>
                              Read more
                            </Link>
                          </div>
                        </article>
                      ))}
                      {this.renderPagination(this.props.pathContext)}
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
  }
`
