// useAuth.js
'use client'
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check authentication status here, e.g., by verifying a token stored in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // If authenticated, set the user state
      setUser({ name: 'John Doe' }); // Example user
    }
  }, []);

  return user;
};

export default useAuth;
