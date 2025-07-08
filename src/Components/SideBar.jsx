import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { SiActualbudget } from "react-icons/si";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

function SideBar({ isSideBar }) {
  const menu = [
    { item: "Dashboard", icon: <MdSpaceDashboard/> },
    { item: "Categories", icon: <BiSolidCategoryAlt/> },
    { item: "Expenses", icon: <FaMoneyBillAlt/> },
    { item: "Budgets", icon: <SiActualbudget/> },
    { item: "Notification", icon: <IoNotifications/> },
    { item: "Settings", icon: <IoSettingsSharp/> },
  ];
  return (
    <div
      className={` fixed bg-white dark:bg-gray-800 top-0 left-0 border-r border-gray-400 w-60 h-screen mt-10 pt-10 sm:translate-x-0 transition-transform ${
        isSideBar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="dark:text-gray-200 text-gray-800 text-lg font-bold ml-4 flex flex-col gap-4 mr-4">
        {menu.map((list) => (
          <li className="hover:bg-gray-400 p-2 rounded-lg dark:hover:text-gray-950 flex gap-2 items-center">
            {list.icon} {list.item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
