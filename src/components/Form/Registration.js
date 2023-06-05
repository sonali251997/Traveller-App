import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { Link } from "react-router-dom";

const schema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("First Name is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Last Name is required"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Registration = () => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        localStorage.setItem("user", JSON.stringify(values));
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="login">
          <div className="form">
            <form noValidate onSubmit={handleSubmit}>
              <span>Create account</span>

              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder="Enter First Name"
                className="form-control inp_text"
                id="firstName"
              />

              <p className="error">
                {errors.firstName && touched.firstName && errors.firstName}
              </p>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="Enter Last Name"
                className="form-control inp_text"
                id="lastName"
              />

              <p className="error">
                {errors.lastName && touched.lastName && errors.lastName}
              </p>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email id"
                className="form-control inp_text"
                id="email"
              />

              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
                className="form-control"
              />

              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>

              <button type="submit">Register</button>
              <p>
                Already have an account ?{" "}
                <Link className="linkbutton" to="/">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Registration;
