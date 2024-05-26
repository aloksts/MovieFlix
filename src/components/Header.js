import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  console.log(user);
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      navigate("/");
    })
    .catch((error)=>{
      navigate("/error");
    });
  };
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
              const {uid,email,displayName}=user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              navigate("/browse");
      }else{
             dispatch(removeUser());
              navigate("/");
      }
    });
    return () => unsubscribe();
 },[]);

  return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
           <>
           </> 
           {user &&
           (<div className='flex'>
            <h3 className='text-white'>{user.displayName}</h3>
            <button onClick={handleSignOut}className="font-bold text-white">(Sign Out)</button>
           </div>
           )
           
          }
      </div>
  );

};

export default Header
