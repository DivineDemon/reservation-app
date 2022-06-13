import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./signup.css";

const SignUp = () => {
  const [details, setDetails] = useState({
    username: undefined,
    email: undefined,
    country: undefined,
    img: undefined,
    city: undefined,
    phone: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await axios.post("auth/register", details);
    if (res.data) {
      navigate("/login");
    } else {
      alert("Registration Failed, Try Again!");
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Profile Image"
          id="img"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Register
        </button>
      </div>
    </div>
  );
};

export default SignUp;
