import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useMutation } from "@apollo/client";
import { CREATE_RSVP } from "../utils/mutations";

const RSVPForm = () => {
  const [createRSVP, { loading }] = useMutation(CREATE_RSVP);

  const RSVPValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("email is required"),
    attending: Yup.boolean(),
    guests: Yup.number().min(0, "guests must be 0 or more"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip Code is required")
  });

  return (
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
              <Field type="radio" name="attending" value="yes" />
              <label htmlFor="attending">No</label>
              <Field type="radio" name="attending" value="no" />
              <ErrorMessage name="name" component="div" />
            </div>
            <ErrorMessage name="attending" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="guests"> List of Guests</label>
            <Field type="number" id="guests" name="guests" />
            <ErrorMessage name="guests" component="div" className="error" />
          </div>

          <div>
            <div>
              <label htmlFor="address"> Street Address</label>
              <Field type="test" id="address" name="address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="city"> City:</label>
              <Field type="text" id="city" name="city" />
              <ErrorMessage name="city" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="State"> State:</label>
              <Field type="text" id="state" name="state" />
              <ErrorMessage name="state" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="zip"> Zip Code:</label>
              <Field type="number" id="zip" name="zip" />
              <ErrorMessage name="zip" component="div" className="error" />
            </div>
          </div>
        </Form>;
      }}
    </Formik>
  );
};

export default RSVPForm;
