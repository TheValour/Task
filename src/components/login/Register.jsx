import React from 'react'
import { useSharedState } from '../context/UserContext';  // context

export default function Register() {
  const { setCurrPageHandler} = useSharedState();
  
  const submitHandler =  async (e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password)
  };

  return (
      <div className='w-full'>
        <form id='login-container' className='flex flex-col items-center justify-center' onSubmit={submitHandler}>
            <h2>We Chat</h2>
            <h4 className='font-bold'>Register</h4>
            <input type="email" placeholder=' email' required className='m-2 bg-gray-100'/>
            <input type="password"  placeholder=' password' required className='m-2 bg-gray-100'/>
            <button className='bg-blue-400 p-2 text-white m-2 rounded-md'>Register</button>
            <h5>You have already account? <b  className="cursor-pointer" onClick={setCurrPageHandler}> Login </b></h5>
        </form>
      </div>
    )
  }
