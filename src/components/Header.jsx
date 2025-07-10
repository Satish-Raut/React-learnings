
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Login");
  console.log("Header rendered");

  // If no dependecy array =>  then useEffect is called on every render
  // if dependency array is empty => then the useEffect is called on initial render (only once)
  // if dependency array is [btnLogin] => then the useEffect is called every time when the btnLogin is updated.

  useEffect(() => {
    console.log("useEffect is called.");
  }, [btnLogin]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>

          <button
            className="login-btn"
            onClick={() => {
              if (btnLogin === "Login") {
                setbtnLogin("Logout");
              } else {
                setbtnLogin("Login");
              }
            }}
          >
            {btnLogin}
          </button>

          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          {onlineStatus ? "🟢" : "🔴"}
        </ul>
      </div>
    </div>
  );
};

export default Header;
