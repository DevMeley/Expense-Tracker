import { Route, Routes } from "react-router";
import "./App.css";
import Test from "./Components/Test";
import Dashboard from "./Pages/Dashboard";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Categories from "./Pages/Categories";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isSideBar, setIsSideBar] = useState(false)

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode)
  }
  const openSideMenu = () =>{
    setIsSideBar(!isSideBar)
  }
  return (
    <div className={`${darkMode && 'dark'}`}>
      {/* <Test /> */}
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} openSideMenu={openSideMenu}/>
      <SideBar openSideMenu={openSideMenu} isSideBar={isSideBar}/>
      <div className="mt-10">
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
