import './App.css';
import React,{ useEffect } from "react";

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
import PostJob from './components/PostJob.jsx';
import Jobs from './components/Jobs.jsx';
import PostProduct from './components/PostProduct.jsx';
import MyJobs from './components/MyJobs.jsx';
import MyProducts from "./components/MyProducts.jsx";
import Applicants from './components/Applicants.jsx';
import ExploreCompany from './components/ExploreCompany.jsx';
import ProfileUpdateCompany from './components/ProfileUpdateCompany.jsx';
import ProfileCompany from "./components/ProfileCompany.jsx"
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
        <Route path="/company" element={<Company />} />
        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/company/signin" element={<CompanySignin />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/postjob" element={<PostJob/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/company/getjobs" element={<MyJobs/>} />
        <Route path="/company/createproduct" element={<PostProduct/>} />
        <Route path="/company/allproducts" element={ <MyProducts/>}></Route>
        <Route path="/company/applicants" element={ <Applicants/>}></Route>
        <Route path="/company/explore" element={ <ExploreCompany/>}></Route>
        <Route path="/company/profileupdate" element={ <ProfileUpdateCompany/>}></Route>
        <Route path='company/profile' element={<ProfileCompany/>} ></Route>

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
