// src/components/StudentDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function StudentDetail() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Replace this with your actual fetch call
    const mockStudent = { id: id, name: 'John Doe', email: 'john.doe@example.com' };
    setStudent(mockStudent);
  }, [id]);

  if (!student) return <p>Loading student details...</p>;

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
    </div>
  );
}

export default StudentDetail;
