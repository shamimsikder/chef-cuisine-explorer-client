const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="text-black">Hello world!</div>,
    },
  ]);

  export default router