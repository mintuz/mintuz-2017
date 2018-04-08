import React from 'react'
import PropTypes from 'prop-types';
import Head from '../components/head-default';
import get from 'lodash/get'
import Footer from '../components/footer';
import "../styles/main.scss";

import meSmall from "../images/me-small.jpg";
import meMedium from "../images/me-medium.jpg";

class Template extends React.Component {

  render() {
    
    const { location, children } = this.props;

    const headProps = {
      title: get(this, 'props.data.site.siteMetadata.title'),
      titlePrefix: get(this, 'props.data.site.siteMetadata.titlePrefix'),
      locale: get(this, 'props.data.site.siteMetadata.locale'),
      author: get(this, 'props.data.site.siteMetadata.author', ''),
      googleVerification: get(this, 'props.data.site.siteMetadata.googleVerification', ''),
      description: get(this, 'props.data.site.siteMetadata.seoDescription'),
      keywords: get(this, 'props.data.site.siteMetadata.seoKeywords', []).join(','),
      twitterHandle: get(this, 'props.data.site.siteMetadata.twitterHandle'),
      siteUrl: get(this, 'props.data.site.siteMetadata.siteUrl')
    };

    return (
        <React.Fragment>
          <Head {...headProps} />
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
