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
    <div>
      <nav className={`${styles.nav}  Gallery  p-1 rounded mx-auto`}>
        <ul className="d-flex list-unstyled">
          <li className="mx-3">
            <Link to="/HomePage">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/Story">Share your Story</Link>
          </li>

          <li className="mx-3">
            <Link to="/Gallery">Gallery</Link>
          </li>
        </ul>
      </nav>

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
              attending: values.attending,
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
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" id="email" />
                <ErrorMessage name="email" component="div" />
              </div>

              <div>
                <label>Are you attending?</label>
                <div role="group" aria-labelledby="attending">
                  <label htmlFor="attending">Yes</label>
                  <Field type="radio" name="attending" id="attendingYes" value="true" />
                  <label htmlFor="attending">No</label>
                  <Field type="radio" name="attending" id="attendingNo" value="false" />
                  <ErrorMessage name="attending" component="div" />
                </div>
                <ErrorMessage
                  name="attending"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="guests"> Number of Guests</label>
                <Field type="number" id="guests" name="guests" />
                <ErrorMessage name="guests" component="div" className="error" />
              </div>

              <div>
                <div>
                  <label htmlFor="address"> Street Address</label>
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
  );
};

export default Rsvp;
