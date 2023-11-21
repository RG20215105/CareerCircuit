import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updateProfile } from "../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../constants/userConstants";
import { useNavigate } from "react-router-dom";
import google from "../common/img/google.png";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(user.avatar);
  const [description, setDescription] = useState("");
  const [skills, setskills] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [skill, setSkill] = useState("");
  const [years, setYears] = useState("");
  const [grade, setGrade] = useState("");


  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("phoneno", phoneno);
    myForm.set("avatar", avatar);
    myForm.set("company",company);
    myForm.set("role",role);
    myForm.set("college",college);
    myForm.set("course",course);
    myForm.set("description", description);
    myForm.set("skills", skills);
    myForm.set("years", years);
    myForm.set("grade", grade);
    dispatch(updateProfile(myForm));
  };

  const addSkill=(e)=>{
  e.preventDefault();
    setskills(current => [...current,skill]);
  }

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phoneno);
      setAvatar(user.avatar);
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
    
      navigate("/account");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, alert, user, isUpdated]);
  return (
          <div >
            <div>
              <h2 >Update Profile</h2>

              <form encType="multipart/form-data" onSubmit={updateProfileSubmit}>
                <div >
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div >
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div >
                  
                  <input
                    type="number"
                    placeholder="Phone Number"
                    required
                    name="phoneno"
                    value={phoneno}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div id="updateProfileImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                  />
                </div>
                <div >
                  <h1>Experience</h1>
                  <input
                    type="text"
                    placeholder="Company"
                    name="comapny"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                   <input
                    type="text"
                    placeholder="Years"
                    name="years"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                </div>
                <div >
                  <h1>Education</h1>
                  <input
                    type="text"
                    placeholder="College"
                    name="college"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Course"
                    name="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Grade"
                    name="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </div>
                <div >
                  <h1>Description</h1>
                  <input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  </div>
                  <div >
                  <h1>Skills</h1>
                  <input
                    type="text"
                    placeholder="skill"
                    name="skill"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                  />
                  <button onClick={addSkill}>Add Skill</button>
                  </div>
                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div>
  );
};

export default UpdateProfile;
