import piggyImage from "/src/util/piggy.png";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../util/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={piggyImage} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status {onlineStatus ? "✅" : "❌"} </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About Us</Link>
          </li>
          <li>
            {" "}
            <Link to={"/Contact"}> Contact Us </Link>
          </li>
          <li>
            {" "}
            <Link to={"/grocery"}> Grocery </Link>
          </li>
          <li>
            {/* <img
              className="cartimg"
              src="https://www.reshot.com/preview-assets/icons/QZY7FE92BM/shopping-cart-QZY7FE92BM.svg"
              alt="Cart"
            /> */}
            Cart
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
