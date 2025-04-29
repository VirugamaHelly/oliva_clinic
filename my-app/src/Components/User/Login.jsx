import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css'; // Optional: your custom styles

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8981/user/login", {
        email,
        password,
      });
  
      if (response.data.user) {
        alert("Login successful");
  
        // Store user and token properly
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user)); // <-- Ensure user has 'role'
  
        // navigate("/sliders"); // Uncomment if needed
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
