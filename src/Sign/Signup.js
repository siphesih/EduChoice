import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",  // Changed from 'username' to 'name'
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      setMessage(response.data.message);
    } catch (error) {
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
            <label className="form-label">Name</label> {/* Changed from 'Username' to 'Name' */}
            <input
              type="text"
              name="name"  // Changed from 'username' to 'name'
              value={formData.name}
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

        {message && <p className="text-center mt-3 text-light">{message}</p>}

        <p className="text-center mt-3">
          Already have an account? <a href="/login" className="text-success">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
