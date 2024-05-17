import { RouterProvider,createBrowserRouter} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body = () => {
    const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
            errorElement:<h1>404</h1>
    
        },
        {
            path:"/browse",
            element:<Browse/>,
            errorElement:<h1>404</h1>
        }
       ]);

       useEffect(()=>{
          onAuthStateChanged(auth,(user)=>{
            if(user){
                    const {uid,email,displayname}=user.id;
                    dispatch(addUser({uid:uid,email:email,displayname:displayname}));

            }else{
                   dispatch(removeUser());
            }
          })
       },[]);

    
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
