import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect,useState } from "react";
import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Accepted,Rejected,getallUser} from "../actions/userAction";


const ProfileToConnect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading, isAuthenticated, user} = useSelector((state) => state.user);
  const [AID, setAID] = useState("");

  const { users } = useSelector((state) => state.allusers);

  const Accept=()=>{
    let myForm=new FormData();
    myForm.set("id",AID);
    dispatch(Accepted(myForm));
  }
  const Decline=()=>{
    let myForm=new FormData();
    myForm.set("id",AID);
    dispatch(Rejected(myForm));
  }


  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
   
    dispatch(getallUser());
  }, [dispatch, isAuthenticated]);

  return (<>
    {loading ? (<p>Fetching data..please hang on!</p>):(
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-2 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
          {users && users.map((getuser) => (
            <>
            {user.notifications && user.notifications.map((noti)=>(
                <>
               {getuser._id === noti.sender &&
               <>
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                <circle cx="12" cy="7" r="4">
                  <img src={getuser.avatar.url} className="" />
                </circle>
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-white text-lg">
                  {getuser.name}
                </h2>
                <div class="w-12 h-1 bg-pink-500 rounded mt-2 mb-4"></div>
                <p class="text-base text-gray-400">
                  {getuser.isCompany ? " Company " : " User "}
                </p>
              </div>
            </div>
            <div class="font-semibold sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">

              {user.isCompany ? (
                <>
                  <div className="flex flex-col gap-2">
                    <Link to="/company/profileupdate">
                      <button class="text-white w-4/5 bg-pink-500 border-0 py-1 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                        Update Profile
                      </button>
                    </Link>
                    <Link to="/postjob">
                      <button class="text-white w-4/5 bg-pink-500 border-0 py-1 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                        Post a Job
                      </button>
                    </Link>
                    <Link to="/company/getjobs">
                      <button class="text-white w-4/5 bg-pink-500 border-0 py-1 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                        All Jobs
                      </button>
                    </Link>
                    <Link to="/company/createproduct">
                      <button class="text-white w-4/5 bg-pink-500 border-0 py-1 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                        Post a Product
                      </button>
                    </Link>
                    <Link to="/company/allproducts">
                      <button class="text-white w-4/5 bg-pink-500 border-0 py-1 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                        See All Products
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <p class="leading-relaxed text-lg mb-4"><span className="font-semibold">Description : </span> {getuser.description}</p>
                  


                  <div className="flex flex-col gap-2">
                    <p>{noti.sender}</p>
                      <button onClick={()=>{
                        setAID(noti.sender);
                        Accept();}} class="text-white w-4/5 bg-pink-500 border-0 py-1 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                        Accept
                      </button>
                      <button onClick={()=>{
                            setAID(noti.sender);
                            Decline();}} class="text-white w-4/5 bg-pink-500 border-0 py-1 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                        Decline
                      </button>
                  
                  </div>
                </>
              )}
            </div>
            </>}
                </>
            
            ))}
           </>
          ))} 
            
          </div>
        </div>
      </div>
    </section> ) }
    </>
  );
};
export default ProfileToConnect;
