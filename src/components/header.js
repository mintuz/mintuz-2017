import React from "react";
import classNames from "classnames";
import Link from "gatsby-link";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      navigationOpen: false
    };
  }

  toggleMenu(e) {
    this.setState({
      navigationOpen: !this.state.navigationOpen
    });

    e.preventDefault();
  }

  getHeaderClassNames(props) {
    if (props.mode === "homepage") {
      return [
        "c-site-header--with-background",
        "c-site-header--mast",
        "u-height-100"
      ];
    }

    return ["c-site-header--post", "u-height-50"];
  }

  renderHeaderContent(props) {
    if (props.mode === "homepage") {
      return (
        <div className="c-site-header__content [ u-pv++ u-pv+++@bp-l ]">
          <div className="o-wrap">
            <h1 className="u-type-mast-title u-mb">Adam Bulmer</h1>
            <p className="u-type-great-primer">
              Full stack developer with a specialisation in frontend development
            </p>
          </div>
        </div>
      );
    }

    return (
        <div className="c-site-header__content u-pv++">
            <div className="o-wrap">
                <h1 className="c-site-header__heading u-type-canon">{props.title}</h1>
            </div>
        </div>
    );
  }

  render() {
    const headerClassNames = classNames(
      "c-site-header",
      this.getHeaderClassNames(this.props),
      this.props.classNames
    );

    const navigationClasses = classNames("o-nav", "c-site-navigation__links", {
      "c-site-navigation__links--active": this.state.navigationOpen
    });

    const navigationBtnClasses = classNames(
      "o-hamburger",
      "c-site-navigation__toggle",
      "o-btn",
      "o-btn--icon",
      {
        "o-hamburger--active": this.state.navigationOpen
      }
    );

    return (
      <header className={headerClassNames}>
        <div className="c-site-navigation u-pv+">
          <div className="o-wrap [ u-display-flex u-row-reverse ]">
            <Link to="/" aria-label="Homepage" className="c-site-header__logo">
              <svg
                className="o-logo"
                viewBox="0 0 145 142"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    className="o-logo__part o-logo__part--one"
                    d="M32.006 3.076L30.473-.002.89 0 .85 64.153 32.006 3.076z"
                    fill="#F9A5A1"
                  />
                  <path
                    className="o-logo__part o-logo__part--two"
                    d="M31.974 3.03l14.02 26.95-13.29 26.157-4.293-8.116.01 16.506-27.597 54.13.03-54.532L31.974 3.03z"
                    fill="#B3E2E3"
                  />
                  <path
                    className="o-logo__part o-logo__part--three"
                    d="M45.967 29.942l12.888 24.812L45.6 80.81 32.7 56.114l13.27-26.17z"
                    fill="#91D6D5"
                  />
                  <path
                    className="o-logo__part o-logo__part--three"
                    d="M28.437 64.49l-.038 50.02-13.97 27.45-13.608.026-.014-23.34 27.63-54.155z"
                    fill="#91D6D5"
                  />
                  <path
                    className="o-logo__part o-logo__part--four"
                    d="M59.564 107.478l5.434 10.49 15.01.004 36.598-69.974v93.963l27.59-.007.02-141.948-29.387.01-55.266 107.463z"
                    fill="#EE403D"
                  />
                </g>
              </svg>
            </Link>
            <div className="c-site-navigation__top-level">
              <a
                aria-hidden="true"
                href="#"
                onClick={this.toggleMenu}
                className={navigationBtnClasses}
              />
              <a href="https://github.com/mintuz" aria-label="Adams Github" className="o-btn o-btn--icon">
                <div className="o-btn__icon">
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="1.414"
                  >
                    <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8" />
                  </svg>
                </div>
              </a>
            </div>
            <ul role="navigation" className={navigationClasses}>
              <li className="c-site-navigation__link-wrap u-mr+">
                <Link to="/get-in-touch/" className="c-site-navigation__link">
                  Get In Touch
                </Link>
              </li>
              <li className="c-site-navigation__link-wrap u-mr+">
                <Link to="/tech-radar/" className="c-site-navigation__link">
                  Tech Radar
                </Link>
              </li>
              <li className="c-site-navigation__link-wrap u-mr+">
                <Link to="/blog/" className="c-site-navigation__link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {this.renderHeaderContent(this.props)}
      </header>
    );
  }
}
