
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <NavLink to="/" className="brand">
          QuickByte<span>.</span>
        </NavLink>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/offers">Offers</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>

      <footer>
        <h3>QuickByte</h3>
        <p>Fresh Food. Fast Delivery. Every Day.</p>
        <p>© 2026 QuickByte</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
