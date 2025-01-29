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

    validate: (values) => {
      const errors = {};
      if(!values.firstName) errors.firstName = "FirstName required";
      if(!values.lastName) errors.lastName = "lastName required";
      if(!values.email) errors.email = "email required";
      if(!values.password) errors.password = "password required";
      else if (values.password.length < 8) errors.password = "password must be atleast 8 characters";
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log("submitting values:", values)
      try {
        const { data } = await addUser({ variables: values });
        Auth.login(data.addUser.token);
        console.log("User created and logged in");
      } catch (error) {
        console.error("Error creating user:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <form className='form' onSubmit={formik.handleSubmit}>
        <h2>signup here</h2>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='enter first name here'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div style={{ color: "red" }}>{formik.errors.firstName}</div>
        )}

        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='enter last name here'
          onChange={formik.handleChange} 
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div style={{ color: "red" }}>{formik.errors.lastName}</div>
        )}
        <label>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='enter email here'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
        <label>Password</label>
        <input
          type='password'
          name='password'
          id='pwd'
          placeholder="enter password here"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}
        <div>
          <button type="submit" disabled={formik.isSubmitting || loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
