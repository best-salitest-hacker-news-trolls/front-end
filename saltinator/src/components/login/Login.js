import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Link } from 'react-router-dom'

const schema = Yup.object().shape({
  Username: Yup.string().required("Username is required"),
  Password: Yup.string().required("Password is Required")
});

export const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <h1>Sign In</h1>

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
        Password
        
        <input
          type="password"
          placeholder="Password"
          name="Password"
          ref={register({ required: true, min: 6 })}
        />
        
        {errors.Password && <p>{errors.Password.message}</p>}
      </label>

      
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Sign In
        </button>

        <label>Don't have an account? &nbsp;
            <Link to="/Register" style={{ color: 'white'}}>Sign Up</Link>
        </label>
        
      
    </form>
  );
}
