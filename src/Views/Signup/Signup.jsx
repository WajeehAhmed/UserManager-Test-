import React, { useRef, useState } from "react";
import { Button, Col, Row, Card, CardTitle, CardBody } from "reactstrap";
import axios from "../../api";
import loader from "../../assets/img/loader.svg";
const SignUp = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [loading, setloading] = useState(false);
  const createUser = () => {
    const userToAdd = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    setloading(true);

    axios
      .post("/users/signup", userToAdd)
      .then((res) => {
        setTimeout(() => {
          setloading(false);
          window.alert("Success!");
          console.log(res.data.doc);
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          setloading(false);

          window.alert(err.response.data.message);
        }, 1000);
      });
  };
  return (
    <>
      {!loading ? (
        <div className="container">
          <Row>
            <Col lg={4} className="mx-auto">
              <Card style={{ backgroundColor: "#2d2d2d" }}>
                <CardTitle
                  tag="h3"
                  style={{ color: "white", textAlign: "center" }}
                >
                  SignUp
                </CardTitle>
                <CardBody>
                  <label style={{ color: "white" }} htmlFor="name">
                    Name
                  </label>
                  <input type="text" class="form-control" ref={name} />
                  <label style={{ color: "white" }} htmlFor="email">
                    Email
                  </label>
                  <input type="email" class="form-control" ref={email} />
                  <label style={{ color: "white" }} htmlFor="password">
                    Password
                  </label>
                  <input type="password" class="form-control" ref={password} />
                  <Button
                    color="success"
                    className="mt-3"
                    onClick={() => {
                      createUser();
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

export default SignUp;
