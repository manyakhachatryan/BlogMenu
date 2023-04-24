import Home from "./components/pages/home/Home.js"
import Login from "./components/pages/login/Login.js";
import Register from "./components/pages/register/register.js";
import Settings from "./components/pages/settings/Settings.js";
import Single from "./components/pages/single/Single.js";
import Write from "./components/pages/write/Write.js";
import TopBar from "./components/topbar/TopBar.js";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user? <Home/> : <Register />} />
        <Route path="/login" element={user? <Home/> : <Login/>} />
        <Route path="/post/:postId" element={<Single/>} />
        <Route path="/write" element={user ? <Write/> : <Register />} />
        <Route path="/settings" element={user ? <Settings/> : <Register/>} />
      </Routes>
    </Router>
  );
}

export default App; 
