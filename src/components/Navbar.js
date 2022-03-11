import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/favicon.jpeg";

//styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <NavLink to="/">
          <h1>Home</h1>
        </NavLink>
        <NavLink to="/about">
          <h1>About</h1>
        </NavLink>
        <NavLink to="/salty">
          <h1>Salty</h1>
        </NavLink>
        <NavLink to="/sweets">
          <h1>Sweets</h1>
        </NavLink>
        <NavLink to="/contact">
          <h1>Contact Us</h1>
        </NavLink>
        <NavLink to="/cart">
          <FaShoppingCart />
        </NavLink>
      </nav>
    </div>
  );
}
