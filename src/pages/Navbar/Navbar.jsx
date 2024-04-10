import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navLink = (
    <>
      <li>
        <Link className="font-semibold text-lg" to="/">
          Home
        </Link>
      </li>
      {user && (
        <li>
          <Link className="font-semibold text-lg" to="/update">
            Update Profile
          </Link>
        </li>
      )}
    </>
  );
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" bg-base-100">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className=" lg:px-10 navbar shadow-md "
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-[#ed5b31] ">The Luxury</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end flex gap-3">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <div className="w-12 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                className={`mt-14 mr-24 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ${
                  showMenu ? "block" : "hidden"
                }`}
              >
                <li>
                  <button className="btn btn-sm bg-[#ed5b31] text-white">
                    {user?.displayName || "User name not found"}
                  </button>
                </li>
              </ul>
              <button
                className="btn bg-[#ed5b31] text-white px-5"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn bg-[#ed5b31] text-white px-7">
              Sing In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
