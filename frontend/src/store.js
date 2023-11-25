import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
forgotPasswordReducer,
  userReducer,
  profileReducer,
  postReducer,
  postsReducer,
  postDetailsReducer,
  usersReducer,
  specuserReducer,
 
} from "./reducers/userReducer";



const reducer = combineReducers({
  
  user:userReducer,
  forgotPassword:forgotPasswordReducer,
  profile:profileReducer,
  newpost:postReducer,
  allposts:postsReducer,
  post:postDetailsReducer,
  allusers:usersReducer,
  spec_user:specuserReducer
});

let initialState = {
 
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
