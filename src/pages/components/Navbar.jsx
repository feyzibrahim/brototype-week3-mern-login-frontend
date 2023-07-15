import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gray-800 fixed min-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white cursor-pointer" href="">
              bloggger.com
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="navbar-anchor">
                Home
              </Link>
              <Link to="/profile" className="navbar-anchor">
                Profile
              </Link>
              {user ? (
                <button className="navbar-anchor" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/signup" className="navbar-anchor">
                    Signup
                  </Link>
                  <Link
                    to="/login"
                    className="navbar-anchor border border-gray-600"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
