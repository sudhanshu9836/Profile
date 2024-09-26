import React from "react";
import { useState, useEffect } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function OtherProfile() {
    const navigate = useNavigate();
const location = useLocation();

const [profile, setProfile] = useState('');
const [posts, setPosts] = useState([]);


const id = location.state;

useEffect(()=>{
    const findProfile = async()=>{
        try {
            const response = await fetch("http://localhost:3000/api/v1/profiles/profile",{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            })
    
            const data = await response.json();
            if (response.ok) {
              setProfile(data.data);
              setPosts(data.data.posts);
          } else {
              console.error("Server Error:", data.message);
              toast.error("Error: " + data.message);
          }
        } catch (error) {
            console.log("Error", error)
            toast.error("Failed to fetch the profile")
        }
    }
    if(id){
      findProfile();
    }
}, [id])



const [users, setUsers] = useState([]);

// Fetch users
useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/user/suggestions",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (response.ok) {
          const allUsers = data.data.users;
        //   const suggestedUsers = allUsers.filter((i) => i._id != userId);
          setUsers(allUsers);
        } else {
          alert("Failed to fetch users");
        }
      } catch (error) {
        alert("Error in fetching");
      }
    };
    fetchUsers();
  }, []);
  


// Handle Back
const handleBack = () => {
  navigate(-1);
};

// Date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric" };
  return date.toLocaleString("en-US", options);
};
const [isLightMode, setIsLightMode] = useState(false);
const toggleMode = () => {
    const rootElement = document.documentElement;
    rootElement.classList.toggle("light-mode");
    setIsLightMode(!isLightMode);
  };
  const [more, setMore] = useState(false);

  function toggleMore() {
    setMore(!more);
  }
  console.log(posts);
  return (
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
      </div>
      <div className="center">
        <div className="head">
          <button onClick={handleBack}>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <span>{profile.name}</span>
        </div>
        <div className="cover-image"></div>
        <img src={profile.avatar} id="avatarImage" alt="avatar" />
        <div className="profile-details">
          <h3 id="name">{profile.name}</h3>
          <p id="username">@{profile.username}</p>
          <p id="bio">{profile.occupation}</p>
          <div className="connections">
            <span id="following-count">93 followings</span> &nbsp;&nbsp;&nbsp;
            <span id="follower-count">122 followers</span>
          </div>
          <br />
          <br />
        </div>
        <hr />
        <h2>Posts</h2>
        {posts.map((userPost) => {
          return (
            <div className="post">
              <div className="post-details">
                <div className="post-details-left">
                  <img id="post-avatar" src={profile.avatar} alt="" />
                  <div>
                    <h3>{profile.name}</h3>
                    <p>@{profile.username}</p>
                  </div>
                  <p id="dateOfPost">
                    &nbsp;&nbsp;&nbsp;.{formatDate(userPost.date)}{" "}
                  </p>
                </div>
                <div className="post-details-right">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <div className="post-content">
                <p>{userPost.content}</p>
              </div>
              <img id="postImage" src={userPost.image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="rightbar">
        <div className="searchbox">
          <input type="text" placeholder="Search" id="search" />
        </div>
        <h2>Suggestions</h2>
        <div className="suggestions" >
          {users.map((suggestion) => (
            <div className="suggest" key={suggestion._id}
            onClick={()=>{
                navigate("/otherProfile",{state: suggestion._id})
              }}>
              <img src={suggestion.avatar} alt="img" id="suggestImage" />
              <div className="suggestDetail">
                <p id="suggestName">{suggestion.name}</p>
                <p id="suggestUsername">@{suggestion.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OtherProfile;
