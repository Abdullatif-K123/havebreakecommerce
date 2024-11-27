import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "@assets/profile.jpg"; // Adjust the path to your photo

const AboutUs: React.FC = () => {
  return (
    <Container
      className="mt-5"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Row>
        <Col md={6}>
          <div style={{ textAlign: "left" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Who I am?
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.5" }}>
              My name is Abdullatif. I am a professional and enthusiastic
              programmer in my daily life. I am a quick learner with a
              self-learning attitude. I love to learn and explore new
              technologies and am passionate about problem-solving. I love
              almost all the stacks of web application development and love to
              make the web more open to the world. My core skill is based on
              JavaScript and I love to do most of the things using JavaScript. I
              am available for any kind of job opportunity that suits my skills
              and interests.
            </p>
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={myPhoto}
            alt="Abdullatif"
            style={{
              width: "270px",
              height: "300px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }} // Adjust size as necessary
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
