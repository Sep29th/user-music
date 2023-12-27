import Login from "../../pages/Login/index.jsx";
import AuthLayout from "../../components/layouts/AuthLayout/index.jsx";
import Register from "../../pages/Register/index.jsx";
import UserLayout from "../../components/layouts/UserLayout/index.jsx";
import Home from "../../pages/Home/index.jsx";

export const configRouters = [
  {
    element: <AuthLayout/>,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  },
  {
    element: <UserLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  }
]