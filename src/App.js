import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import Home from "./Pages/Home/Home/Home";
import AllBooks from "./Pages/Home/NewArrival/AllBooks";
import Cook from "./Pages/Home/NewArrival/Cook";
import Fantacy from "./Pages/Home/NewArrival/Fantacy";
import History from "./Pages/Home/NewArrival/History";
import Login from "./Pages/Home/Login/Login";
import SignUp from "./Pages/Home/SignUp/SignUp";
import SocialLogin from "./Pages/Home/Login/SocialLogin";
import Update from "./Pages/Home/Inventories/Update";
import MyItems from "./Pages/Home/MyItems/MyItems";
import PrivateRoute from "./Pages/Home/PrivateRoute/PrivateRoute";
import ManageInventories from "./Pages/Home/ManageInventories/ManageInventories";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/header",
          element: <Header></Header>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/inventory/:id",
          element: (
            <PrivateRoute>
              <Update></Update>
            </PrivateRoute>
          ),
        },
        {
          path: "/MyItems",
          element: <MyItems></MyItems>,
        },
        {
          path: "/manageInventories",
          element: <ManageInventories></ManageInventories>,
        },
        {
          path: "/socialLogin",
          element: <SocialLogin></SocialLogin>,
        },
        {
          path: "/allBooks",
          element: <AllBooks></AllBooks>,
        },
        {
          path: "/cooks",
          element: <Cook></Cook>,
        },
        {
          path: "/fantacy",
          element: <Fantacy></Fantacy>,
        },
        {
          path: "/history",
          element: <History></History>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
