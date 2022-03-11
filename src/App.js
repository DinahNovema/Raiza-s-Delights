import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Sweets from "./pages/Sweets";
import Salty from "./pages/Salty";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

//styles
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/salty" element={<Salty />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
