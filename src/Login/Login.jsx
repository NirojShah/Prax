import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { login } from "../Functions/Login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(login({...data}));
    navigate("/home");
  };
  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  return (
    <div id="container">
      <div id="loginForm">
        <h2>Welcome to XYZ</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input onChange={inputHandler} name="email" type="text" id="email" />
          <label htmlFor="password">Password</label>
          <input
            onChange={inputHandler}
            name="password"
            type="password"
            id="password"
          />
          <button onClick={handleSubmit} type="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
