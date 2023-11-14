import './App.css';
import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signin from "./components/Signin.js";
import Login from "./components/Login.js";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import store from "./store";
import ForgotPassword from './components/ForgotPassword.js';
import ResetPassword from './components/ResetPassword.js';
import Profile from './components/Profile.js';
import UpdateProfile from "./component/UpdateProfile.js"




function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/account" element={<Profile />}/>
        <Route path="/me/update" element={<UpdateProfile />}/>
      </Routes>
      <Footer />
    </Router>
  );
  
}

export default App;
