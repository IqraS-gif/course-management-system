// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function CourseList() {
//   const [courses, setCourses] = useState([]);

//   const fetchCourses = () => {
//     axios.get('http://localhost:8080/api/courses')
//       .then(res => setCourses(res.data))
//       .catch(err => console.error(err));
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/courses/${id}`);
//       alert("Course deleted successfully");
//       window.location.reload();
//     } catch (err) {
//       if (err.response?.status === 400 || err.response?.status === 409) {
//         alert("❌ Cannot delete: This course is a prerequisite for other courses.");
//       } else {
//         alert("⚠️ Failed to delete course.");
//       }
//     }
//   };

//   return (
//     <div className="card">
//        <h2 className="title">All Courses</h2>

//       <ul className="list">
//         {courses.map(course => (
//           <li key={course.id} className="list-item">
//             <h3>{course.courseCode}: {course.title}</h3>

//             <p>
//               Description: {typeof course.description === 'string'
//                 ? course.description
//                 : JSON.stringify(course.description)}
//             </p>

//             <p>
//               Prerequisites: {
//                 Array.isArray(course.prerequisites) && course.prerequisites.length > 0
//                   ? course.prerequisites.map(p => p.courseCode).join(', ')
//                   : 'None'
//               }
//             </p>

//             <button className="btn" onClick={() => handleDelete(course.id)} style={{ marginTop: '10px' }}>
//               Delete Course
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CourseList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState(''); // 👈 for search text

  const fetchCourses = () => {
    axios.get('http://localhost:8080/api/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/courses/${id}`);
      alert("Course deleted successfully");
      fetchCourses();
    } catch (err) {
      if (err.response?.status === 409) {
        alert("❌ Cannot delete: This course is a prerequisite for others.");
      } else {
        alert("⚠️ Failed to delete course.");
      }
    }
  };

  // 👇 Filtered courses by title or course code
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.courseCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <h2>All Courses</h2>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by title or course code"
        style={{
          marginBottom: '1rem',
          padding: '10px',
          borderRadius: '8px',
          width: '100%',
          border: '1px solid #ccc'
        }}
      />

      <ul className="list">
        {filteredCourses.map(course => (
          <li key={course.id} className="list-item">
            <h3>{course.courseCode}: {course.title}</h3>
            <p>Description: {typeof course.description === 'string' ? course.description : 'N/A'}</p>
            <p>Prerequisites: {course.prerequisites.map(p => p.courseCode).join(', ') || 'None'}</p>
            <button className="btn" onClick={() => handleDelete(course.id)}>Delete Course</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
