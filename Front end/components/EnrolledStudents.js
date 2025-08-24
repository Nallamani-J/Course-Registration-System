import React, { useEffect, useState } from "react";

function EnrolledStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/courses/enrolled")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h2>Enrolled Students</h2>
      <table align="center" border="1" style={{ backgroundColor: "darkblue", color: "white" }}>
        <thead style={{ backgroundColor: "aqua", color: "black" }}>
          <tr>
            <th>Student Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} style={{ backgroundColor: "aliceblue", color: "black" }}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.coursename}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnrolledStudents;
