import { Route, Routes } from "react-router";
import "./App.css";
import Test from "./Components/Test";
import Dashboard from "./Pages/Dashboard";

function App() {
  return <div>
    {/* <Test /> */}
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />}/>
    </Routes>
  </div>;
}

export default App;
