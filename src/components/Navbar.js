// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        {/* Main Title */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Course Management System
        </Typography>

        {/* Navigation Buttons */}
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/signup">Signup</Button> {/* Signup Link */}
        <Button color="inherit" component={Link} to="/courses">Courses</Button>
        <Button color="inherit" component={Link} to="/add-course">Add Course</Button>

        {/* Student Management Links */}
        <Button color="inherit" component={Link} to="/students">Students</Button>
        <Button color="inherit" component={Link} to="/add-student">Add Student</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
