import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ToDoList from "./ToDoList";  // Import the ToDoList component
import "./styles.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todolist" element={<ToDoList />} /> {/* Add the /todolist route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
