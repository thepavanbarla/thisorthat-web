import React from "react";
import "../styles/Home.css";

import graphic1 from "../images/graphic1.svg";
import graphic2 from "../images/graphic2.svg";
import graphic3 from "../images/graphic3.svg";
import graphic4 from "../images/graphic4.svg";
import appstoreIcon from "../images/appstore-icon.svg";
import playstoreIcon from "../images/playstore-icon.svg";
import appstoreBadge from "../images/appstore-badge.svg";
import playstoreBadge from "../images/playstore-badge.svg";
import logo from "../images/this_or_that.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="HomeContainer">
      <div className={`Hero Hero1`}>
        <div className={`HeroContent HeroContent1`}>
          <div className="HeroDetail">
            <h1 className="HeroTitle">
              Just pick <br />
              this or that
            </h1>
            <p className="HeroSubTitle">Shape the world around you!</p>
            <div className="HeroButtons">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.pickthisorthat.TotApp"
                rel="noreferrer"
              >
                <img
                  className="HeroButton"
                  src={playstoreBadge}
                  alt="Download app from playstore"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/this-or-that-social-network/id1620143535"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="HeroButton"
                  src={appstoreBadge}
                  alt="Download app from appstore"
                />
              </a>
            </div>
          </div>
          <img
            className="HeroGraphic"
            alt="Vote on content to shape the world"
            src={graphic1}
          />
        </div>
      </div>

      <div className={`Hero Hero2`}>
        <div className={`HeroContent HeroContent2`}>
          <div className="HeroDetail">
            <p className="Brief">Analyze</p>
            <h1 className="HeroTitle">
              Understand <br />
              mass opinion <br />
              like never before
            </h1>
            <p className="HeroSubTitle">
              Get a sense of what your friends like and build deep connections!
            </p>
          </div>
          <img
            className="HeroGraphic"
            alt="Analyze results of this or that posts"
            src={graphic2}
          />
        </div>
      </div>

      <div className={`Hero Hero3`}>
        <div className={`HeroContent HeroContent3`}>
          <div className="HeroDetail">
            <p className="Brief">Create</p>
            <h1 className="HeroTitle">Facing a choice?</h1>
            <p className="HeroSubTitle">
              Create a post and let the world help!
            </p>
          </div>
          <img
            className="HeroGraphic"
            alt="Create posts to knwo what the world thinks"
            src={graphic3}
          />
        </div>
      </div>

      <div className={`Hero Hero4`}>
        <div className={`HeroContent HeroContent4`}>
          <div className="HeroDetail">
            <p className="Brief">Coming Soon</p>
            <h1 className="HeroTitle">Connect with similar people</h1>
            <p className="HeroSubTitle">No matter where they are!</p>
          </div>
          <img
            className="HeroGraphic"
            alt="Connect with people around the world"
            src={graphic4}
          />
        </div>
      </div>

      <div className="Footer">
        <div className="FooterContent">
          <div className="FooterLogoSpace">
            <img src={logo} alt="This or That Logo" className="FooterLogo" />
            <span className="FooterCopy">
              &copy; 2022 This or That. All rights reserved.{" "}
            </span>
          </div>
          <div className="FooterLinks">
            <Link to="/" className="FooterLink">
              Home
            </Link>
            <Link to="/privacy-policy" className="FooterLink">
              Privacy
            </Link>
            <Link to="/terms-of-use" className="FooterLink">
              Terms
            </Link>
            <Link to="/contact" className="FooterLink">
              Contact
            </Link>
            <div className="FooterIcons">
              <a
                target="_blank"
                href="https://apps.apple.com/in/app/this-or-that-social-network/id1620143535"
                rel="noreferrer"
              >
                <img
                  className="FooterAppleIcon"
                  src={appstoreIcon}
                  alt="Apple icon"
                />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.pickthisorthat.TotApp"
                rel="noreferrer"
              >
                <img
                  className="FooterAndroidIcon"
                  src={playstoreIcon}
                  alt="Playstore icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
