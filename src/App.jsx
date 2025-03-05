import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Users from "./userComponents/Users";
import Products from "./userComponents/Products";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/products">Products</Link> | <Link to="/users">Users</Link>
        </nav>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
