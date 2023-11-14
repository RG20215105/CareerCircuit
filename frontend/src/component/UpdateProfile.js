import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updateProfile } from "../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../constants/userConstants";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhone] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("phoneno", phoneno);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

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
                    placeholder="Phonr Number"
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
