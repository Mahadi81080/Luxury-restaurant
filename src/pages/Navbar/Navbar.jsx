import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link className="font-semibold text-lg" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-lg" to="/update">
          Update Profile
        </Link>
      </li>
    </>
  );
  const { logOut, user } = useContext(AuthContext);
  return (
    <div className="mx-4">
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
              {navLink}
            </ul>
          </div>
          <img
            className="w-1/3 h-12"
            src="https://i.postimg.cc/6qR610BC/logo.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm bg-[#fea60d] text-white">{user.displayName}</button>
                </li>
                <li className="mt-1">
                  <button className="btn btn-sm bg-[#fea60d] text-white" onClick={logOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn bg-[#fea60d] text-white px-7">
              Sing In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
