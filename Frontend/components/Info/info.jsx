import React from 'react'
import './info.css'

function Info() {
  return (
        <div className='info'>
      <h2>Complete your profile</h2>
      <div className="info-details">
      <div className="info-details-left">
      <div className="info-fields">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
        </div>

        <div className="info-fields">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
        </div>

        <div className="info-fields info-smaller-fields">
            <div className="info-field">
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required/>
            </div>
        <div className="info-field">
            <label for="gender">Gender:</label>
            <select id="gender" name="gender" required>
                <option value="" disabled selected>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
        </div>
        </div>

        <div className="info-fields">
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required/>
        </div>
        <div className="info-fields">
            <label for="address">Address:</label>
            <textarea id="address" name="address" rows="4" required></textarea>
        </div>

        <div className="info-fields">
            <label for="occupation">Occupation:</label>
            <input type="text" id="occupation" name="occupation" required/>
        </div>
      </div>
      <div className="info-details-right">
      <div className="info-fields" id='info-img-field'>
        <img src="https://i.pinimg.com/564x/d2/98/4e/d2984ec4b65a8568eab3dc2b640fc58e.jpg" alt="img" id='info-photo-upload'/>
            {/* <label for="profile-picture">Profile Picture:</label> */}
            <input type="file" id="profile-picture" name="profile-picture" accept="image/*" required/>
        </div>

        <div className="info-fields">
            <label for="facebook">Facebook Handle:</label>
            <input type="url" id="facebook" name="facebook"/>
        </div>

        <div className="info-fields">
            <label for="twitter">Instagram Handle:</label>
            <input type="url" id="twitter" name="twitter"/>
        </div>

        <div className="info-fields">
            <label for="linkedin">LinkedIn Handle:</label>
            <input type="url" id="linkedin" name="linkedin"/>
        </div>
      <button className='info-btn'>Save Changes and Proceed</button>
      </div>
      </div>
    </div>
  )
}

export default Info
