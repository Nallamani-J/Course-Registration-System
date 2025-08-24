import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import AvailableCourses from "./components/AvailableCourses";
import EnrolledStudents from "./components/EnrolledStudents";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Edutrack</h1>
        <nav style={{ margin: "20px"}}>
          <Link to="/register"><button>Register a Course</button></Link>
          <Link to="/courses"><button>Available Courses</button></Link>
          <Link to="/enrolled"><button>Enrolled Students</button></Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<AvailableCourses />} />
          <Route path="/enrolled" element={<EnrolledStudents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
