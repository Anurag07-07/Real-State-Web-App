import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../redux/state';

const Header = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const toggleDropDown = () => setDropDownMenu((prev) => !prev);

  return (
    <header className="bg-white shadow-sm w-full px-4 md:px-12 py-4 flex justify-between items-center max-w-[1440px] mx-auto rounded-b-2xl z-40 relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gray-900">
        Lease<span className="text-[#7a62fe]">lodge</span>
      </Link>

      {/* Search Bar */}
      <div className="flex items-center bg-white ring-1 ring-gray-300 rounded-full px-4 py-2 w-44 sm:w-96 relative">
        <input
          type="text"
          placeholder="Search Here.."
          className="w-full bg-transparent outline-none text-sm text-gray-800"
        />
        <button className="absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center rounded-full bg-[#7a62fe] text-white hover:bg-[#6753e0] transition">
          <FaSearch size={14} />
        </button>
      </div>

      {/* User Dropdown */}
      <div className="relative">
        <div onClick={toggleDropDown} className="cursor-pointer">
          {!user ? (
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
              <FaUser className="text-gray-600" />
            </div>
          ) : (
            <img
              src={`http://localhost:3000/${user.profileImagePath.replace('public', '')}`}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover aspect-square border border-gray-200"
            />
          )}
        </div>

        {/* Dropdown Menu */}
        {dropDownMenu && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-50 flex flex-col overflow-hidden text-sm">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-gray-100 transition"
                  onClick={() => setDropDownMenu(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-3 hover:bg-gray-100 transition"
                  onClick={() => setDropDownMenu(false)}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/create-listing" className="px-4 py-3 hover:bg-gray-100 transition">
                  Add a Property
                </Link>
                <Link to={`/${user._id}/trips`} className="px-4 py-3 hover:bg-gray-100 transition">
                  Trip List
                </Link>
                <Link to={`/${user._id}/wishlist`} className="px-4 py-3 hover:bg-gray-100 transition">
                  Wish List
                </Link>
                <Link to={`/${user._id}/listing`} className="px-4 py-3 hover:bg-gray-100 transition">
                  Property List
                </Link>
                <Link to={`/${user._id}/reservation`} className="px-4 py-3 hover:bg-gray-100 transition">
                  Reservation List
                </Link>
                <button
                  onClick={() => {
                    dispatch(setLogout());
                    setDropDownMenu(false);
                    navigate('/login');
                  }}
                  className="text-left px-4 py-3 hover:bg-gray-100 transition text-red-500"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
