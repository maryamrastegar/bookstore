import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
  return (


    <div id='Login-manager' className='auth_page'>
      <h1 className='mb-3 text-center'> Welcome to <br /> BookStore</h1>

      <div className='login-box'>
        <h2>Register</h2>
        <form className="form-login">
          <label for="Username" className='label-login'>Username:</label>
          <input type="Username" id="Username" className='login-input' placeholder="Username" name="Username" />
          <div className="">
            <label for="email" className='label-login'>Email:</label>
            <input type="email" id="email" className='login-input' placeholder="Email Address" name="email" />
          </div>
          <div className="">
            <label for="email" className='label-login'>Password:</label>
            <input type="password" id="email" className='login-input' placeholder="Email Address" name="email" />
          </div>
          <div className="">
            <label for="email" className='label-login'>Confirm Password:</label>
            <input type="password" id="email" className='login-input' placeholder="Email Address" name="email" />
          </div>
          <button type="submit" className='btn btn-login'>Register</button>

        </form>
        <div className='newAccount'>
          <br />
          <p className='mt-3'>Already a member? <Link to="/login">Login !</Link></p>
        </div>
      </div>
    </div>

  )
}

export default Register