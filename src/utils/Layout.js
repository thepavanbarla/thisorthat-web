import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Common.css";
import logo from "../images/this_or_that.png";
import DownloadAppModal from "../components/DownloadAppModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const [showAppPromotion, setShowAppPromotion] = useState(false);

  return (
    <div className="Container" style={{}}>
      <div className="Header">
        <div className="HeaderContent">
          <Link className="Logo" to="/">
            <img className="Logo" alt="This or That Logo" src={logo} />
          </Link>
          <button
            onClick={() => setShowAppPromotion(true)}
            className="HeaderButton"
          >
            Get the App
          </button>
        </div>
      </div>
      <div className="PageContent">
        <Outlet />
      </div>

      {showAppPromotion && (
        <DownloadAppModal close={() => setShowAppPromotion(false)} />
      )}

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
};

export default Layout;
