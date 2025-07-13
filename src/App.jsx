import { Route, Routes, useLocation } from "react-router";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Categories from "./Pages/Categories";
import Expenses from "./Pages/Expenses";
import Budgets from "./Pages/Budgets";
import "./App.css";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [signupModal, setSignUpModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [profile, setProfile] = useState([])
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";
  const isHomePage = location.pathname === "/";
  const isSignUp = location.pathname === "/signup";
  const isLogin = location.pathname === "/login";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const openSideMenu = () => {
    setIsSideBar(!isSideBar);
  };
  const openSignUpModal = () => {
    setSignUpModal(!signupModal);
  };
  const openLoginModal = () => {
    setLoginModal(!loginModal);
  };
  // hide side bar
  const hideSideBar = isHomePage || isSignUp || isLogin;

  return (
    <div
      className={`${darkMode && "dark"}  bg-gray-100 ${
        isDashboard ? "h-full" : "min-h-screen"
      } dark:bg-gray-900 dark:text-gray-100 pb-6 `}
    >
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        openSideMenu={openSideMenu}
      />
      {!hideSideBar && (
        <SideBar openSideMenu={openSideMenu} isSideBar={isSideBar} />
      )}
      <main
        className={`pt-20 mx-4 z-40 ${isHomePage ? "lg:ml-0" : "lg:ml-68"}`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                openSignUpModal={openSignUpModal}
                signupModal={signupModal}
                setSignUpModal={setSignUpModal}
                openLoginModal={openLoginModal}
                loginModal={loginModal}
                profile={profile}
                setProfile={setProfile}
              />
            }
          />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/budgets" element={<Budgets />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
