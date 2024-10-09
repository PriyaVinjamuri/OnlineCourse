// src/components/MyButton.js
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyButton = () => {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <Typography variant="h4">Welcome to Course Management</Typography>
            <Button variant="contained" color="primary">
                Get Started
            </Button>
        </div>
    );
};

export default MyButton;
