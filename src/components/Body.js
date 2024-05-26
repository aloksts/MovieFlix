import { RouterProvider,createBrowserRouter} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";


const Body = () => {
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

    
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
