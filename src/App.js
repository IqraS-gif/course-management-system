import React from 'react';
import CourseList from './components/CourseList';
import AddCourse from './components/AddCourse';
import CourseInstances from './components/CourseInstances';
import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";
import './App.css';


function App() {
  // const particlesInit = useCallback(async (engine) => {
  //   await loadSlim(engine);
  // }, []);

  return (
      <div style={{ padding: '2rem', position: "relative" }}>
        <h1 className='header-title'>
          Course Management System
        </h1>
        
        <div className="card-container">
          <AddCourse />
          <CourseList />
          <CourseInstances />
        </div>

      </div>
  );
}

export default App;

// style={{ 
//           fontWeight: 'bold',
//           fontSize: '2.5rem',
//           marginBottom: '2rem',
//           color: '#2c3e50',
//           textAlign: 'center',
//           textShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }}