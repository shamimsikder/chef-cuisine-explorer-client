import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import Common from "../CommonLayout/Common/Common";
import Blogs from "../Layout/Blogs/Blogs";
import About from "../Layout/About/About";
import Error from "../Layout/Error/Error";
import ChefDetails from "../Layout/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Common></Common>,
      children: [
        
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://chef-cuisine-explorer-server-shamimsikder.vercel.app/chef')
        }, 
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/chef-details/:id',
          element: <ChefDetails></ChefDetails>,
          loader: ({params}) => fetch(`https://chef-cuisine-explorer-server-shamimsikder.vercel.app/chefDetails/${params.id}`)
        },
        {
          path: '*',
          element: <Error></Error>
        }

      ]
    },
  ]);

  export default router