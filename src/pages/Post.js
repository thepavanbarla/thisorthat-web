import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import "../styles/Post.css";
import { ArrowRight } from "react-feather";
import create_banner from "../images/create_banner.png";
import { Link, useParams } from "react-router-dom";
import DownloadAppModal from "../components/DownloadAppModal";
import { getPost } from "../services/PostService";
import { Helmet } from "react-helmet";

const Post = () => {
  const [showAppPromotion, setShowAppPromotion] = useState(false);
  const [appPromotionMessage, setAppPromotionMessage] = useState("");

  const { postId } = useParams();

  const promoteApp = (message) => {
    setAppPromotionMessage(message);
    setShowAppPromotion(true);
  };

  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(postId)
      .then((response) => response.json())
      .then((json) => {
        setPost(json.data.post);
      });
  }, []);

  return (
    <div className="PostContainer" style={{}}>
      <Helmet>
        <title>{post?.context}</title>
        <meta property="og:title" content={post?.context} />
        <meta
          property="og:description"
          content="Download the app to vote and create your own posts"
        />
      </Helmet>
      <div className="PostBar">
        {post && <PostItem post={post} />}
        <button
          onClick={() =>
            promoteApp(
              "To view more posts like this and a lot more, download the app now!"
            )
          }
          className="ViewSimilar"
        >
          View Similar Posts{" "}
          <ArrowRight size={14} style={{ position: "relative", top: 2 }} />
        </button>
      </div>

      <div className="Sidebar">
        {post && (
          <div className="ToProfile">
            <p className="PromoTitle">Like what you see?</p>
            Follow{" "}
            <Link
              to={`/u/${post.userDetails.userName}`}
              className="FollowButton"
            >
              {post.userDetails.fullName}
            </Link>{" "}
            to see more such posts!
          </div>
        )}
        <img
          onClick={() =>
            promoteApp(
              "To create your own This or That post, download the app now!"
            )
          }
          src={create_banner}
          className="ToCreate"
          alt="Create your own post"
        />
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

export default Post;
