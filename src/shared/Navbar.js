import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AllContext } from "../contexts/AllContextProvider";
import cpu from "../cpu.png";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { user, dark, setDark, logOut, setUserFromDB } = useContext(AllContext);
  const navigate = useNavigate();

  const handleDarkMode = () => {
    localStorage.setItem("isDark", !dark);
    setDark(!dark);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.setItem("accessToken", "");
        setUserFromDB(null);
        navigate("/");
      })
      .catch((e) => console.error(e.message));
  };
  const navbarOptions = (
    <React.Fragment>
      <li className="mx-1">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mx-1">
        <NavLink to="/products">Products</NavLink>
      </li>
      <li className="mx-1">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {user?.uid && (
        <li className="mx-1">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <div id="navbar">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
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
              {navbarOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={cpu} alt="" />
            PC-Bikroy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navbarOptions}</ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate text-4xl mr-4">
            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox"  onClick={handleDarkMode} defaultChecked={dark? true: false}/>
            <div className="swap-on"><FaMoon/></div>
            <div className="swap-off"><FaSun/></div>
          </label>
          {user?.uid ? (
            <button onClick={handleLogOut} className="btn btn-outline">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="btn btn-outline">
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
