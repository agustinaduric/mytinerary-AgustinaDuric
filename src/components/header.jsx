import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-4 py-3 border border-gray-300 bg-[#effbf7] w-full md:w-screen">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="logo" className="mr-2 w-8 sm:w-10" />
            <p className="text-xl sm:text-2xl font-bold italic">MyTinerary</p>
          </Link>
          <nav className="flex items-center text-xs sm:text-sm">
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/cities" className="mr-4 sm:mr-2">Cities</Link>
            <div className="flex items-center border rounded border-black">
              <img src="/user.png" alt="user" className="w-4 sm:w-6 pl-2" />
              <Link to="#" className="px-2 py-1">Login</Link>
            </div>
          </nav>
        </div>
      );
  };
export default Header;