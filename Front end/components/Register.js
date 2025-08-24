import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", coursename: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/courses/register", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then((res) => res.text())
      .then((msg) => alert(msg))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ backgroundColor: "beige", height: "100vh", paddingTop: "50px" }}>
      <h1 style={{ color: "brown" }}>Kick Start your Career</h1>
      <form onSubmit={handleSubmit} style={{ margin: "auto", padding: "20px", width: "500px", backgroundColor: "white" }}>
        <label>Enter your Name:</label><br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} /><br />

        <label>Enter your Email-id:</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} /><br />

        <label>Enter your Course Name:</label><br />
        <select name="coursename" value={formData.coursename} onChange={handleChange}>
          <option value="">SELECT</option>
          <option value="Java FSE">Java FSE</option>
          <option value="Web Development with React">Web Development with React</option>
          <option value="Database Management (MySQL)">Database Management (MySQL)</option>
          <option value="Spring Boot & Microservices">Spring Boot & Microservices</option>
          <option value="Python for Data Science">Python for Data Science</option>
        </select><br />

        <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px" }}>SUBMIT</button>
      </form>
    </div>
  );
}

export default Register;
