import piggyImage from "../util/namastefood.png";
import { useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-indigo-950 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="logo-container flex items-center cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <img className="h-20 w-auto" src={piggyImage} alt="Logo" />
          <h1 className="ml-1 text-xl font-bold text-white bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
            Namaste Food
          </h1>
        </div>

        <nav className="flex items-center">
          <ul className="flex items-center space-x-6">
            <li className="text-sm font-medium text-gray-200 flex items-center gap-2 bg-indigo-900/40 px-3 py-1 rounded-full border border-indigo-700/30 shadow-md">
              <span>Status:</span>
              <span className={`flex h-2 w-2 relative`}>
                <span
                  className={`absolute inline-flex h-full w-full rounded-full ${
                    onlineStatus ? "bg-green-400" : "bg-red-400"
                  } opacity-75 animate-ping`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    onlineStatus ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </span>
              <span className="text-xs">
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </li>

            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/About" },
              { name: "Contact Us", path: "/Contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="px-4 py-2 text-gray-200 font-medium transition-all duration-200 rounded-md inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-indigo-400 after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:transition-all hover:after:w-3/4 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/cart"
                className="px-4 py-2 flex items-center gap-2 text-gray-200 font-medium bg-indigo-900 transition-all duration-200 rounded-md border border-indigo-600/40 shadow-md hover:shadow-indigo-700/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 hover:scale-105"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full transition-all duration-300 hover:bg-indigo-500">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
