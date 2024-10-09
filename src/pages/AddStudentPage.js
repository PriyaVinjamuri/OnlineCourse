// src/pages/AddStudentPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddStudentPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, add the logic to submit the form data to the backend.
    // Example POST request to backend API can be added here.

    alert(`Student ${name} added successfully!`);
    navigate('/students'); // Redirect to student list page after adding
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentPage;
