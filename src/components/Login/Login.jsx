import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button, Form, Col, Container, Row } from "react-bootstrap";

const Login = () => {
  // const { user, setUser } = useState('');
  const useContextValue= useContext(AuthContext);
  const { isUserLogin, login } = useContextValue
  console.log(useContextValue)

  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  // const [disable, setDisable] = useState(false)

  const handleChange = (e) => {
    // console.log(e.currentTarget.value);

    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    // console.log(formErrors[e.currentTarget.name])
  };

  const findFormErrors = () => {
    const errors = {};
    const mailFormat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // email field
    if (!input?.email || input?.email === "") {
      errors.email = "Email address is required";
    } else if (!input?.email.match(mailFormat) || input?.email.length > 35) {
      errors.email = "Email address is invalid";
    }

    // password field
    if (!input?.password || input?.password === "") {
      errors.password = "Password is required";
    } else if (input?.password.trim().length < 8)
      errors.password = "Password should be greater than 8";
      

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    }
    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(isUserLogin);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (findFormErrors(input)) {
      console.log(input);
      // setIsUserLogin(!isUserLogin)
      login()
      navigate('/dashboard')
      setInput({ email: '', password: '' })
    }
    else {
      // setShowMessage(true)
      // setDisable(true)
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            sm={{ span: 8, offset: 2 }}
            id="loginbox"
            style={{ marginTop: 50 }}
          >
            <div className="login-form">
              <div className="group-title" style={{ marginBottom: 30 }}>
                <h2>Login</h2>
              </div>
              <Form noValidate method="post" onSubmit={submitHandler}>
                <Row>
                  <Form.Group
                    as={Col}
                    lg="12"
                    className="content"
                    controlId="email"
                    style={{ marginBottom: 25 }}
                  >
                    <Form.Label>
                      Enter Email
                      <sup>*</sup>
                    </Form.Label>

                    <Form.Control
                      name="email"
                      required
                      type="text"
                      placeholder="Email"
                      value={input?.email}
                      onChange={(e) => handleChange(e)}
                      isInvalid={!!formErrors.email}
                    />
                    {formErrors.email && (
                      <Form.Control.Feedback type="invalid">
                        {formErrors.email}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    lg="12"
                    className="content mb-20"
                    controlId="password"
                    style={{ marginBottom: 25 }}
                  >
                    <Form.Label>
                      Enter Password
                      <sup>*</sup>
                    </Form.Label>

                    <Form.Control
                      name="password"
                      required
                      type="password"
                      placeholder="Password"
                      value={input?.password}
                      onChange={(e) => handleChange(e)}
                      isInvalid={!!formErrors.password}
                    />
                    {formErrors.password && (
                      <Form.Control.Feedback type="invalid">
                        {formErrors.password}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Row>
                <Button
                  type="submit"
                  id="btn-login"
                  bsStyle="success"
                  style={{ marginTop: 10 }}
                  // disabled={disable}
                  // disabled={!formIsValid}
                >
                  Login
                  {/* {isUserLogin ? "Logout" : "Login"} */}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
