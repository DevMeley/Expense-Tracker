import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Categories from "./Pages/Categories";
import { useState } from "react";
import Expenses from "./Pages/Expenses";
import Budgets from "./Pages/Budgets";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isSideBar, setIsSideBar] = useState(false)
  const location = useLocation();


  const isDashboard = location.pathname === '/dashboard';

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode)
  }
  const openSideMenu = () =>{
    setIsSideBar(!isSideBar)
  }
 
  return (
    <div className={`${darkMode && 'dark'}  bg-gray-100 ${isDashboard ? 'h-full' : 'min-h-screen'} dark:bg-gray-900 dark:text-gray-100 pb-6`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} openSideMenu={openSideMenu} />
      <SideBar openSideMenu={openSideMenu} isSideBar={isSideBar} />
      <main className="pt-20 mx-4 lg:ml-68 z-40">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/expenses" element={<Expenses/>} />
          <Route path="/budgets" element={<Budgets/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
