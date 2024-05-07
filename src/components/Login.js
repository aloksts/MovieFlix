import React from 'react';
import Header from './Header';

const Login = () => {

   
  return (
    <div>
         <Header/>

    <div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_small.jpg" alt="bg"/>
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='text-3xl text-wt py-4'>Sign In</h1>
    <input type="text" placeholder='email or phone number' className='p-2 my-4 w-full bg-slate-500'/>
    <input type="password" placeholder='password' className='p-2 my-4 w-full  bg-slate-500'/>
    <button type="submit" className='p-4 my-6 bg-red-800 w-full rounded-lg'>Sign In</button>
    </form>
    </div>

  );
}

export default Login;
