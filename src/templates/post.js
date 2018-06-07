import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import Head from '../components/head';
import HeadBlog from '../components/head-blog';
import Header from '../components/header';

require("prismjs/themes/prism-tomorrow.css");

class BlogPostTemplate extends React.Component {
  render() {

    const post = this.props.data.markdownRemark;

		const {
      siteTitle,
      siteUrl,
      description,
      keywords,
      author
		} = this.props.data.site.siteMetadata;

    const blogListingTitle = `${post.frontmatter.title} | ${siteTitle}`;
    const blogUrl = `${siteUrl}${post.frontmatter.path}`;

		const headProps = {
      title: blogListingTitle,
      keywords,
      author,
      datePublished: post.frontmatter.date,
      description: post.excerpt,
      siteUrl: blogUrl
    }

    return (
		<React.Fragment>
			<Head {...headProps} />
			<HeadBlog {...headProps} />
			<Header mode={'compact'} title={post.frontmatter.title} />
			<div className="o-main u-pv++ p-post">
				<div className="o-wrap">
					<div className="o-grid">
						<div
							className="o-grid__col o-grid__col--1/1 o-grid__col--2/3@bp-mx p-post__body u-pb+ u-pb0@bp-mx u-mb+ u-mb0@bp-mx"
							dangerouslySetInnerHTML={{ __html: post.html }}
						/>
						<div className="o-grid__col o-grid__col--1/1 o-grid__col--1/3@bp-mx p-post__sidebar">
							<div className="p-post__sidebar-content u-pt+ u-pt0@bp-mx">
								<a
									href="#"
									className="o-btn o-btn--large o-btn--light-gray o-btn--block u-text-align-center u-mb+"
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
        siteTitle
        siteTitlePrefix
        googleVerification
        locale
        siteUrl
        author
        keywords
        description
        twitterHandle
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
			html
			excerpt
      frontmatter {
				path
				title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
