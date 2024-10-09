// src/components/StudentList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);

  // Fetch the students (this should be connected to a backend API)
  useEffect(() => {
    // Replace this with your actual fetch call
    const mockStudents = [
      { id: 1, name: 'Anusha', email: 'Anusha23@example.com' },
      { id: 2, name: 'Raj', email: 'Raj456@example.com' },
    ];
    setStudents(mockStudents);
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} ({student.email}) - <Link to={`/students/${student.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
