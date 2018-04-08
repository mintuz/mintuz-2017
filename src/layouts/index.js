import React from 'react'
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
      <div className="u-height-100">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')}>
          <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
        </Helmet>
        {children()}
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
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
