// useAuth.js
'use client'
import jwt from 'jsonwebtoken';

function getUserNameFromToken() {
    const token = localStorage.getItem('token');
  console.log(token)
    try {
        const decoded = jwt.verify(token, 'your_secret_key');
        return decoded;
    } catch (error) {
        console.error('Error decoding token:', error);
        return false;
    }
    return false;
}

export default getUserNameFromToken;
