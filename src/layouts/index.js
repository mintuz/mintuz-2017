import React from 'react'
import PropTypes from 'prop-types';
import HeadDefault from '../components/head-default';
import get from 'lodash/get'
import Footer from '../components/footer';
import "../styles/main.scss";

import meSmall from "../images/me-small.jpg";
import meMedium from "../images/me-medium.jpg";

class Template extends React.Component {

  render() {
    
    const { location, children } = this.props;

    const headProps = {
      locale: get(this, 'props.data.site.siteMetadata.locale'),
      author: get(this, 'props.data.site.siteMetadata.author'),
      twitterHandle: get(this, 'props.data.site.siteMetadata.twitterHandle'),
      googleVerification: get(this, 'props.data.site.siteMetadata.googleVerification'),
      siteUrl: get(this, 'props.data.site.siteMetadata.siteUrl'),
      meSmall,
      meMedium
    };

    return (
        <React.Fragment>
          <HeadDefault {...headProps} />
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
  query DefaultQuery {
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
  }
`;
