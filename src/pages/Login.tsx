import { Navigate } from "react-router-dom";
import useLogin from "@hooks/useLogin";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import {
  Form,
  Button,
  Row,
  Col,
  Alert,
  Spinner,
  Container,
} from "react-bootstrap";
import eyeOpen from "@assets/svg/eye-open.svg";
import { useState } from "react";

const Login = () => {
  const {
    error,
    loading,
    accessToken,
    formErrors,
    searchParams,
    register,
    handleSubmit,
    submitForm,
  } = useLogin();

  const [showPass, setShowPass] = useState(false);

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <Container
      className="mt-5 mb-5"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Heading title="User Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "login_required" && (
            <Alert variant="success">
              You need to login to view this content
            </Alert>
          )}

          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created, please login
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              name="email"
              label="Email Address"
              register={register}
              error={formErrors.email?.message}
            />

            <div style={{ position: "relative" }}>
              <Input
                type={showPass ? "text" : "password"} // Toggle between text and password
                name="password"
                label="Password"
                register={register}
                error={formErrors.password?.message}
              />
              <img
                src={eyeOpen}
                alt="Toggle Password Visibility"
                style={{
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  right: "40px",
                  top: "40px",
                  cursor: "pointer",
                }}
                onClick={() => setShowPass(!showPass)} // Toggle showPass state on click
              />
            </div>

            <Button variant="info" type="submit" style={{ color: "white" }}>
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner> Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>

            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
