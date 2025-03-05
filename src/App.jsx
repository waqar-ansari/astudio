import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Users from "./userComponents/Users";
import Products from "./userComponents/Products";

function App() {
  return (
    <>
      <Router>
        <div>
          <Link to={"https://astudioassignment.netlify.app/"} target="_blank">
            Live Demo
          </Link>
        </div>
        <div>
          <Link to={"https://github.com/waqar-ansari/astudio"} target="_blank">
            Github Link
          </Link>
        </div>
        <div>
          <Link to="/products">Product's Page</Link> |{" "}
          <Link to="/users">User's Page</Link>
        </div>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
