import React from 'react'

export default (props) => {
    return (
        <div className="c-project u-pv++">
            <div className="c-project__body">
                <div className="c-project__image">
                    <img src={props.image} alt={props.imageAlt} />
                </div>
                <div className="c-project__body-content u-p+">
                    <h3 className="u-mb u-type-paragon">{props.title}</h3>
                    <p className="u-type-minion-bold">{props.jobTitle}</p>
                    <p>{props.description}</p>
                    <a href={props.link} rel="nofollow" className="u-vh">{`View page for ${props.title}`}</a>
                    <a href={props.link} aria-hidden="true" rel="nofollow" className="o-btn o-btn--small o-btn--light-gray u-text-align-center u-type-minion u-mt+">View Page</a>
                </div>
            </div>
        </div>
    );
};