import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CourseInstances() {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/courses')
      .then(res => setCourses(res.data))
      .catch(() => alert("Error loading courses."));
  }, []);

  const createInstance = async () => {
    if (!year || !semester || !selectedCourseId) {
      alert("Please fill all fields before creating an instance.");
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/instances', {
        year: parseInt(year),
        semester: parseInt(semester),
        course: { id: parseInt(selectedCourseId) }
      });
      alert("✅ Instance created successfully.");
      fetchInstances();
    } catch (err) {
      const message = err.response?.data || "Unknown error";

      if (message.includes("Invalid year")) {
        alert("❌ Year must be between 2000 and 2100.");
      } else if (message.includes("Invalid semester")) {
        alert("❌ Semester must be either 1 or 2.");
      } else if (message.includes("already exists")) {
        alert("❌ This instance already exists for the selected course, year, and semester.");
      } else if (message.includes("Course not found")) {
        alert("❌ Selected course ID does not exist.");
      } else {
        alert("❌ Error creating instance: " + message);
      }
    }
  };

  const fetchInstances = () => {
    if (!year || !semester) {
      alert("Please enter year and semester to view instances.");
      return;
    }

    axios.get(`http://localhost:8080/api/instances/${year}/${semester}`)
      .then(res => setInstances(res.data))
      .catch(() => alert("⚠️ No instances found or error fetching instances."));
  };

  const deleteInstance = (id) => {
    axios.delete(`http://localhost:8080/api/instances/${year}/${semester}/${id}`)
      .then(() => {
        alert("🗑️ Instance deleted.");
        fetchInstances();
      })
      .catch(() => alert("❌ Failed to delete instance."));
  };

  return (
    <div className="card">
      <h2>Manage Course Instances</h2>

      <input
        value={year}
        onChange={e => setYear(e.target.value)}
        placeholder="Year (e.g., 2025)"
      />

      <input
        value={semester}
        onChange={e => setSemester(e.target.value)}
        placeholder="Semester (1 or 2)"
      />

      <select
        value={selectedCourseId}
        onChange={e => setSelectedCourseId(e.target.value)}
      >
        <option value="">Select Course</option>
        {courses.map(c => (
          <option key={c.id} value={c.id}>
            {c.courseCode} - {c.title}
          </option>
        ))}
      </select>

      <div className="mb-2">
        <button onClick={createInstance} className="btn mr-1">Create Instance</button>
        <button onClick={fetchInstances} className="btn">View Instances</button>
      </div>

      <ul className="list">
        {instances.map(i => (
          <li key={i.id} className="list-item">
            <strong>{i.course.courseCode}</strong> - {i.course.title} |
            Year: {i.year}, Semester: {i.semester}
            <button
              onClick={() => deleteInstance(i.course.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseInstances;


