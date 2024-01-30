import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Header from "./Header";
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main>
      <div className="grid grid-cols-8 h-full w-full">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div
          className={`${
            isSidebarOpen
              ? "col-span-12 sm:col-span-5 lg:col-span-6"
              : "col-span-12"
          }`}
        >
          <Header
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="bg-slate-50">
            <div
              className={` ${
                isSidebarOpen ? "max-w-7xl" : "max-w-screen-2xl"
              } min-h-screen w-full mx-auto px-4 lg:px-0`}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
