import React, { useState } from "react";
import "./loginPage.css";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/v1/user/login',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          }),
          credentials: 'include'
        }
      )

      const data = await response.json();
      if(response.ok){
        toast.success("Logged in Successfully")
          navigate("/profile");
      }else{
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error("Unexpected error from server")
      console.log("Error",error)
    }
  }

  return (
    <>
      <div className="main-box">
        <div className="left">
          <img
            src="https://i.pinimg.com/564x/1b/5b/e3/1b5be34fa145729b51d1cf6b7d887090.jpg"
            alt="image"
            id="login-img"
          />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit} >
          <div className="r1">
            <h2>Login</h2>
            <p>
              Welcome back ! Please login to your <br /> account
            </p>
          </div>
          <div className="r2">
            <div className="field">
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </div>
          <div className="r3">
            <button id="loginButton" type="submit">Login</button>
            <p>
              New User ? <a href="/register">Sign Up</a>
            </p>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
