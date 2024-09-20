import React, { useState } from "react";
import "./signupPage.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  let [formData, setFormData] = useState({
    email: "",
    mobileNo: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            mobileNo: formData.mobileNo,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast("Registered").then(() => {
          navigate("/info");
        });
      } else {
        toast.error("Failed registartion");
      }
    } catch (error) {
      toast.error("Error");
      console.log("Error", error);
    }
  };

  return (
    <>
      <div className="signup-main-box">
        <img
          src="https://i.pinimg.com/564x/be/59/bd/be59bdee35f2aec94d9e90a30ee5233d.jpg"
          alt="image"
          id="signupImage"
        />
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div className="r1">
              <h2>SignUp</h2>
              <p>Join us today !</p>
            </div>
            <div className="r2">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="field">
                <label htmlFor="contact">Mobile no.</label>
                <input
                  type="number"
                  id="mobileNo"
                  value={formData.mobileNo}
                  required
                  onChange={handleChange}
                  name="contact"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  required
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
              {/* <div className="field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="password"
                name="confirmPassword"
                placeholder="Enter your password again"
              />
            </div> */}
            </div>
            <div className="r3">
              <button id="sup-btn" type="submit">
                Sign Up
              </button>
              <p>
                Have an acoount ? <a href="/login">Sign in</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
