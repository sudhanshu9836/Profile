import React from "react";
import "./profile.css";

function Profile() {
  return (
    <>
      <div>
        <div className="profile-info">
          <div className="profile-i1">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFc8Wqa_Y58iQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721372147897?e=1730332800&v=beta&t=SQmDQBfPoP7TkGOV_DB46Qc7d3CVrrOx3zpyAP-t3hQ"
              alt="img"
              id="profile-avatar"
            />
            <div className="profile-i1B">
              <h2>Sudhanshu Tiwari</h2>
              <p>
                <span>username </span>||<span> Student</span>
              </p>
              <p>sudhanshutiwari9836@gmail.com</p>
            </div>
            <div className="profile-handles">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="profile-box">
              <div className="profile-b1">
                1500 <br /> Followers
              </div>
              <div className="profile-b1">
                135 <br /> Followings
              </div>
              <button id="profile-flw-bt">+ Follow</button>
            </div>
          </div>
          <div className="profile-i2">
            <div className="profile-left">
              <div className="profile-share">
                <textarea
                  id="profile-share-input"
                  placeholder="Share your thoughts"
                />
                <input type="file" id="profile-share-media" />
                <button id="profile-shr">Share</button>
              </div>
              <h2 id="profile-post-head">Your posts</h2>
              <div className="profile-posts">
                <div className="profile-post">
                  <p>This is a random tweet about coding!</p>
                </div>

                <div className="profile-post">
                  <p>Just finished a 10k run, feeling great! #fitness</p>
                </div>

                <div className="profile-post">
                  <p>Exploring new cafes in town. Coffee is life! ☕</p>
                </div>

                <div className="profile-post">
                  <p>Excited for the weekend! Plans? #TGIF</p>
                </div>

                <div className="profile-post">
                  <p>
                    Learning CSS can be fun and frustrating at the same time.
                  </p>
                </div>
              </div>
            </div>
            <div className="profile-right">
              <h2>Suggestions</h2>
              <div className="profile-suggestions">
                <div className="profile-suggest">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFc8Wqa_Y58iQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721372147897?e=1730332800&v=beta&t=SQmDQBfPoP7TkGOV_DB46Qc7d3CVrrOx3zpyAP-t3hQ"
                    alt=""
                    id="profile-suggest-img"
                  />
                  <h3>sudhanshu__tiwari_</h3>
                </div>
                <div className="profile-suggest">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFc8Wqa_Y58iQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721372147897?e=1730332800&v=beta&t=SQmDQBfPoP7TkGOV_DB46Qc7d3CVrrOx3zpyAP-t3hQ"
                    alt=""
                    id="profile-suggest-img"
                  />
                  <h3>sudhanshu__tiwari_</h3>
                </div>
                <div className="profile-suggest">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFc8Wqa_Y58iQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721372147897?e=1730332800&v=beta&t=SQmDQBfPoP7TkGOV_DB46Qc7d3CVrrOx3zpyAP-t3hQ"
                    alt=""
                    id="profile-suggest-img"
                  />
                  <h3>sudhanshu__tiwari_</h3>
                </div>
                <div className="profile-suggest">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFc8Wqa_Y58iQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721372147897?e=1730332800&v=beta&t=SQmDQBfPoP7TkGOV_DB46Qc7d3CVrrOx3zpyAP-t3hQ"
                    alt=""
                    id="profile-suggest-img"
                  />
                  <h3>sudhanshu__tiwari_</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-i3">
            <div className="profile-s1">
              <p>
                <span>Phone no :</span> 9492819289
              </p>
              <p>
                <span>Email : </span>sudhanshutiwaro9836@gmail.com
              </p>
              <p>
                <span>Address :</span> Gate 1 , Minal Mall , Minal Residency,
                Bhopal
              </p>
            </div>
            <div className="profile-s2">
              <a href="">
                <i className="fa-brands fa-facebook"></i>Facebook
              </a>
              <a href="">
                <i className="fa-brands fa-instagram"></i>Instagram
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>Linkedin
              </a>
            </div>
            <div className="profile-s3">
              <button id="profile-lgt">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
