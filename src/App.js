// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme'; // Import the custom theme

// Importing pages and components
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'; // Adding SignupPage import
import CoursePage from './pages/CoursePage';
import AddCoursePage from './pages/AddCoursePage';
import StudentList from './components/StudentList'; // Student List Component
import AddStudentPage from './pages/AddStudentPage'; // Add Student Page Component
import StudentDetail from './components/StudentDetail'; // Student Detail Component
import CourseDetail from './components/CourseDetail';
import Navbar from './components/Navbar';

import './styles/App.css'; // Import the CSS file for global styles

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <Routes>
            {/* Existing routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} /> {/* Adding Signup route */}
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/add-course" element={<AddCoursePage />} />
            <Route path="/courses/:id" element={<CourseDetail />} />

            {/* New student-related routes */}
            <Route path="/students" element={<StudentList />} />
            <Route path="/add-student" element={<AddStudentPage />} />
            <Route path="/students/:id" element={<StudentDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
