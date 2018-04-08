import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Footer from '../components/footer';
import "../styles/main.scss"

class Template extends React.Component {

  render() {
    const { location, children } = this.props;
    return (
      <div className="u-height-100">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
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
