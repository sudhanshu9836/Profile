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
      </div>

    </div>
    </>
  )
}

export default Profile
