import React from "react";
import { useFormik, Form, Field } from "formik";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupForm = () => {
  const [addUser, { loading }] = useMutation(ADD_USER);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      addUser({ variables: values })
        .then((response) => {
          const { data } = response;
          const { email, password } = values;
          return Auth.login(data.addUser.token);
        })
        .then((token) => {
          console.log("received token:", token);
          if (!token || typeof token !== "string") {
            throw new Error("invalid token");
          }
          console.log(response);
          console.log("User created and logged in");
        })
        .catch((error) => {
          console.log("error:", error);
          console.log("couldnt create user or login in");
        });
    },
  });

  return (
    <div>
      <form className='form' onSubmit={formik.handleSubmit}>
        <h2>signup here</h2>
        <label>First Name</label>
        <input
          type='firstName'
          name='firstName'
          id='firstName'
          placeholder='enter first name here'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <label>Last Name</label>
        <input
          type='lastName'
          name='lastName'
          id='lastName'
          placeholder='enter last name here'
          onChange={formik.handleChange} 
          value={formik.values.lastName}
        />

        <label>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='enter email here'
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label>Password</label>
        <input
          type='password'
          name='password'
          id='pwd'
          placeholder="enter password here"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
