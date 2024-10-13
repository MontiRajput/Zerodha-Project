import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // Redirect to your local external server
          window.location.href = "http://localhost:1574/"; // Redirect to localhost:4000
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="Container m-5 p-5">
      <div className="row p-md-5">
        <div className="col-md-6 ">
          <img src="Media/img/signup.png" style={{ maxHeight: "90%" }} />
        </div>
        <div className="col"></div>
        <div className="col-md-5">
          <h2>Login now</h2>
          <p className="text-muted">Or track your existing application</p>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1 } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-md-7">
                <label htmlFor="email" className="text-muted fw-bold">
                  Email
                </label>
                <TextField
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  id="email"
                  fullWidth
                  onChange={handleOnChange}
                  label="Required"
                  size="small"
                />
              </div>

              <div className="col-md-5">
                <label htmlFor="password" className="text-muted fw-bold">
                  Password
                </label>
                <TextField
                  required
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  id="password"
                  fullWidth
                  label="Required"
                  size="small"
                />
              </div>
            </div>

            <button type="submit" className="btn-Hero">
              Continue
            </button>
            <span className="mx-4 fw-bold text-muted">
              Don't have any Account? <Link to={"/Signup"}>Login</Link>
            </span>
          </Box>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
