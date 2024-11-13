import React from "react";
import "../styles/DownloadAppModal.css";
import app_feature from "../images/app_feature.png";
import appstore_link from "../images/appstore_link.png";
import googleplay_link from "../images/googleplay_link.png";
import { XCircle } from "react-feather";

const DownloadAppModal = (props) => {
  const defaultMessage =
    "Download the app to find your friends, create posts, and vote on posts from people around the world! ";
  return (
    <div className="Blur">
      <div className="AppForeground">
        <XCircle
          onClick={props.close}
          color="#787878"
          className="CloseIcon"
          size={48}
          strokeWidth={1}
        />
        <img src={app_feature} alt="Fun on app" className="AppDownloadImage" />
        <p className="Callout">{props.messageText || defaultMessage}</p>
        <div className="AppLinks">
          <a
            rel="noreferrer"
            href="https://apps.apple.com/us/app/this-or-that-social-network/id1620143535"
            target="_blank"
          >
            <img
              src={appstore_link}
              alt="Download on Appstore"
              className="AppLink"
            />
          </a>
          <a
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.pickthisorthat.TotApp"
            target="_blank"
          >
            <img
              src={googleplay_link}
              alt="Download on Google Playstore"
              className="AppLink"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppModal;
