import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, Col, Row, Card, CardTitle, CardBody, Alert } from "reactstrap";
import axios from "../../api";
import loader from "../../assets/img/loader.svg";
const Login = () => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  useEffect(() => {
    seterrorMessage("");
  }, [email, password]);
  const LoginUser = () => {
    const userToLogin = {
      email: email,
      password: password,
    };
    setloading(true);

    axios
      .post("/users/login", userToLogin)
      .then((res) => {
        setTimeout(() => {
          setloading(false);
          window.alert("Success!");
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          sessionStorage.setItem("token", res.data.token);
          history.push("/dashboard");
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          setloading(false);
          seterrorMessage(err.response.data.message);
        }, 1000);
      });
  };
  return (
    <>
      {!loading ? (
        <div className="container">
          <Row>
            <Col lg={4} className="mx-auto">
              {errorMessage ? (
                <Alert color="danger">{errorMessage}</Alert>
              ) : null}
              <Card style={{ backgroundColor: "#2d2d2d" }}>
                <CardTitle
                  tag="h3"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Login
                </CardTitle>
                <CardBody>
                  <label style={{ color: "white" }} htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                  <label style={{ color: "white" }} htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                  <Button
                    color="success"
                    className="mt-3"
                    onClick={() => {
                      LoginUser();
                    }}
                  >
                    Submit
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="container">
          <Row>
            <Col lg={2} className="mx-auto">
              <img src={loader} alt="Loading..." />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Login;
