import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AddCourse() {
  const [title, setTitle] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [description, setDescription] = useState('');
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedPrereqs, setSelectedPrereqs] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/courses')
      .then(res => setAvailableCourses(res.data))
      .catch(err => console.error("Error fetching courses", err));
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Frontend validation
  if (!title.trim() || !courseCode.trim()) {
    alert("Title and course code are required.");
    return;
  }

  const data = {
    title,
    courseCode,
    description,
    prerequisites: selectedPrereqs.map(id => ({ id: parseInt(id) }))
  };

  try {
    await axios.post('http://localhost:8080/api/courses', data);
    alert("Course added successfully");
    window.location.reload();
  } catch (err) {
    // ✅ Show backend error message
    alert("❌ Failed to add course: " + (err.response?.data || "Unknown error"));
  }
};


  const handleSelect = (e) => {
    const values = Array.from(e.target.selectedOptions).map(o => o.value);
    setSelectedPrereqs(values);
  };

  return (
    <div className="card">
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Course Title"
          required
        />
        <input
          value={courseCode}
          onChange={e => setCourseCode(e.target.value)}
          placeholder="Course Code"
          required
        />
       <textarea
  value={description}
  onChange={e => setDescription(e.target.value)}
  placeholder="Description"
  rows={4}
  maxLength={1000} // optional limit
  required
/>


        <label>Prerequisites:</label>
        <select multiple value={selectedPrereqs} onChange={handleSelect}>
          {availableCourses.map(course => (
            <option key={course.id} value={course.id}>
              {course.courseCode} - {course.title}
            </option>
          ))}
        </select>

        <button type="submit" className="btn">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;