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
import PostJob from './components/PostJob.jsx';
import Jobs from './components/Jobs.jsx';
import PostProduct from './components/PostProduct.jsx';
import MyJobs from './components/MyJobs.jsx';
import MyProducts from "./components/MyProducts.jsx";
import Applicants from './components/Applicants.jsx';
import ExploreCompany from './components/ExploreCompany.jsx';
import ProfileUpdateCompany from './components/ProfileUpdateCompany.jsx';
import ProfileCompany from "./components/ProfileCompany.jsx"


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
        <Route path="/postjob" element={<PostJob/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/company/getjobs" element={<MyJobs/>} />
        <Route path="/company/createproduct" element={<PostProduct/>} />
        <Route path="/company/allproducts" element={ <MyProducts/>}></Route>
        <Route path="/company/applicants" element={ <Applicants/>}></Route>
        <Route path="/company/explore" element={ <ExploreCompany/>}></Route>
        <Route path="/company/profileupdate" element={ <ProfileUpdateCompany/>}></Route>
        <Route path='company/profile' element={<ProfileCompany/>} ></Route>

      </Routes>
      <Footer />
    </Router>
  );
  
}

export default App;
