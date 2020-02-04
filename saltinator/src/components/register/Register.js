import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import "./formStyles.css";
import { register as registerAction } from "../../actions/register";
import { connect } from "react-redux";

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email not valid"),
  password: Yup.string().required("Password is Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords do not match"
  )
});

const Register = ({ registerAction }) => {
  let history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { register, handleSubmit, errors, watch } = useForm({
    validationSchema: schema
  });

  const Password = useRef({});
  Password.current = watch("password", "");

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    registerAction(
      {
        username: formData.username,
        password: formData.password
      },
      history
    );
  };

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <h1>Create an account</h1>

      <label>
        Username
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          ref={register({ required: true, max: 20, min: 3, maxLength: 80 })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </label>

      <label>
        Email
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <label>
        Password
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          ref={register({ required: true, min: 6 })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>

      <label>
        Confirm Password
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          ref={register({ required: true })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </label>
      <label>
        <button type="submit" onClick={handleSubmit(registerUser)}>
          Sign Up
        </button>
      </label>

      <label>
        Already have an account? &nbsp;
        <Link to="/login" style={{ color: "white" }}>
          Sign In
        </Link>
      </label>
    </form>
  );
};

export default connect(null, { registerAction })(Register);
