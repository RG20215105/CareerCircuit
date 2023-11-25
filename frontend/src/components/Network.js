import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect,useState } from "react";
import { useNavigate} from "react-router-dom";

import axios from 'axios';


const ProfileToConnect = () => {
  const navigate = useNavigate();
  
  const {loading, isAuthenticated, user} = useSelector((state) => state.user);
  
  const [connectionDetails,setConnectionDetails] = useState({});

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }else{
        axios.get(`/getconnections/${user._id}`)
        .then(function(res){
            setConnectionDetails(res.data);
            console.log(connectionDetails);
        }).catch( function(err){
            console.log(err);
        })
    }
   
  }, [ isAuthenticated]);

  return (<>
    {connectionDetails ? (<p>Fetcing data</p>):(
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-2 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
          {connectionDetails && connectionDetails.map((getuser) => (
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

            
                
                  <p class="leading-relaxed text-lg mb-4"><span className="font-semibold">Description : </span> {getuser.description}</p>
                  
                  </div>
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
