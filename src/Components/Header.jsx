import { TiThMenuOutline } from "react-icons/ti";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

function Header({ toggleDarkMode, darkMode, openSideMenu}) {
  return (
    <nav className="bg-white h-14 fixed z-40 left-0 right-0 border-b border-gray-400 dark:bg-gray-700 top-0 mb-80 pl-2 pr-2 lg:pl-7 lg:pr-7">
      <div className="flex items-center justify-between gap-2 mt-2">
        <div className="flex items-center gap-2">
          <button onClick={openSideMenu}>
            <TiThMenuOutline className="dark:text-white" />
          </button>
          <span className="font-extrabold text-blue-800 lg:text-2xl">
            Budgettee
          </span>
        </div>
        <div className="div">
          <input
            type="text"
            className="bg-gray-200 dark:bg-gray-400 border-none outline-0 p-2 rounded-lg w-30 lg:w-70"
            placeholder="Search..."
          />
        </div>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <MdWbSunny className="dark:text-white size-5" />
          ) : (
            <FaMoon className="dark:text-white size-5"/>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Header;
