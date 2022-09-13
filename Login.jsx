import React from 'react'
import { Link } from 'react-router-dom';


function LoginUser() {
  return (


    <div id='Login-manager' className='auth_page'>
      <h1 className='mb-3 text-center'> Welcome to <br /> BookStore</h1>

      <div className='login-box'>
        <h2>Login</h2>
        <form className="form-login">
          <label for="Username" className='label-login'>Username:</label>
          <input type="Username" id="Username" className='login-input' placeholder="Username" name="Username" />
          <div className="">
            <label for="email" className='label-login'>Email:</label>
            <input type="email" id="email" className='login-input' placeholder="Email Address" name="email" />
          </div>
          <button type="submit" className='btn btn-login'>Login</button>

        </form>
        <div className='newAccount'>
          <br />
          <p className='mt-3'>Not a member? <Link to="/register">Create Account</Link></p>
        </div>
      </div>
    </div>

  )
}

export default LoginUser