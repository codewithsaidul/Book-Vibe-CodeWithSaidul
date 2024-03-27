import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                  : "text-lg text-[#131313CC] border border-transparent rounded-lg py-1 px-5"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                  : "text-lg text-[#131313CC] border border-transparent rounded-lg py-1 px-5"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                  : "text-lg text-[#131313CC] border border-transparent rounded-lg py-1 px-5"
              }
            >
              Books
            </NavLink>

            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                  : "text-lg text-[#131313CC] border-0 rounded-lg py-1 px-3"
              }
            >
              Listed Books
            </NavLink>

            <NavLink
              to="/pagetoread"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                  : "text-lg text-[#131313CC] border-0 rounded-lg py-1 px-5"
              }
            >
              Page To Read
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                  : "text-lg text-[#131313CC] border-0 rounded-lg py-1 px-5"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="text-base sm:text-3xl text-[#131313] font-bold">
          Book Vibe
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-x-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                : "text-lg text-[#131313CC] border border-transparent rounded-lg py-1 px-5"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                : "text-lg text-[#131313CC] border border-transparent rounded-lg py-1 px-5"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                : "text-lg text-[#131313CC] border border-transparent rounded-lg py-1 px-5"
            }
          >
            Books
          </NavLink>

          <NavLink
            to="/listed-books"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                : "text-lg text-[#131313CC] border-0 rounded-lg py-1 px-3"
            }
          >
            Listed Books
          </NavLink>

          <NavLink
            to="/pagetoread"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                : "text-lg text-[#131313CC] border-0 rounded-lg py-1 px-5"
            }
          >
            Page To Read
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg py-1 px-5"
                : "text-lg text-[#131313CC] border-0 rounded-lg py-1 px-5"
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="py-2 px-2 sm:px-5 mr-3 bg-[#23BE0A] text-white rounded-lg">
          Sign In
        </button>
        <button className="py-2 px-2 sm:px-5 bg-[#59C6D2] text-white rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar