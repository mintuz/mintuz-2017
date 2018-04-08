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
    return (
        <React.Fragment>
          <Helmet title={get(this, 'props.data.site.siteMetadata.title')}>
            <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
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
      }
    }
  }
`;
