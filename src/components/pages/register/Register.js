import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className='register-form'>
      <div className='google-register-btn'>Register with Google account</div>
      <div className='or'>
        <div className='line'></div>
        <div className='quote'>Or fill out the information below</div>
        <div className='line'></div>
      </div>
      <div className='field-group'>
        <div className='field' style={{marginRight: "10px"}}>
          <div className='label'>
            First name
          </div>
          <input type='text'></input>
        </div>
        <div className='field'>
          <div className='label'>
            Last name
          </div>
          <input type='text'></input>
        </div>
      </div>
      <div className='field-group'>
        <div className='field' style={{marginRight: "10px"}}>
          <div className='label'>
            Email
          </div>
          <input type='text'></input>
        </div>
        <div className='field'>
          <div className='label'>
            Phone
          </div>
          <input type='text'></input>
        </div>
      </div>
      <div className='field'>
        <div className='label'>
          Address
        </div>
        <input type='text'></input>
      </div>
      <div className='field'>
        <div className='label'>
          Password
        </div>
        <input type='password'></input>
      </div>
      <div className='register-btn'>
        REGISTER
      </div>
    </div>
  )
}

