import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import logo from "../Assets/Logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut(getAuth);
  };
  return (
    <div>
      <div className="navbar bg-base-100 font-bold bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                href="/"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/manageInventories">Manage Items</Link>
              </li>
              <li>
                <Link to="/MyItems">MyItems</Link>
              </li>
              <li>
                <Link to="//inventory/:id">Add Items</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/signup">SignUp</Link>
              </li>
              
            </ul>
          </div>
          <Link to="/" className=" rounded-full">
            <img className="h-1/2 w-1/5" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex btn">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* <a>Item 1</a> */}
              {user?.email ? (
                <>
                  <Link to="/manageInventories">Manage Items</Link>
                  <Link to="/MyItems">MyItems</Link>
                  <Link to="/inventory/:id">Add Items</Link>
                  <Link onClick={handleLogOut}>LogOut</Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  
                </>
              )}
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <Link className="btn" to="/signup">SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
