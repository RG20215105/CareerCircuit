import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/userAction";
import { useEffect } from "react";
const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();
  const logoutHandler = ()=>{
    dispatch(logout())
    navigate("/");
  }
  useEffect( ()=>{
    if(isAuthenticated){
      navigate('/')
    }
  },[dispatch,isAuthenticated]);
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-semibold">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link to="/" className="mr-5 hover:text-purple-500"> Home</Link>
          <Link to="/network" className="mr-5 hover:text-purple-500">My Network</Link>
          <Link to="/chats" className="mr-5 hover:text-purple-500">Messages</Link>
          <Link to="/notifications" className="mr-5 hover:text-purple-500">Notifications</Link>
          <Link to="/jobs" className="hover:text-yellow-500">Jobs</Link>
        </nav>
        
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="ml-3 text-xl xl:block lg:hidden">CareerCircuit</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-1">
         
          { isAuthenticated ?
            <>
              <Link to='/profile' className="mx-2 hover:text-pink-500" title="Profile">{user.name}</Link>
              <button
              onClick={logoutHandler}
               className="inline-flex items-center bg-pink-500 border-0 py-1 px-3 text-white font-semibold focus:outline-  hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                Logout
              </button>
            </>
          :
            <>
              <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 text-white font-semibold focus:outline-  hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                <Link to="/company">Company</Link>
              </button>
              <button className="inline-flex items-center bg-purple-500 border-0 py-1 px-3 text-white font-semibold focus:outline-  hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                <Link to="/signin">Sign in</Link>
              </button>
              <button className="inline-flex items-center bg-purple-500 border-0 py-1 px-3 text-white font-semibold focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                <Link to="/login">Login</Link>
              </button>
            </>
          }
        </div>
      </div>
    </header>
  );
};
export default Header;
