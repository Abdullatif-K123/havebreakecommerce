// Home.js

import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "@components/common/General/CustomeCard"; // Adjust the path as necessary

const Home = () => {
  return (
    <Container
      className="mt-5 mb-5"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>
        This is just a test assignment for <strong>HAVEBREAK</strong> company
      </h2>
      <div className="container mt-5 flex item-center">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <CustomCard
              title="Categories"
              text="Explore various categories of items available in our store."
              link="/categories"
              buttonText="Go to Categories"
            />
          </Col>
          <Col>
            <CustomCard
              title="About"
              text="Learn more about our mission, vision, and values."
              link="/about-us"
              buttonText="Learn More"
            />
          </Col>
          <Col>
            <CustomCard
              title="Dashboard"
              text="Access your dashboard to view analytics and reports."
              link="/dashboard"
              buttonText="Go to Dashboard"
            />
          </Col>
          <Col>
            <CustomCard
              title="Login"
              text="Have an account?"
              link="/login"
              buttonText="Login"
            />
          </Col>
          <Col>
            <CustomCard
              title="Register"
              text="Don't have an account?"
              link="/register"
              buttonText="Register Now"
            />
          </Col>
          <Col>
            <CustomCard
              title="whishlist"
              text="View items in your whislist."
              link="/wishlist"
              buttonText="Go to wishlist"
            />
          </Col>
          <Col>
            <CustomCard
              title="cart"
              text="View your items in products"
              link="/cart"
              buttonText="View cart"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
