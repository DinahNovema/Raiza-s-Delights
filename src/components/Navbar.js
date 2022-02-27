import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

//styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/about">
          <h1>About</h1>
        </Link>
        <Link to="/salty">
          <h1>Salty</h1>
        </Link>
        <Link to="/sweets">
          <h1>Sweets</h1>
        </Link>
        <Link to="/contact">
          <h1>Contact Us</h1>
        </Link>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </nav>
    </div>
  );
}
