import { TiThMenuOutline } from "react-icons/ti";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router";

function Header({ toggleDarkMode, darkMode, openSideMenu }) {
  const [notificationToggle, setNotificationToggle] = useState(false);

  const openNotication = () => {
    setNotificationToggle(!notificationToggle);
  };
  return (
    <div className="relative">
      <nav
        className="bg-white h-14 fixed z-50 left-0 right-0 border-b border-gray-200
     dark:border-gray-700 dark:bg-gray-800 top-0 mb-80 pl-2 pr-2 lg:pl-7 lg:pr-7"
      >
        <div className="flex items-center justify-between gap-2 mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={openSideMenu}
              className=" border border-gray-400 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 lg:hidden"
            >
              <TiThMenuOutline className="dark:text-white" />
            </button>
            <Link to={'/'}>
              <span className="font-extrabold text-blue-800 lg:text-2xl">
                Budgettee
              </span>
            </Link>
          </div>
          <div className="div">
            <input
              type="text"
              className="bg-gray-200 dark:bg-gray-500 border-none outline-0 p-2 rounded-lg w-30 lg:w-70"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center gap-8">
            <button onClick={openNotication}>
              <IoNotifications className="size-5" />
            </button>
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <MdWbSunny className="dark:text-white size-5" />
              ) : (
                <FaMoon className="dark:text-white size-5" />
              )}
            </button>
          </div>
        </div>
        {notificationToggle && (
          <div className="w-72 h-80 bg-white rounded-xs shadow-lg absolute right-0 lg:right-20 top-14 p-4 lg:h-88 lg:w-80 dark:bg-gray-700">
            <span className="font-bold">Notification</span>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
