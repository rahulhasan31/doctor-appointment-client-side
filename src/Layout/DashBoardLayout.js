// import React, { useContext } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { AuthContext } from "../Context/AuthProvider";
// import useAdmin from "../Hook/useAdmin";

// import Navbar from "../Shared/Navbar/Navbar";

// const DashBoardLayout = () => {
//   const { user } = useContext(AuthContext);
//   const [isAdmin] = useAdmin(user.email);

//   return (
//     <div>
//       <div>
//         <Navbar></Navbar>
//         <div className="drawer drawer-mobile p-5 ">
//           <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//           <div className="drawer-content  ">
//             <Outlet></Outlet>
//           </div>
//           <div className="drawer-side">
//             <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//             <ul className="menu p-4 w-80 bg-sky-300  shadow-xl rounded-lg text-2xl font-semibold mr-5">
//               <Link to={"/dashboard"}>My Appointments</Link>
//               {isAdmin && (
//                 <>

//                 </>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoardLayout;

import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../Hook/useAdmin";

import Navbar from "../Shared/Navbar/Navbar";
import {
  FiFileText,
  FiFolder,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
function DashBoardLayout() {
  const [menu, setMenu] = useState(true);
  const [panel, setPanel] = useState(false);
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const togglePanel = () => {
    setPanel(!panel);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex  min-h-screen">
        <aside
          className={`flex flex-col ${
            window.outerWidth > 768 ? "" : "hidden sm:flex sm:flex-col"
          }`}
        >
          <Link className="inline-flex items-center justify-center h-20 w-full shadow-lg border border-green-500 hover:bg-blue-500 focus:bg-blue-500  ">
            <span
              className="text--500 text-4xl ml-2 mr-5"
              style={{ display: menu ? "block" : "none" }}
            >
              DASHBOARD
            </span>
            <button
              className="text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {menu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 5H5a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1zM5 10a1 1 0 100 2h14a1 1 0 100-2H5zm14 4H5a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1v-1a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </Link>
          <div className="flex-grow flex flex-col justify-between text-gray-500 ">
            <nav className="flex flex-col mx-4 my-6 space-y-4 shadow-lg border border-green-500 h-screen px-8 py-5">
              <Link
                to={"/dashboard"}
                className={`inline-flex items-center py-3 hover:text-gray-400 hover:bg-green-700 focus:text-blue-600 focus:bg-white rounded-lg px-2 ${
                  menu ? "justify-start" : "justify-center"
                }`}
              >
                <FiFolder className="h-6 w-6" />
                <span
                  className="ml-2"
                  style={{ display: menu ? "block" : "none" }}
                >
                  My Appointments
                </span>
              </Link>
              {isAdmin && (
                <>
                  <Link
                    to={"/dashboard/users"}
                    className={`inline-flex items-center py-3 text-blue-600 bg-white rounded-lg px-2 ${
                      menu ? "justify-start" : "justify-center"
                    }`}
                  >
                    <LuLayoutDashboard className="h-6 w-6" />
                    <span
                      className="ml-2"
                      style={{ display: menu ? "block" : "none" }}
                    >
                      All Users
                    </span>
                  </Link>
                  <Link
                    to={"/dashboard/adddoctor"}
                    className={`inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2 ${
                      menu ? "justify-start" : "justify-center"
                    }`}
                  >
                    <FiMessageSquare className="h-6 w-6" />
                    <span
                      className="ml-2"
                      style={{ display: menu ? "block" : "none" }}
                    >
                      Add Doctor
                    </span>
                  </Link>
                  <Link
                    to={"/dashboard/managedoctors"}
                    className={`inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2 ${
                      menu ? "justify-start" : "justify-center"
                    }`}
                  >
                    <FiFileText className="h-6 w-6" />
                    <span
                      className="ml-2"
                      style={{ display: menu ? "block" : "none" }}
                    >
                      Manage Doctor
                    </span>
                  </Link>
                </>
              )}
            </nav>
            <div className="flex justify-end">
              <Link
                className={`inline-flex p-3 hover:text-gray-400 justify-center border-gray-700 h-15 w-full border-t hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 px-2 ${
                  panel ? "bg-gray-100" : ""
                }`}
                onClick={togglePanel}
              >
                <FiSettings className="h-6 w-6" />
                <span
                  className="ml-2"
                  style={{ display: menu ? "block" : "none" }}
                >
                  Settings
                </span>
                .
              </Link>
            </div>
          </div>
        </aside>
        <div className="flex flex-col flex-grow">
          {/* <header className="flex items-center justify-between p-4   py-7">
            <div></div>
          </header> */}
          <main className="flex-grow p-6 ">
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </>
  );
}

export default DashBoardLayout;
