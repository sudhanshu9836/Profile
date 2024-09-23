import React, { useEffect, useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const logoutUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        toast("Logged out");
        navigate("/");
      }
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  // Buttons sidebar
  const [dots, setDots] = useState(false);

  function toggleDots() {
    setDots(!dots);
  }

  const [more, setMore] = useState(false);

  function toggleMore() {
    setMore(!more);
  }

  // Switch

  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    const rootElement = document.documentElement;
    rootElement.classList.toggle("light-mode");
    setIsLightMode(!isLightMode);
  };

  return (
    <>
      <div className="profilePage" id="profilePage">
        <div className="sidebar">
          <p id="logo">Profiler</p>
          <div className="tabs">
            <button>
              <i class="fa-solid fa-house"></i>
              <span> Home</span>
            </button>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>Search</span>
            </button>
            <button>
              <i class="fa-solid fa-user"></i>
              <span>Profile</span>
            </button>
            <button onClick={toggleMore}>
              <i class="fa-solid fa-bars"></i>
              <span>More</span>
            </button>
          </div>
          <div
            className="moreOptionsBox"
            style={{ display: more ? "flex" : "none" }}
          >
            <button>
              <i class="fa-solid fa-pen-to-square"></i>Edit Profile
            </button>
            <button>
              <i class="fa-solid fa-circle-info"></i>Your Information
            </button>
            <button id="toggleMode" onClick={toggleMode}>
              <i class="fa-solid fa-toggle-on"></i>
              {isLightMode ? "Shift to Dark Mode" : "Shift to Light Mode"}
            </button>
          </div>
          <div className="sidebar-bottom">
            <button id="post">Post</button>
            <button id="moreOptionsDots" onClick={toggleDots}>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
          <div className="DotBox" style={{ display: dots ? "block" : "none" }}>
            <button id="logoutBtn" onClick={logoutUser}>Logout</button>
          </div>
        </div>
        <div className="center">
          <div className="head">
            <button onClick={handleBack}>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <span>Sudhanshu Tiwari</span>
          </div>
          <div className="cover-image"></div>
          <img
            src="https://pbs.twimg.com/profile_images/1823398074032795648/VRptDOVa_400x400.jpg"
            id="avatarImage"
            alt="avatar"
          />
          <div className="profile-details">
            <h3 id="name">Sudhanshu Tiwari</h3>
            <p id="username">@sudhanshu9836</p>
            <p id="bio">Developer</p>
            <div className="connections">
              <span id="following-count">93 followings</span> &nbsp;&nbsp;&nbsp;
              <span id="follower-count">122 followers</span>
            </div>
            <br />
            <br />
          </div>
          <hr />
          <h2>Posts</h2>
          <div className="post">Hey connections</div>
          <div className="post">
            <p>May I come in</p>
            <img
              id="postImage"
              src="https://i.pinimg.com/736x/2d/12/dd/2d12dd622717ab6e64d0a4e09f87afe9.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="rightbar">
          <div className="searchbox">
            <input type="text" placeholder="Search" id="search" />
          </div>
          <h2>Suggestions</h2>
          <div className="suggestions">
            <div className="suggest">
              <img
                src="https://i.pinimg.com/736x/0a/8a/14/0a8a14b8ed9d91406faea6fb36efbab0.jpg"
                alt="img"
                id="suggestImage"
              />
              <div className="suggestDetail">
                <p id="suggestName">Tommy</p>
                <p id="suggestUsername">@toms</p>
              </div>
            </div>
            <div className="suggest">
              <img
                src="https://i.pinimg.com/736x/43/d5/50/43d5500f7a6d1da81e3231aad7db346e.jpg"
                alt="img"
                id="suggestImage"
              />
              <div className="suggestDetail">
                <p id="suggestName">Carl</p>
                <p id="suggestUsername">@cjohnsons</p>
              </div>
            </div>
            <div className="suggest">
              <img
                src="https://i.pinimg.com/564x/02/e7/49/02e749ac2486c8c3fbe901d0a1fbf16a.jpg"
                alt="img"
                id="suggestImage"
              />
              <div className="suggestDetail">
                <p id="suggestName">Mr Dull</p>
                <p id="suggestUsername">@lazy_boy_69</p>
              </div>
            </div>
            <div className="suggest">
              <img
                src="https://i.pinimg.com/564x/f7/ab/ae/f7abae97b56e8942383999eef3d7eb29.jpg"
                alt="img"
                id="suggestImage"
              />
              <div className="suggestDetail">
                <p id="suggestName">Hermione</p>
                <p id="suggestUsername">@pookies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
