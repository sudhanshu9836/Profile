import React, { useState } from "react";
import "./info.css";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify"; // Ensure you have this import for toast notifications
import { useNavigate } from "react-router-dom"; // Make sure to import useNavigate

function Info() {
  const location = useLocation();
  const { email, mobileNo, password } = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: email || "",
    mobileNo: mobileNo || "",
    password: password || "",
    name: "",
    username: "",
    age: "",
    gender: "",
    dob: "",
    address: "",
    occupation: "",
    profilePicture: null,
    facebook: "",
    instagram: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormData({ ...formData, [id]: files[0] }); // Save the file object
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send files and other data
    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/register", {
        method: "POST",
        body: dataToSend,
      });

      const data = await response.json();
      if (response.ok) {
        toast("Registered")
          navigate("/");
      } else {
        // toast.error(data.message || "Failed registration");
      }
    } catch (error) {
      // toast.error("Error");
      console.log("Error", error);
    }
  };

  return (
    <div className="info">
      <form onSubmit={handleSubmit}>
      <h2>Complete your profile</h2>
        <div className="info-details">
          <div className="info-details-left">
            <div className="info-fields">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required onChange={handleChange} />
            </div>

            <div className="info-fields">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" required onChange={handleChange} />
            </div>

            <div className="info-fields info-smaller-fields">
              <div className="info-field">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" required onChange={handleChange} />
              </div>
              <div className="info-field">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" required onChange={handleChange}>
                  <option value="" disabled selected>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="info-fields">
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" required onChange={handleChange} />
            </div>
            

            <div className="info-fields">
              <label htmlFor="occupation">Occupation:</label>
              <input type="text" id="occupation" required onChange={handleChange} />
            </div>
          </div>
          <div className="info-details-right">
            <div className="info-fields" id="info-img-field">
              <img
                src="https://i.pinimg.com/564x/d2/98/4e/d2984ec4b65a8568eab3dc2b640fc58e.jpg"
                alt="img"
                id="info-photo-upload"
              />
              <input
                type="file"
                id="profilePicture" 
                accept="image/*"
                // required
                onChange={handleFileChange}
              />
            </div>
            <div className="info-fields">
              <label htmlFor="address">Address:</label>
              <textarea id="address" rows="4" required onChange={handleChange}></textarea>
            <button className="info-btn" type="submit">Save Changes and Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Info;
