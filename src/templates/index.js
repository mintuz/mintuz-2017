import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeadHomepage from '../components/head-index';
import Header from '../components/header';
import Project from '../components/project';

import bookingGoImage from '../images/rideways.jpg';
import bbcLiveImage from '../images/bbc_live.png';
import bbcHomePageImage from '../images/bbc_homepage.png';
import aweImage from '../images/awe.png';
import s4bmanchesterImage from '../images/s4bmanchester.png';

const projectData = [
  {
    title: 'BookingGo',
    jobTitle: 'Senior Frontend Engineer',
    description: 'I am currently working as a Senior Frontend Engineer on Rideways, the ground transport division of Booking.com using technologies such as React and Node to delivery a progressive web app experience.',
    image: bookingGoImage,
    imageAlt: 'An image of Rideways',
    link: 'http://www.rideways.com'
  },
  {
    title: 'BBC Live',
    jobTitle: 'Senior Software Engineer',
    description: 'I was the Senior Software Engineer on the 2nd iteration of the BBC Live pages using React and Node delivering LIVE experiences for events like the Rio Olympics, EU Referendum and the US Election.',
    image: bbcLiveImage,
    imageAlt: 'An image of the BBC Live Page',
    link: 'https://www.bbc.co.uk/sport/live/olympics/36772591'
  },
  {
    title: 'BBC Homepage',
    jobTitle: 'Software Engineer',
    description: 'I was involved in the frontend and backend development of BBC Homepage using Node and React creating personalisation features for the end user.',
    image: bbcHomePageImage,
    imageAlt: 'An image of the BBC Homepage',
    link: 'https://bbc.co.uk'
  },
  {
    title: 'AWE',
    jobTitle: 'Lead Frontend Developer',
    description: 'AWE was the last website I developed at Forepoint before joining the BBC. They have been at the forefront of the UK nuclear deterrence programme for more than 60 years and I was responsible for creating the frontend of the website.',
    image: aweImage,
    imageAlt: 'An image of the AWE Homepage',
    link: 'http://www.awe.co.uk/'
  },
  {
    title: 'S4BManchester',
    jobTitle: 'Web Developer',
    description: 'Website developed at Forepoint for S4BManchester, who will be responsible for making improvements to homes within the Brunswick area.',
    image: s4bmanchesterImage,
    imageAlt: 'An image of the S4BManchester Homepage',
    link: 'http://s4bmanchester.co.uk'
  }
];

class BlogIndex extends React.Component {
  render() {

    const {
      siteTitle,
      siteTitlePrefix,
      locale,
      googleVerification,
      author,
      siteUrl,
      twitterHandle,
      description,
      keywords
    } = this.props.data.site.siteMetadata;

    const headProps = {
      title: `${siteTitlePrefix} | ${siteTitle}`,
      keywords,
      description,
      siteUrl
    };

    return (
      <React.Fragment>
        <HeadHomepage {...headProps} />
        <Header mode='homepage' animateLogo={true} />
        <div className="o-main p-home">
            <div className="about u-text-align-left">
                <div className="o-wrap">
                    <div className="u-pv++ u-p++@m u-p+++@l">
                        <div className="o-grid">
                            <h2 className="o-grid__col u-mb++ u-type-about">I create things that scale well and are performant on the web.</h2>
                            <p className="o-grid__col o-grid__col--1/2@bp-l">I am a full stack web developer with a specialisation in frontend development, currently working as a Senior Frontend Engineer at BookingGo, the ground transport division of Booking.com in Manchester. I have expertise in the creation of scalable HTML/CSS working across multiple devices and browsers.</p>
                            <p className="o-grid__col o-grid__col--1/2@bp-l">Whilst working on projects, my main focus is delivering features that are both performant on the web and easy to maintain ensuring the audience get the content they require quickly and that the development team can deliver those features efficiently.</p>
                            <p className="o-grid__col">Before working at BookingGo, I worked at the BBC developing the live events page and BBC Homepage and have developed websites for government departments, defence sector and public sector organisations at a web agency called Forepoint.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-projects u-pv++">
                <div className="o-wrap">
                    <h2 className="u-type-trafalgar">Professional projects</h2>
                    {projectData.map((data, id) => {
                      return <Project key={`project-${id}`} {...data} />
                    })}
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object
}

export default BlogIndex;

export const pageQuery = graphql`
  query HomepageQuery {
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
