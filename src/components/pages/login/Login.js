import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login-form'>
      <div className='google-login-btn'>Log in with Google account</div>
      <div className='or'>
        <div className='line'></div>
        <div className='quote'>Or enter your account</div>
        <div className='line'></div>
      </div>
      <div className='field'>
        <div className='label'>
          Account
        </div>
        <input type='text'></input>
      </div>
      <div className='field'>
        <div className='label'>
          Password
        </div>
        <input type='password'></input>
      </div>
      <div className='space-between'>
        <div className='remember'>
          <input type="checkbox"></input>
          <span>Remember me</span>
        </div>

        <a href='/'>Forgot password?</a>
      </div>
      <div className='login-btn'>
        LOG IN
      </div>
    </div>
  )
}

