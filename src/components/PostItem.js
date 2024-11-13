import React, { useEffect, useState } from "react";
import "../styles/PostItem.css";
import profile_picture_placeholder from "../images/profile_picture_placeholder.png";
import { MessageSquare, Copy, PieChart, Send, Heart } from "react-feather";
import DownloadAppModal from "./DownloadAppModal";
import { ASSETS_BASE_URL, URL_PREFIX } from "../utils/Constants";
import { toast } from "react-toastify";
import { timeSince } from "../utils/CommonUtils";
import { getPostStats } from "../services/PostService";
import { Link } from "react-router-dom";

const PostItem = (props) => {
  const { post } = props;

  const [showAppPromotion, setShowAppPromotion] = useState(false);
  const [appPromotionMessage, setAppPromotionMessage] = useState("");
  const [totalVotes, setTotalVotes] = useState(0);

  const promoteApp = (message) => {
    setAppPromotionMessage(message);
    setShowAppPromotion(true);
  };

  const copyPostLink = () => {
    navigator.clipboard
      .writeText(`${URL_PREFIX}/p/${post.postId}`)
      .then(() => {
        toast.success("Post link copied to clipboard! ");
      })
      .catch(() => {
        toast.error("Could not copy post link to clipboard! ");
      });
  };

  useEffect(() => {
    getPostStats(post.postId)
      .then((response) => response.json())
      .then((json) => {
        setTotalVotes(json.data.totalVotes);
      });
  }, []);

  return (
    <div className="PostItemContainer">
      <Link to={`/u/${post.userDetails.userName}`} className="PostUser">
        <img
          className="PostUserImage"
          src={
            post.userDetails.profilePicture
              ? `${ASSETS_BASE_URL}${post.userDetails.profilePicture}`
              : profile_picture_placeholder
          }
          alt="Post user identfier"
        />
        <div className="PostUserMeta">
          <span className="PostUserName">{post.userDetails.fullName}</span>
          <span className="PostTime">{timeSince(post.createdTime)}</span>
        </div>
      </Link>
      {post.context && post.context.trim() !== "" && (
        <p className="PostContext">{post.context}</p>
      )}
      <div className="PostPictures">
        <div
          className="ThisPicture"
          style={
            post.options[0].picture
              ? {
                  backgroundImage: `url('${ASSETS_BASE_URL}${post.options[0].picture}')`,
                }
              : {}
          }
        >
          <button
            onClick={() =>
              promoteApp("To vote on this post, download the app now!")
            }
            className="VoteButton"
          >
            <Heart
              size={13}
              style={{ position: "relative", top: 2, marginRight: 3 }}
            />{" "}
            Vote
          </button>
        </div>
        <div
          className="ThatPicture"
          style={
            post.options[1].picture
              ? {
                  backgroundImage: `url('${ASSETS_BASE_URL}${post.options[1].picture}')`,
                }
              : {}
          }
        >
          <button
            onClick={() =>
              promoteApp("To vote on this post, download the app now!")
            }
            className="VoteButton"
          >
            <Heart
              size={13}
              style={{ position: "relative", top: 2, marginRight: 3 }}
            />{" "}
            Vote
          </button>
        </div>
      </div>
      {post.options[0].title && post.options[0].title.trim() !== "" && (
        <div className="PostDetails">
          <div className="ThisDetails">
            {post.options[0].title && post.options[0].title.trim() !== "" && (
              <div className="Title">{post.options[0].title}</div>
            )}
            {post.options[0].description &&
              post.options[0].description.trim() !== "" && (
                <div className="Description">{post.options[0].description}</div>
              )}
          </div>
          <div className="ThatDetails">
            {post.options[1].title && post.options[1].title.trim() !== "" && (
              <div className="Title">{post.options[1].title}</div>
            )}
            {post.options[1].description &&
              post.options[1].description.trim() !== "" && (
                <div className="Description">{post.options[1].description}</div>
              )}
          </div>
        </div>
      )}

      <div className="PostBottom">
        <div className="PostActions">
          <div
            onClick={() =>
              promoteApp(
                "To vote on this post and see the results, download the app now!"
              )
            }
            className="Action"
          >
            <PieChart size={22} />
            {/* <div className="ActionText">Results</div> */}
          </div>

          <div
            onClick={() =>
              promoteApp(
                "To comment on this post and many more, download the app now!"
              )
            }
            className="Action"
          >
            <MessageSquare size={22} />
            {/* <div className="ActionText">Comment</div> */}
          </div>

          <div
            onClick={() =>
              promoteApp(
                "To send this post to your friends on This or That, download the app now!"
              )
            }
            className="Action"
          >
            <Send size={22} />
            {/* <div className="ActionText">Send</div> */}
          </div>

          <div onClick={copyPostLink} className="Action">
            <Copy size={22} />
            {/* <div className="ActionText">Copy Link</div> */}
          </div>
        </div>
        <div className="PostVoteSummary">
          <Heart
            size={14}
            strokeWidth={2.5}
            style={{ position: "relative", top: 3, marginRight: 6 }}
          />
          {totalVotes} {totalVotes === 1 ? "vote" : "votes"}
        </div>
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

export default PostItem;
