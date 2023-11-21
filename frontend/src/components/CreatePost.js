import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createpost } from "../actions/userAction";
import { useNavigate } from "react-router-dom";
import { NEW_POST_RESET } from "../constants/userConstants";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const { user } = useSelector((state) => state.user);
  const { success } = useSelector((state) => state.newpost);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const reviewSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("comment", comment);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    myForm.set("user",user._id);
    dispatch(createpost(myForm));

  }

  const updatePostDataChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  useEffect(() => {
    
    if (success) {
      
      navigate("/account");
      dispatch({ type: NEW_POST_RESET });
    }
  }, [dispatch, success]);
 
  return (
          <div >
            <div>
              <h2 >SUBMIT POST</h2>
              <form  onSubmit={reviewSubmitHandler}>
              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
               <input
                    type="file"
                    name="images"
                    accept="image/*"
                    onChange={updatePostDataChange}
                    multiple
                  />
                  {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
              <button>
                Submit
              </button>
            
</form>
            </div>
          </div>
  );
};

export default CreatePost;








