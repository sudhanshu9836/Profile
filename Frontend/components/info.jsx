import React from 'react'
import './info.css'

function Info() {
  return (
        <>
      <h2>Complete your profile</h2>
      <div className="details">
      <div className="details-left">
      <div class="fields">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
        </div>

        <div class="fields">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
        </div>

        <div class="fields smaller-fields">
            <div className="field">
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required/>
            </div>
        <div class="field">
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

        <div class="fields">
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required/>
        </div>
        <div class="fields">
            <label for="address">Address:</label>
            <textarea id="address" name="address" rows="4" required></textarea>
        </div>

        <div class="fields">
            <label for="occupation">Occupation:</label>
            <input type="text" id="occupation" name="occupation" required/>
        </div>
      </div>
      <div className="details-right">
      <div class="fields">
            <label for="profile-picture">Profile Picture:</label>
            <input type="file" id="profile-picture" name="profile-picture" accept="image/*" required/>
        </div>

        <div class="fields">
            <label for="facebook">Facebook Handle:</label>
            <input type="url" id="facebook" name="facebook"/>
        </div>

        <div class="fields">
            <label for="twitter">Twitter Handle:</label>
            <input type="url" id="twitter" name="twitter"/>
        </div>

        <div class="fields">
            <label for="linkedin">LinkedIn Handle:</label>
            <input type="url" id="linkedin" name="linkedin"/>
        </div>
      <button>Save Changes and Proceed</button>
      </div>
      </div>
    </>
  )
}

export default Info
