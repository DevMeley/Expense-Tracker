import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { SiActualbudget } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router";

function SideBar({ isSideBar, setNotificationToggle, openNotication }) {
  const menu = [
    { item: "Dashboard", icon: <MdSpaceDashboard />, link: '/dashboard'},
    { item: "Categories", icon: <BiSolidCategoryAlt />, link: "/categories" },
    { item: "Expenses", icon: <FaMoneyBillAlt />, link:"/expenses" },
    { item: "Budgets", icon: <SiActualbudget />, link:"/budgets" },
    { item: "Settings", icon: <IoSettingsSharp />, link: "/settings"},
  ];
  return (
    <div
      className={` z-40 fixed bg-white dark:bg-gray-800 top-0 left-0 border-r border-gray-400 w-62 h-screen mt-10 pt-10 sm:translate-x-0 transition-transform ${
        isSideBar ? "translate-x-0" : "-translate-x-full"
      }`}
      >
      <ul className="dark:text-gray-200 mx-4 text-gray-800 text-lg font-bold flex flex-col gap-4">
        {menu.map((list) => (
          <Link to={list.link}>
            <li className="hover:bg-gray-400 p-2 rounded-lg dark:hover:text-gray-950 flex gap-2 items-center">
              {list.icon} {list.item}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex items-center gap-4 mx-4 my-20">
        <img src="\assets\profile.JPG" alt="photo" className="h-8 w-8 border rounded-4xl"/>
        <div className="flex flex-col gap-2">
          <span>Ayantola Abisola</span>
          <span className="text-xs"><a href="mailto:#">ayantolamonsurat@gmail.com</a></span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
