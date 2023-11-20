import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { clearErrors, getallPost } from "../actions/userAction";
import { useSelector, useDispatch } from "react-redux";

const Body=()=>{
    let navigate = useNavigate();
    const dispatch = useDispatch();
  const { loading, error, posts} = useSelector((state) => state.allposts);
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getallPost());
  }, [dispatch, error]);

    return (
        <div>
            <img src={require('../common/img/signin.jpg')}/>
            {posts &&
              posts.map((post) => (
                <>
                {post.images && post.images.map((image)=>(
                    <img src={image.url} />
                ))}
                <p>{post.comment}</p>
                </>
              ))}
            
        </div>
       
    )
}

export default Body;