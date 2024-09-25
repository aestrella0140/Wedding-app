import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useMutation } from "@apollo/client";
import { CREATE_RSVP } from "../utils/mutations";

const RSVPForm = () => {

    const [createRSVP, { loading }] = useMutation(CREATE_RSVP);

    const RSVPValidationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('email is required'),
        attending: Yup.boolean(),
        guests: Yup.number().min(0, 'guests must be 0 or more'),
    });

    return (
        <Formik 
        initialValues={{
            name: '',
            email: '',
            attending: false,
            guests: 0,
        }}
        validationSchema={RSVPValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
            createRSVP({
                variables: {
                    name: values.name,
                    email: values.email,
                    attending: values.attending,
                    guests: values.guests,
                },
            });
            setSubmitting(false);
        }}
        >
            {({ isSubmitting}) => {
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type='text' name='name' />
                        <ErrorMessage name='name' component='div' />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type='text' name='name' />
                        <ErrorMessage name='name' component='div' />
                    </div>

                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type='text' name='name' />
                        <ErrorMessage name='name' component='div' />
                    </div>

                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type='text' name='name' />
                        <ErrorMessage name='name' component='div' />
                    </div>


                </Form>
            }}
        </Formik>
    )
};

export default RSVPForm;