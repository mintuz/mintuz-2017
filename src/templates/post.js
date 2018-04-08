import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import Header from '../components/header';

class BlogPostTemplate extends React.Component {
  render() {

    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
		<React.Fragment>
			<Header mode={'compact'} title={post.frontmatter.title} />
			<div className="o-main u-pv++ p-post">
				<Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
				<div className="o-wrap">
					<div className="o-grid">
						<div
							className="o-grid__col o-grid__col--1/1 o-grid__col--2/3@bp-m p-post__body u-pb+ u-pb0@bp-m u-mb+ u-mb0@bp-m"
							dangerouslySetInnerHTML={{ __html: post.html }}
						/>
						<div className="o-grid__col o-grid__col--1/1 o-grid__col--1/3@bp-m p-post__sidebar">
							<div className="p-post__sidebar-content u-pt+ u-pt0@bp-m">
								<a
									href="#"
									className="o-btn o-btn--large o-btn--light-gray u-text-align-center u-mb+"
								>
								Get in touch
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
