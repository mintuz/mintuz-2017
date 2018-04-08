import React from 'react'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Footer from '../components/footer';
import "../styles/main.scss";

import meSmall from "../images/me-small.jpg";
import meMedium from "../images/me-medium.jpg";

class Template extends React.Component {

  render() {
    const { location, children } = this.props;

    const title = get(this, 'props.data.site.siteMetadata.title');
    const titlePrefix = get(this, 'props.data.site.siteMetadata.titlePrefix');
    const locale = get(this, 'props.data.site.siteMetadata.locale');
    const author = get(this, 'props.data.site.siteMetadata.author', '');
    const googleVerification = get(this, 'props.data.site.siteMetadata.googleVerification', '');
    const description = get(this, 'props.data.site.siteMetadata.seoDescription');
    const keywords = get(this, 'props.data.site.siteMetadata.seoKeywords', []).join(',');
    const twitterHandle = get(this, 'props.data.site.siteMetadata.twitterHandle');
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl');

    return (
        <React.Fragment>
          <Helmet title={title}>
            <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
            <meta name="author" content={author} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:locale" content={locale} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${titlePrefix} | ${title}`} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:site_name" content={title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:title" content={`${titlePrefix} | ${title}`} />
            <meta name="twitter:site" content={twitterHandle} />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="google-site-verification" content={googleVerification} />
            <link rel="canonical" href={siteUrl} />
            <link rel="preload" href={meSmall} as="image" media="(max-width: 44.9375em)" />
            <link rel="preload" href={meMedium} as="image" media="(min-width: 45em) and (max-width: 63.9375em)" />
            <link rel="preload" href={meMedium} as="image" media="(max-width: 64em)" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          </Helmet>
          {children()}
          <Footer />
        </React.Fragment>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Template

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        titlePrefix
        googleVerification
        locale
        siteUrl
        author
        seoKeywords
        seoDescription
        twitterHandle
      }
    }
  }
`;
