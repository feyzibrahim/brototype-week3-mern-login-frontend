import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/components/navbar";

import { useSelector } from "react-redux";
import Footer from "./pages/components/Footer";
import Error404 from "./pages/Error404";

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={!user ? <Home /> : <Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
