import React from 'react';
import { useState ,useRef} from 'react';
import Header from './Header';
import { validData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const [isSignIn, setissignIn]=useState(true);
   const [errorMsg,seterrorMsg]=useState(null);
   const navigate=useNavigate();
  
   const email=useRef(null);
   const password=useRef(null);

   const handleButtonClick=()=>{
      //validate email and password
      const msg=validData(email.current.value, password.current.value);
      seterrorMsg(msg);
      if(msg) return;
      // singup or sign in 
      if(!isSignIn){
               //sign Up 
   createUserWithEmailAndPassword(auth, 
      email.current.value, 
      password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");

    // ...
  })
  .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        seterrorMsg(errorCode+errorMessage);
        console.log(errorCode+errorMessage);
  });
      }
   else{
         // sign in
         signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    console.log("signin");
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+errorMessage);
  });
      } 
   };
   const toggleSignInForm=()=>{
      setissignIn(!isSignIn);
  };
   return(
    <div className='container mx-auto'>
         <Header/>

    <div className='absolute'>
    <img className='container w-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_small.jpg" alt="bg"/>
    </div>
    <form onSubmit={(e)=>{e.preventDefault();}} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='text-3xl text-wt py-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
    {!isSignIn && <input type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-slate-500'/>}

    <input type="text" ref={email} placeholder='email or phone number' className='p-2 my-4 w-full bg-slate-500'/>
    <input type="password" ref={password} placeholder='password' className='p-2 my-4 w-full  bg-slate-500'/>
    {errorMsg && <p className='p-2 my-2 text-red-700'>{validData(email.current.value, password.current.value)} </p> }
    <button type="submit" className='p-4 my-6 bg-red-800 w-full rounded-lg' onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn?"New to MovieFlix? SignUp now":"Already a User ? Sign In now"}</p>

    </form>
    </div>

   );
}

export default Login;
