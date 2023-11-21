import React, {  useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
const Profile = () => {
    let navigate = useNavigate();
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    
    const downloadpdf=()=>{
      const capture=document.querySelector('.resume');
      html2canvas(capture).then((canvas)=>{
        const imgdata=canvas.toDataURL('img/png');
        const doc=new jspdf('p','mm','a4');
        const componentWidth=doc.internal.pageSize.getWidth();
        const componentHeight=doc.internal.pageSize.getHeight();
        doc.addImage(imgdata,'PNG', 20, 0,componentWidth, componentHeight);
        doc.save('resume.pdf');
      })
    }
  
    useEffect(() => {
    
      if (!isAuthenticated ) {
        navigate("/login");
      }
    }, [isAuthenticated]);
    return (
            <div className="resume">
              <div>
                <h1>My Profile</h1>
                <img src={user.avatar.url} alt={user.name} />
                <Link to="/me/update">Edit Profile</Link>
                <Link to="/me/post">NEW POST</Link>
              </div>
              <div>
                <div>
                  <h4>Full Name</h4>
                  <p>{user.name}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>{user.phoneno}</p>
                </div>
                <div>
                  <h4>Joined On</h4>
                  <p>{String(user.createdAt).substr(0, 10)}</p>
                </div>
  
                <div>
                  <Link to="/password/update">Change Password</Link>
                </div>
              </div>
              <div>
              <button onClick={downloadpdf}>Download Resume</button>
            </div>
            </div>
            
    );
  };
  
  export default Profile;
  