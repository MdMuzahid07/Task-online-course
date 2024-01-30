import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isSidebarOpen }) => {
  const [active, setActive] = useState("/dashboard/home");
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      className={`${
        isSidebarOpen ? "flex" : "hidden"
      } col-span-12 sm:col-span-3 lg:col-span-2 text-[18px] sm:text-[25px] md:text-[40px] font-bold bg-primary p-7 text-white min-h-screen w-full  bg-black`}
    >
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
      </ul>
    </div>
  );
};

export default Sidebar;
