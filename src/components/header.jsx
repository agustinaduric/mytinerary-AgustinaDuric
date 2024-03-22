import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userActions";

const Header = () => {
    const user=useSelector((store)=>store.user.user);
    const dispatch= useDispatch()
    const handleClick = () =>{
        dispatch(logout())
    }
    return (
        <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-4 py-3 border border-gray-300 bg-[#effbf7]">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="logo" className="mr-2 w-8 sm:w-10" />
            <p className="text-xl sm:text-2xl font-bold italic">MyTinerary</p>
          </Link>
          <nav className="flex items-center text-xs sm:text-sm">
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/cities" className="mr-4 sm:mr-2">Cities</Link>
            {!user.first_name && (<div className="flex items-center border rounded border-black">
              <Link to="/login" className="px-2 py-1 flex"><img src="/user.png" alt="user" className="w-3 h-3 md:w-4 md:h-4 lg:h-4 lg:w-4 mr-1" /><p>Login</p></Link>
            </div>)}
            {user.first_name && (<button className="font-semibol px-2 py-1 border border-black rounded" onClick={handleClick}>Sign Out</button>)}
          </nav>
        </div>
      );
  };
export default Header;