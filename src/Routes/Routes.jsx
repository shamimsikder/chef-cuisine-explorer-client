import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import Common from "../CommonLayout/Common/Common";
import Blogs from "../Layout/Blogs/Blogs";
import About from "../Layout/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Common></Common>,
      children: [
        
        {
          path: '/',
          element: <Home></Home>,
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

      ]
    },
  ]);

  export default router