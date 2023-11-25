import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  NEW_POST_FAIL,
  ALL_POST_FAIL,
  ALL_POST_REQUEST,
  ALL_POST_SUCCESS,
  NEW_COMMENT_REQUEST,
  NEW_COMMENT_SUCCESS,
  NEW_COMMENT_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_FAIL,
  POST_DETAILS_SUCCESS,
  NEW_LIKE_REQUEST,
  NEW_LIKE_SUCCESS,
  NEW_LIKE_FAIL,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  ALL_USER_FAIL,
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  SPECIFIC_USER_FAIL,
  SPECIFIC_USER_REQUEST,
  SPECIFIC_USER_SUCCESS,
  NEW_CONNECTION_REQUEST,
  NEW_CONNECTION_SUCCESS,
  NEW_CONNECTION_FAIL,
ACCEPT_CONNECTION_REQUEST,
ACCEPT_CONNECTION_SUCCESS,
ACCEPT_CONNECTION_FAIL,
REJECT_CONNECTION_REQUEST,
REJECT_CONNECTION_SUCCESS,
REJECT_CONNECTION_FAIL,

  CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";


// Register
export const register = (userData) => async (dispatch) => {
  try {
    console.log(userData);
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
   
    const { data } = await axios.post(`/register`, userData, config);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });

  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`/me`);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};


//logout
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/password/forgot`, email, config);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};



// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(`/me/update`, userData, config);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Create Post
export const createpost = (userData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_POST_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/me/post`, userData, config);

    dispatch({ type: NEW_POST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: NEW_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// Get All Posts
export const getallPost =() => async (dispatch) => {
    try {
      dispatch({ type: ALL_POST_REQUEST });

      const { data } = await axios.get("/allposts");

      dispatch({
        type: ALL_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_POST_FAIL,
        payload: error.response.data.message,
      });
    }
  };


//comment
  export const Comment = (userData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_COMMENT_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(`/docomment`, userData, config);
  
      dispatch({ type: NEW_COMMENT_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: NEW_COMMENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  //get post details

  export const getPostDetails=(id)=>async(dispatch)=>{
    try{
      dispatch({ type: POST_DETAILS_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.get(`/post/${id}`, config);
  
      dispatch({ type:POST_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: POST_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  //like
  export const Like = (userData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_LIKE_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(`/dolike`, userData, config);
  
      dispatch({ type: NEW_LIKE_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: NEW_LIKE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Get All users
export const getallUser =() => async (dispatch) => {
  try {
    dispatch({ type: ALL_USER_REQUEST });

    const { data } = await axios.get("/allusers");

    dispatch({
      type: ALL_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get specific user details
export const SpecUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: SPECIFIC_USER_REQUEST });

    const { data } = await axios.get(`/else/${id}`);

    dispatch({ type: SPECIFIC_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: SPECIFIC_USER_FAIL, payload: error.response.data.message });
  }
};

  //Connection request
  export const Connect = (userid) => async (dispatch) => {
    try {
      dispatch({ type: NEW_CONNECTION_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(`/doconnect`, userid, config);
  
      dispatch({ type: NEW_CONNECTION_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: NEW_CONNECTION_FAIL,
        payload: error.response.data.message,
      });
    }
  };

   //Accept Connection request
   export const Accepted = (userid) => async (dispatch) => {
    try {
      dispatch({ type: ACCEPT_CONNECTION_REQUEST });  
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(`/AcceptConnection`, userid, config);
  
      dispatch({ type: ACCEPT_CONNECTION_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: ACCEPT_CONNECTION_FAIL,
        payload: error.response.data.message,
      });
    }
  };

   //Reject Connection request
   export const Rejected = (userid) => async (dispatch) => {
    try {
      dispatch({ type: REJECT_CONNECTION_REQUEST });  
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(`/RejectConnection`, userid, config);
  
      dispatch({ type: REJECT_CONNECTION_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: REJECT_CONNECTION_FAIL,
        payload: error.response.data.message,
      });
    }
  };