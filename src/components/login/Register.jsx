import React, { useState } from 'react'

import './Login.css'
import './Regester.css'
import fileImg from '../img/addAvatar.png' 

export default function Register() {
  
  const submitHandler =  (e) =>{
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  }
  
  return (
    <div id='main-register-container' className='flex'>
      <form id='register-container' className='flex' action="" onSubmit={submitHandler}>
        <h2>Chat All</h2>
        <h4>Register</h4>
        <input type="text" placeholder=' name' required/>
        <input type="email" placeholder=' email' required/>
        <input type="password"  placeholder=' password' required/>

        <input type="file"  id='file' style={{display: 'none'}} required/>
        <label htmlFor="file"><img src={fileImg} alt="" />&emsp;<b>Add Profile</b></label>
        <button>Sign Up</button>
        <h5>You have already an account? <b> <a to='/login'>Login</a></b></h5>
      </form>
    </div>
  )
}