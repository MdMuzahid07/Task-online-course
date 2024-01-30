import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [active, setActive] = useState("/dashboard/home");
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      className={`${
        isSidebarOpen ? "flex" : "hidden"
      } col-span-12 sm:col-span-3 lg:col-span-2 text-[18px] sm:text-[25px] md:text-[40px] font-bold bg-primary p-7 text-white min-h-screen w-full  bg-black relative`}
    >
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="absolute right-5 top-7 flex sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <ul className="fixed top-10">
        <li>
          <Link
            to="/dashboard"
            onClick={() => {
              setActive("/dashboard/home");
            }}
            className={
              pathname && active === "/dashboard/home"
                ? "text-red-500"
                : "text-white"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setActive("/dashboard/enrolled");
            }}
            to="enrolled"
            className={
              pathname && active === "/dashboard/enrolled"
                ? "text-red-500"
                : "text-white"
            }
          >
            My Courses
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setActive("");
            }}
            to="/certification"
            className={
              pathname && active === "" ? "text-red-500" : "text-white"
            }
          >
            Certification
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
