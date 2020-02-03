import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import "./formStyles.css";
import { Link } from "react-router-dom";


const schema = Yup.object().shape({
  Username: Yup.string().required("Username is required"),
  Email: Yup.string()
    .required("Email is required")
    .email("Email not valid"),
  Password: Yup.string().required("Password is Required"),
  ConfirmPassword: Yup.string().oneOf(
    [Yup.ref("Password")],
    "Passwords do not match"
  )
});

export const Register = () => {
  const { register, handleSubmit, errors, watch } = useForm({
    validationSchema: schema
  });
  const Password = useRef({});
  Password.current = watch("Password", "");

  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create an account</h1>

      <label>
        Username
        <input
          type="text"
          placeholder="Username"
          name="Username"
          ref={register({ required: true, max: 20, min: 3, maxLength: 80 })}
        />
        {errors.Username && <p>{errors.Username.message}</p>}
      </label>

      <label>
        Email
          <input
          type="email"
          placeholder="Email"
          name="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email && <p>{errors.Email.message}</p>}
      </label>

      <label>
        Password
        <input
          type="password"
          placeholder="Password"
          name="Password"
          ref={register({ required: true, min: 6 })}
        />
        {errors.Password && <p>{errors.Password.message}</p>}
      </label>

      <label>
        Confirm Password
          <input
          type="password"
          placeholder="Confirm Password"
          name="ConfirmPassword"
          ref={register({ required: true })}
        />
        {errors.ConfirmPassword && <p>{errors.ConfirmPassword.message}</p>}
        </label>
      <label>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Sign Up
        </button>
      </label>

      <label>
        Already have an account? &nbsp;
        <Link to="/Login" style={{ color: "white" }}>
          Sign In
        </Link>
      </label>
    </form>
  );
}