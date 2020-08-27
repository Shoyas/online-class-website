import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Course from './components/Course/Course';



function App() {
  return (
    <div className="main-container">

      {/* Create navbar using Bootstrap */}
      <Navigation></Navigation>
      
      {/* Calling Course component without using bootstrap */}
      <Course></Course>
        
        
    </div>
  );
}

export default App;
