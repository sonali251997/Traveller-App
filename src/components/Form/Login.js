import React from "react";
import "./Login.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        console.log("log", loggedUser.email);
        if (
          values.email === loggedUser.email &&
          values.password === loggedUser.password
        ) {
          navigate("/home");
        } else {
          alert("wrong email password");
        }
        setSubmitting(true);
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
              <span>Login</span>

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

              <button type="submit">Login</button>

              <p>
                New Here ?
                <Link className="linkbutton" to="/Registration">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
