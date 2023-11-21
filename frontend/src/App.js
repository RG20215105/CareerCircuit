import './App.css';
import React,{ useEffect } from "react";

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
import UpdateProfile from "./components/UpdateProfile.js"
import UpdatePassword from "./components/UpdatePassword.js"
import CreatePost from "./components/CreatePost.js"
import DisplayPost from "./components/DisplayPost.js"
import { loadUser } from './actions/userAction.js';
import { useDispatch } from 'react-redux';


function App() {
  let dispatch=useDispatch();
  useEffect(() => {
    dispatch(loadUser());    
  },[dispatch])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/feed" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/account" element={<Profile />}/>
        <Route path="/me/update" element={<UpdateProfile />}/>
        <Route path="/password/update" element={<UpdatePassword />}/>
        <Route path="/me/post" element={<CreatePost />}/>
        <Route path="/post/:id" element={<DisplayPost />}/>
      </Routes>
      <Footer />
    </Router>
  );
  
}

export default App;
