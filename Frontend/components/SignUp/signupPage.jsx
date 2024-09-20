import React from "react";
import "./signupPage.css";

function SignupPage() {
  return (
    <>
      <div className="signup-main-box">
        <img
          src="https://i.pinimg.com/564x/be/59/bd/be59bdee35f2aec94d9e90a30ee5233d.jpg"
          alt="image"
          id="signupImage"
        />
        <div className="right">
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
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="field">
              <label htmlFor="contact">Mobile no.</label>
              <input
                type="number"
                id="contact"
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
                placeholder="Enter your password"
              />
            </div>
            <div className="field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="password"
                name="confirmPassword"
                placeholder="Enter your password again"
              />
            </div>
          </div>
          <div className="r3">
            <button id="sup-btn">Sign Up</button>
            <p>
              Have an acoount ? <a href="">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
