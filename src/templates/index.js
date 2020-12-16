import React from 'react'
import PropTypes from 'prop-types';

import HeadHomepage from '../components/head-index';
import Header from '../components/header';
import Project from '../components/project';

import moonpigImage from '../images/moonpig_homepage.png';
import bookingGoImage from '../images/booking.jpg';
import bbcLiveImage from '../images/bbc_live.png';
import bbcHomePageImage from '../images/bbc_homepage.png';
import workoutBotImage from '../images/workout_bot.png';

import bbcLogo from '../images/bbc.svg';
import bookingLogo from '../images/booking.svg';
import forepointLogo from '../images/forepoint.png';
import moonpigLogo from '../images/moonpig.svg';

const logos = [
  {
    id: 'moonpig',
    imageAlt: 'Moonpig',
    image: moonpigLogo,
    href: 'https://www.moonpig.com/uk',
  },
  {
    id: 'booking',
    imageAlt: 'Booking.com',
    image: bookingLogo,
    href: 'https://taxi.booking.com/',
  },
  {
    id: 'bbc',
    imageAlt: 'BBC',
    image: bbcLogo,
    href: 'https://www.bbc.co.uk/sport',
  },
  {
    id: 'forepoint',
    imageAlt: 'Forepoint',
    image: forepointLogo,
    href: 'https://www.forepoint.co.uk',
  }
]

const projectData = [
  {
    title: 'Moonpig',
    jobTitle: 'Senior Software Engineer',
    description: 'I am currently on the Card Editor team at Moonpig using TypeScript, React and Node within a serverless environment.',
    image: moonpigImage,
    imageAlt: 'An image of Moonpigs website',
    link: 'https://moonpig.com/uk',
    noFollow: true,
  },
  {
    title: 'Booking.com',
    jobTitle: 'Senior Frontend Engineer',
    description: 'I was a Senior Frontend Engineer within the Booking.com\'s Taxi product using technologies such as React and Node with a focus on performance.',
    image: bookingGoImage,
    imageAlt: 'An image of Booking.com taxi\'s product',
    link: 'https://taxi.booking.com',
    noFollow: true,
  },
  {
    title: 'BBC Live',
    jobTitle: 'Senior Software Engineer',
    description: 'I was the Senior Software Engineer on the 2nd iteration of the BBC Live pages using React and Node delivering LIVE experiences for events like the Rio Olympics, EU Referendum and the US Election.',
    image: bbcLiveImage,
    imageAlt: 'An image of the BBC Live Page',
    link: 'https://www.bbc.co.uk/sport/live/olympics/36772591',
    noFollow: true,
  },
  {
    title: 'BBC Homepage',
    jobTitle: 'Software Engineer',
    description: 'I was involved in the frontend and backend development of BBC Homepage using Node and React creating personalisation features for the end user.',
    image: bbcHomePageImage,
    imageAlt: 'An image of the BBC Homepage',
    link: 'https://bbc.co.uk',
    noFollow: true,
  },
  {
    title: 'Workout Plan Bot',
    jobTitle: 'Founder',
    description: 'I developed Workout Plan Bot as an alternative Workout tracking app on iOS. The app is native using Swift & SwiftUI.',
    image: workoutBotImage,
    imageAlt: 'An image of the workout plan bot app',
    link: 'http://workoutplan.app/',
    noFollow: false,
    accessibilityText: "free workout plan app"
  }
];

const Logo = (props) => {
  return (
      <a href={props.href}>
        <img className={`c-logo-strip__img c-logo-strip__img--${props.id} u-m++`} src={props.image} alt={props.imageAlt} />
      </a>
  );
};
class BlogIndex extends React.Component {
  render() {

    const {
      siteTitle,
      siteTitlePrefix,
      siteUrl,
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
            <div className="c-about u-text-align-left">
                <div className="o-wrap">
                    <div className="u-pv++ u-p++@m u-p+++@l">
                        <div className="o-grid">
                            <h2 className="o-grid__col u-mb++ u-type-about u-text-center">I create things that scale well and are performant on the web.</h2>
                            <p className="o-grid__col o-grid__col--1/2@bp-l">I am a full stack web developer with a specialisation in frontend development, currently working as a Senior Software Engineer at Moonpig.com on the card editor team in Manchester. I have expertise in the creation of scalable HTML/CSS working across multiple devices and browsers.</p>
                            <p className="o-grid__col o-grid__col--1/2@bp-l">Whilst working on projects, my main focus is delivering features that are both performant on the web and easy to maintain ensuring the user get the content they require quickly and that the development team can deliver those features efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-logo-strip u-pv+">
                <div className="o-wrap">
                    <h2 className="u-type-paragon u-text-center">Worked for</h2>
                    <ul className="c-logo-strip__logos">
                      {logos.map((data) => {
                        return <li><Logo key={`project-${data.id}`} {...data} /></li>
                      })}
                    </ul>
                </div>
            </div>
            <div className="c-projects u-pv++">
                <div className="o-wrap">
                    <h2 className="u-type-paragon u-text-center">Projects</h2>
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
