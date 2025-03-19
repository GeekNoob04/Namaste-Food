import piggyImage from "../util/piggy.png";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-300 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="logo-container">
          <img className="h-14 w-auto" src={piggyImage} alt="Logo" />
        </div>

        <nav className="flex items-center">
          <ul className="flex items-center space-x-1 md:space-x-4">
            <li className="text-sm font-medium text-orange-900 flex items-center gap-1 bg-white/30 px-3 py-1 rounded-full">
              Online Status: {onlineStatus ? "✅" : "❌"}
            </li>

            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/About" },
              { name: "Contact Us", path: "/Contact" },
              { name: "Grocery", path: "/grocery" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="px-3 py-2 text-orange-900 hover:text-orange-700 font-medium transition-colors duration-200 hover:bg-orange-100/50 rounded-lg"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/cart"
                className="px-3 py-2 flex items-center gap-1 text-orange-900 hover:text-orange-700 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                <span>Cart - ({cartItems.length} items)</span>
              </Link>
            </li>

            <button
              className={`ml-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                btnNameReact === "Login"
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
