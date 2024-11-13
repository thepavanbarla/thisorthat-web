import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import profile_picture_placeholder from "../images/profile_picture_placeholder.png";
import PostItem from "../components/PostItem";
import { ArrowRight, UserPlus } from "react-feather";
import DownloadAppModal from "../components/DownloadAppModal";
import { useParams } from "react-router-dom";
import { getUserProfile, getUserStats } from "../services/ProfileService";
import { ASSETS_BASE_URL } from "../utils/Constants";
import { getUserPosts } from "../services/PostService";
import LoadingIcons from "react-loading-icons";

const Profile = () => {
  const [showAppPromotion, setShowAppPromotion] = useState(false);
  const [appPromotionMessage, setAppPromotionMessage] = useState("");

  const promoteApp = (message) => {
    setAppPromotionMessage(message);
    setShowAppPromotion(true);
  };

  const { routeUserName } = useParams();

  const [userId, setUserId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [userName, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const [postsCount, setPostsCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  const [posts, setPosts] = useState([]);

  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    getProfileDetails();
  }, []);

  useEffect(() => {
    if (userId != null) {
      getProfileStats();
      getProfilePosts();
    }
  }, [userId]);

  const getProfileDetails = () => {
    getUserProfile(routeUserName)
      .then((response) => response.json())
      .then((json) => {
        setUserId(json.data.userId);
        setUsername(json.data.userName);
        setFullName(json.data.fullName);
        setProfilePicture(json.data.profilePicture);
        setLoadingProfile(false);
      });
  };

  const getProfileStats = async () => {
    getUserStats(userId)
      .then((response) => response.json())
      .then((json) => {
        setPostsCount(json.data.postsCount);
        setFollowersCount(json.data.followerCount);
        setFollowingCount(json.data.followingCount);
        setLoadingStats(false);
      });
  };

  const getProfilePosts = async () => {
    getUserPosts(userId)
      .then((response) => response.json())
      .then((json) => {
        console.log("Profile posts", json.data);
        if (json.data) {
          setPosts(json.data.map((p) => p.post));
        }
        setLoadingPosts(false);
      });
  };

  return (
    <div className="ProfileContainer" style={{}}>
      <div
        className="ProfileDetails"
        style={{ backgroundImage: 'url("../images/cover_placeholder.jpg")' }}
      >
        {loadingProfile || loadingStats ? (
          <LoadingIcons.TailSpin
            className="ProfileDetailsLoading"
            stroke="#787878"
          />
        ) : (
          <>
            <img
              className="ProfilePicture"
              src={
                profilePicture
                  ? `${ASSETS_BASE_URL}${profilePicture}`
                  : profile_picture_placeholder
              }
              alt="User profile identifier"
            />
            <h3 className="FullName">{fullName}</h3>
            <h5 className="UserName">@{userName}</h5>
            <p className="Bio">This is my bio!</p>
            <div className="UserStats">
              <div className="StatGroup">
                <span className="StatValue">{postsCount}</span>
                <span className="StatLabel">Posts</span>
              </div>
              <div className="StatGroup">
                <span className="StatValue">{followersCount}</span>
                <span className="StatLabel">Followers</span>
              </div>
              <div className="StatGroup">
                <span className="StatValue">{followingCount}</span>
                <span className="StatLabel">Following</span>
              </div>
            </div>
            <button
              onClick={() =>
                promoteApp(
                  `To follow ${fullName} and find more friends on This or That, download the app now!`
                )
              }
              className="FollowProfile"
            >
              <UserPlus
                size={14}
                strokeWidth={2.4}
                style={{ position: "relative", top: 1, marginRight: 2 }}
              />{" "}
              Follow
            </button>
          </>
        )}
      </div>

      <div className="ProfilePosts">
        {loadingPosts ? (
          <LoadingIcons.TailSpin
            className="ProfilePostsLoading"
            stroke="#787878"
          />
        ) : (
          <>
            <h2 className="PostsTitle">{fullName}'s Posts</h2>
            {posts.map((post) => (
              <PostItem post={post} />
            ))}
            <button
              onClick={() =>
                promoteApp(
                  `To see more posts from ${fullName}, download the app now! `
                )
              }
              className="LoadMore"
            >
              See More from {fullName}
              <ArrowRight size={14} style={{ position: "relative", top: 2 }} />
            </button>
          </>
        )}
      </div>

      {showAppPromotion && (
        <DownloadAppModal
          close={() => setShowAppPromotion(false)}
          messageText={appPromotionMessage}
        />
      )}
    </div>
  );
};

export default Profile;
