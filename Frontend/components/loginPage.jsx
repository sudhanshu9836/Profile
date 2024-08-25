import React from 'react'
import './loginPage.css'

function LoginPage() {
  return (
    <>
      <div className="main-box">
        <div className="left">
            <img src="https://i.pinimg.com/564x/1b/5b/e3/1b5be34fa145729b51d1cf6b7d887090.jpg" alt="image" id='login-img'/>
        </div>
        <div className="right">
            <div className="r1">
            <h2>Login</h2>
            <p>Welcome back ! Please login to your <br /> account</p>
            </div>
            <div className="r2">
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id='username' placeholder='Enter your username'/>
                </div>
                <div className="field">
                    <label htmlFor="passcode">Password</label>
                    <input type="password" name='passcode' id='passcode' placeholder='Enter your password'/>
                </div>
            </div>
            <div className="r3">
            <button id='loginButton'>Login</button>
            <p>New User ? <a href="">Sign Up</a></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
