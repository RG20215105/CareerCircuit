import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-semibold">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-purple-500"> <Link to ='/'>
             Home</Link>  </a>
          <a className="mr-5 hover:text-purple-500">My Network</a>
          <a className="mr-5 hover:text-purple-500">Messages</a>
          <a className="hover:text-purple-500">Notifications</a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          
          <span className="ml-3 text-xl xl:block lg:hidden">CareerCircuit</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-1">
          <button className="inline-flex items-center bg-purple-500 border-0 py-1 px-3 text-white font-semibold focus:outline-  hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <Link to ='/signin'>
             Sign in</Link>          
          </button>
          <button className="inline-flex items-center bg-purple-500 border-0 py-1 px-3 text-white font-semibold focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <Link to ='/login'>
            Login</Link>          
          </button>
        </div>
      </div>
      {/* <hr className="border-gray-400 "></hr> */}
    </header>
  );
};
export default Header;
