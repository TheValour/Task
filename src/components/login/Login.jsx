import React from 'react'
// import './Login.css'

export default function Login() {
  
  const submitHandler =  async (e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password)
  };

  return (
      <div className='w-full'>
        <form id='login-container' className='w-11/12 flex flex-col items-center justify-center' onSubmit={submitHandler}>
            <h2>We Chat</h2>
            <h4>Login</h4>
            <input type="email" placeholder=' email' required/>
            <input type="password"  placeholder=' password' required/>
            <button className='bg-blue-200'>Sign In</button>
            <h5>You don't have account? <b><a href='/register'>Register</a></b></h5>
        </form>
      </div>
    )
  }



  // <div id='main-login-container' className='flex text-gray-800 w-full h-full'>
  //     <img src='./img/sideImg.jpg' alt="" />
  //     <form id='login-container' className='flex' onSubmit={submitHandler}>
  //         <h2>We Chat</h2>
  //         <h4>Login</h4>
  //         <input type="email" placeholder=' email' required/>
  //         <input type="password"  placeholder=' password' required/>
  //         <button>Sign In</button>
  //         <h5>You don't have account? <b><a to='/register'>Register</a></b></h5>
  //     </form>
  // </div>