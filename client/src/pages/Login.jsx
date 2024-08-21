import React from "react";
import { useFormik, Form, Field } from "formik";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = () => {
  const [loginUser, { loading }] = useMutation(LOGIN_USER);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const { data } = await loginUser({ variables: values });
        if (!data || !data.login) {
          throw new Error("no data returned from the server");
        }
        await Auth.login(data.login.token);
        console.log("user logged in");
      } catch (err) {
        console.log("Error:", error.message);
        console.log("Stack trace:", error.stack);
        setErrors({ submit: "could not login in user" });
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="pwd"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit" disabled={formik.isSubmitting}>Login</button>
        {formik.errors.submit && <div>{formik.errors.submit}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
