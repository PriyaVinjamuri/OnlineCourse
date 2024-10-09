// src/components/CourseList.js
import React from 'react';

// Sample list of courses
const courses = [
  { id: 1, name: 'Data Structures', instructor: 'Dr. Smith' },
  { id: 2, name: 'Machine Learning', instructor: 'Prof. Jane' },
  { id: 3, name: 'Cloud Computing', instructor: 'Dr. Mark' },
];

const CourseList = () => {
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - Instructor: {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
