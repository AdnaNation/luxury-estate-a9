import { useContext } from "react";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/features">Features</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/update">Update Profile</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help Center</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className=" flex items-center text-xl md:text-3xl font-platypi"
        >
          <MdOutlineRealEstateAgent></MdOutlineRealEstateAgent>
          <span className="text-red-500">Luxury</span>Estate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 items-center">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100 "
                src={user.photoURL}
              />
            </div>

            <button
              onClick={handleSignOut}
              className="btn bg-blue-950 text-white p-1 md:p-2"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-blue-950 text-white p-1 md:p-2">
              Login
            </button>
          </Link>
        )}
      </div>
      {/* {user && (
        <div>
          <p>User : {user.displayName}</p>
          <h3>Email: {user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
