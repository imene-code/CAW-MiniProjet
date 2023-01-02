/*import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Courses from "./Components/Contact";
import Search from "./Components/CreateContact";
import List from "./Components/List";
*/
/*
 <Router>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </Router>
*/
import "./style/APP.css";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
//import router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
