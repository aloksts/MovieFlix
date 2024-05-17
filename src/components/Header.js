import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      navigate("/");
    })
    .catch((error)=>{
      navigate("/error");
    });
  };
  return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
           <>
           </> 
           <div className='flex'>
            <img src="" alt="usericon"/>
            <button onClick={handleSignOut}className="font-bold text-white">(Sign Out)</button>
           </div>
      </div>
  );

};

export default Header
