import { Link } from "react-router-dom";


const Company = () => {
  return (
    <section class="text-gray-400 w-full bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 class="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5">
          <span className="text-yellow-500">Welcome companies to </span>CareerCircuit !
        </h2>
        <div class="md:w-3/5 md:pl-6">
          <p class="leading-relaxed text-base">
            With CareerCircuit company section, your hectic task of recuirting new workforce for your company is now 
            going to become very easy.
            <hr className="my-4"></hr>
            These are some of the features of our platform- 
            <ul className="list-disc p-4 ">    
                <li> Tell about your company...</li>
                <li>Post Jobs... </li> <li> Get applications of your Jobs...</li> 
                <li>Short and filter candidates...</li>
            </ul>
            
          </p>
          <div class="flex md:mt-4 mt-6">
            <button class="inline-flex text-white bg-yellow-600 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-700 rounded">
              <Link to="/company/signin">Register Company</Link>
            </button>
            <Link to="/company/login" className="mx-4 font-semibold  text-yellow-500 underline hover:text-yellow-700">Login</Link>
            <Link to="/companypage" className="mx-4 font-semibold  text-purple-500 underline hover:text-purple-700">Explore Companies</Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
