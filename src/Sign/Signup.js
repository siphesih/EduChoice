import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; // Import Axios

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",  // Change 'name' to 'username'
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");  // To display success or error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending POST request to the backend
      const response = await axios.post("http://localhost:5000/signup", formData);

      // Handle success response
      setMessage(response.data.message);
    } catch (error) {
      // Handle error response
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Error connecting to the server.");
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-45">
      <div className="card bg-dark text-light p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center mb-3">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label> {/* Change from 'Name' to 'Username' */}
            <input
              type="text"
              name="username"  // Change name field to 'username'
              value={formData.username}
              onChange={handleChange}
              className="form-control bg-secondary text-light border-0"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control bg-secondary text-light border-0"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control bg-secondary text-light border-0"
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>

        {/* Display success or error message */}
        {message && <p className="text-center mt-3 text-light">{message}</p>}

        <p className="text-center mt-3">
          Already have an account? <a href="/login" className="text-success">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
