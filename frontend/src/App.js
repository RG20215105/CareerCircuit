import './App.css';
import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signin from "./components/Signin.js";
import Login from "./components/Login.js";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Company from "./components/Company.jsx"
import CompanyLogin from "./components/CompanyLogin.jsx"
import CompanySignin from "./components/CompanySignin.jsx"
import Profile from './components/Profile.jsx';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/company" element={<Company />} />
        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/company/signin" element={<CompanySignin />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer />
    </Router>
  );
  
}

export default App;
