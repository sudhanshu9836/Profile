import React from 'react'
import "./profile.css"

function Profile() {
  return (
    <>
    <div>
      <div className="info">
        <div className="i1">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQFc8Wqa_Y58iQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721372147897?e=1730332800&v=beta&t=SQmDQBfPoP7TkGOV_DB46Qc7d3CVrrOx3zpyAP-t3hQ" alt="img" id='avatar'/>
          <div className='i1B'>
          <h2>Sudhanshu Tiwari</h2>
          <p><span>username </span>||<span> Student</span></p>
          <p>sudhanshutiwari9836@gmail.com</p>
          </div>
          <div className="handles">
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div className="box">
            <div className="b1">1500 <br /> Followers</div>
            <div className="b1">135  <br /> Followings</div>
            <button id='flw-bt'>+ Follow</button>
          </div>
        </div>
        <div className="i2">
          <div className="left">
          <div className="share">
          <textarea id='share-input' placeholder='Share your thoughts'/>
          <input type="file"  id='share-media'/>
          <button id='shr'>Share</button>
          </div>
          <h2 id='post-head'>Your posts</h2>
          <div className="posts">
          <div class="post">
              <p>This is a random tweet about coding!</p>
          </div>

          <div class="post">
              <p>Just finished a 10k run, feeling great! #fitness</p>
          </div>

          <div class="post">
              <p>Exploring new cafes in town. Coffee is life! ☕</p>
          </div>

          <div class="post">
              <p>Excited for the weekend! Plans? #TGIF</p>
          </div>

          <div class="post">
              <p>Learning CSS can be fun and frustrating at the same time.</p>
          </div>

          </div>
          </div>
          <div className="right">
            <h2>Suggestions</h2>
          </div>
        </div>
        <div className="i3">
          <div className="s1">
            <p><span>Phone no :</span> 9492819289</p>
            <p><span>Email : </span>sudhanshutiwaro9836@gmail.com</p>
            <p><span>Address :</span> Gate 1 , Minal Mall , Minal Residency, Bhopal</p>
          </div>
          <div className="s2">
          <a href=""><i class="fa-brands fa-facebook"></i>Facebook</a>
          <a href=""><i class="fa-brands fa-instagram"></i>Instagram</a>
          <a href=""><i class="fa-brands fa-linkedin"></i>Linkedin</a>
          </div>
          <div className="s3">
          <button id='lgt'>Logout</button>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Profile
