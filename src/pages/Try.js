import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import { getPost } from "../services/PostService";
import "../styles/Try.css";
import color_logo from "../images/color_logo.svg";
import DownloadAppModal from "../components/DownloadAppModal";
import { FullPage, Slide } from "react-full-page/lib";
import { ASSETS_BASE_URL } from "../utils/Constants";

const Try = () => {
  const [friendsPost, setFriendsPost] = useState(null);
  const [ishowSpeedPost, setIshowSpeedPost] = useState(null);
  const [strangerThingsPost, setStrangerThingsPost] = useState(null);
  const [hangoverPost, setHangoverPost] = useState(null);
  const [lebronPost, setLebronPost] = useState(null);
  const [mrBeastPost, setMrBeastPost] = useState(null);

  const getTryPost = async (postId, setFn) => {
    getPost(postId)
      .then((response) => response.json())
      .then((json) => {
        setFn(json.data.post);
      });
  };

  useEffect(() => {
    getTryPost("638cf037fe33cf4d9966d361", setFriendsPost);
    getTryPost("6384c124fe33cf4d9966d0f7", setIshowSpeedPost);
    getTryPost("63890d42fe33cf4d9966d1c7", setStrangerThingsPost);
    getTryPost("638a53d5fe33cf4d9966d1f7", setHangoverPost);
    getTryPost("6384ed15fe33cf4d9966d129", setLebronPost);
    getTryPost("638a54cdfe33cf4d9966d1fc", setMrBeastPost);
  }, []);

  const [showAppPromotion, setShowAppPromotion] = useState(false);

  return (
    <>
      <div className="TryHeader">
        <img src={color_logo} className="ColorLogo" alt="This or That" />
        <button
          onClick={() => setShowAppPromotion(true)}
          className="TryHeaderButton"
        >
          Get the App
        </button>
      </div>

      {friendsPost &&
      ishowSpeedPost &&
      strangerThingsPost &&
      hangoverPost &&
      lebronPost &&
      mrBeastPost ? (
        <FullPage>
          <Slide>
            <div
              className="TryContainer"
              style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${ASSETS_BASE_URL}static/friends-bg.jpeg")`,
              }}
            >
              <div className="TryPostContainer">
                <PostItem post={friendsPost} />
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className="TryContainer"
              style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${ASSETS_BASE_URL}static/ishowspeed-bg.jpeg")`,
              }}
            >
              <div className="TryPostContainer">
                <PostItem post={ishowSpeedPost} />
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className="TryContainer"
              style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${ASSETS_BASE_URL}static/stranger-things-bg.jpeg")`,
              }}
            >
              <div className="TryPostContainer">
                <PostItem post={strangerThingsPost} />
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className="TryContainer"
              style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${ASSETS_BASE_URL}static/hangover-bg.jpeg")`,
              }}
            >
              <div className="TryPostContainer">
                <PostItem post={hangoverPost} />
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className="TryContainer"
              style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${ASSETS_BASE_URL}static/kobe-lebron-bg.jpeg")`,
              }}
            >
              <div className="TryPostContainer">
                <PostItem post={lebronPost} />
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className="TryContainer"
              style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${ASSETS_BASE_URL}static/mrbeast-bg.png")`,
              }}
            >
              <div className="TryPostContainer">
                <PostItem post={mrBeastPost} />
              </div>
            </div>
          </Slide>
        </FullPage>
      ) : (
        <div className="TryLoading"></div>
      )}

      {showAppPromotion && (
        <DownloadAppModal close={() => setShowAppPromotion(false)} />
      )}
    </>
  );
};

export default Try;
