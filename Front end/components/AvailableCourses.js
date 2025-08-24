import React, { useEffect, useState } from "react";

function AvailableCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h2>Available Courses</h2>
      <table align="center" border="1" style={{ backgroundColor: "darkblue", color: "white" }}>
        <thead style={{ backgroundColor: "aqua", color: "black" }}>
          <tr>
            <th>Course Id</th>
            <th>Course Name</th>
            <th>Duration (weeks)</th>
            <th>Trainer</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.courseId} style={{ backgroundColor: "aliceblue", color: "black" }}>
              <td>{course.courseId}</td>
              <td>{course.courseName}</td>
              <td>{course.durationInWeeks}</td>
              <td>{course.trainer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AvailableCourses;
