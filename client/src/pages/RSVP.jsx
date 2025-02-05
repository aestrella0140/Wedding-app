import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useMutation } from "@apollo/client";
import { CREATE_RSVP } from "../utils/mutations";

import styles from "./homePage.module.css";
import { Link } from "react-router-dom";

const Rsvp = () => {
  const [createRSVP, { loading }] = useMutation(CREATE_RSVP);

  const RSVPValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("email is required"),
    attending: Yup.boolean(),
    guests: Yup.number().min(0, "guests must be 0 or more"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.number().required("Zip Code is required"),
  });

  return (
    <div className={`${styles.container} py-5 `} style={{ backgroundColor: "#4d634e"}}>
      <nav className={`${styles.nav} navbar shadow-sm mb-4 p-1 mx-auto p-2`} style={{ backgroundColor: "#f8f9fa"}}>
        <ul className="navbar-nav d-flex flex-row justify-content-center">
          <li className="nav-item mx-3">
            <Link to="/HomePage" className="nav-link">Home</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/Story" className="nav-link">Share your Story</Link>
          </li>

          <li className="nav-item mx-3">
            <Link to="/Gallery" className="nav-link">Gallery</Link>
          </li>
        </ul>
      </nav>

      <div className="card shadow-xl p-4 mt-3" style={{ maxWidth: "600px", margin: "auto"}}>
          <h3 className="text-center mb-4">
            RSVP
          </h3>
      <Formik
        initialValues={{
          name: "",
          email: "",
          attending: false,
          guests: 0,
          address: "",
          city: "",
          state: "",
          zip: "",
        }}
        validationSchema={RSVPValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          createRSVP({
            variables: {
              name: values.name,
              email: values.email,
              attending: values.attending === "true",
              guests: values.guests,
              address: values.address,
              city: values.city,
              state: values.state,
              zip: values.zip,
            },
          });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <Field type="text" name="name" id="name" className="form-control"/>
                <ErrorMessage name="name" component="div" className="text-danger error" />
              </div>

              <div className=" mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <Field type="text" name="email" id="email" className="form-control"/>
                <ErrorMessage name="email" component="div" className="text-danger error" />
              </div>

              <div className="form-group">
                <label className="form-label">Are you attending?</label>
                <div role="group" aria-labelledby="attending" className="radio-group">
                  <div className="radio-option">
                    <Field type="radio" name="attending" id="attendingYes" value="true" className="form-check-input" />
                    <label htmlFor="attending" className="form-check-label">Yes</label>
                  </div>
                  <div className="radio-option">
                    <Field type="radio" name="attending" id="attendingNo" value={false} className="form-check-input"/>
                    <label htmlFor="attending" className="form-check-label">No</label>
                  </div>
                  <ErrorMessage name="attending" component="div" />
                </div>
                <ErrorMessage
                  name="attending"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="guests"> Number of Guests:</label>
                <Field type="number" id="guests" name="guests" />
                <ErrorMessage name="guests" component="div" className="error" />
              </div>

                <p className="form-p">Your address is so we can send the wedding invitations! if you dont want an invitation sent to you dont fill out the address section.</p>

              <div>
                <div>
                  <label htmlFor="address"> Street Address:</label>
                  <Field type="test" id="address" name="address" />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <label htmlFor="city"> City:</label>
                  <Field type="text" id="city" name="city" />
                  <ErrorMessage name="city" component="div" className="error" />
                </div>

                <div>
                  <label htmlFor="State"> State:</label>
                  <Field type="text" id="state" name="state" />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <label htmlFor="zip"> Zip Code:</label>
                  <Field type="number" id="zip" name="zip" />
                  <ErrorMessage name="zip" component="div" className="error" />
                </div>

                <button type="submit " disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      </div>
    </div>
  );
};

export default Rsvp;
