import useRegister from "@hooks/useRegister";
import { Navigate } from "react-router-dom";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { Form, Button, Row, Col, Spinner, Container } from "react-bootstrap";
import eyeOpen from "@assets/svg/eye-open.svg";
import { useState } from "react";

const Register = () => {
  const {
    loading,
    error,
    accessToken,
    formErrors,
    emailAvailabilityStatus,
    submitForm,
    register,
    handleSubmit,
    emailOnBlurHandler,
  } = useRegister();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

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
      <Heading title="User Registration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name"
              name="firstName"
              register={register}
              error={formErrors.firstName?.message}
            />
            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={formErrors.lastName?.message}
            />
            <Input
              label="Email Address"
              name="email"
              register={register}
              onBlur={emailOnBlurHandler}
              error={
                formErrors.email?.message
                  ? formErrors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use."
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking"}
            />
            <div style={{ position: "relative" }}>
              <Input
                type={showPass ? "text" : "password"}
                label="Password"
                name="password"
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
            <div style={{ position: "relative" }}>
              <Input
                type={showPassConfirm ? "text" : "password"}
                label="Confirm Password"
                name="confirmPassword"
                register={register}
                error={formErrors.confirmPassword?.message}
              />
              <img
                src={eyeOpen}
                alt="Toggle Confirm Password Visibility"
                style={{
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  right: "40px",
                  top: "40px",
                  cursor: "pointer",
                }}
                onClick={() => setShowPassConfirm(!showPassConfirm)} // Toggle showPassConfirm state on click
              />
            </div>
            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={
                emailAvailabilityStatus === "checking" || loading === "pending"
              }
            >
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

export default Register;
