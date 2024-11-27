import React from "react";
import { useAppSelector } from "@store/hooks";
import { LottieHandler } from "@components/feedback";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashboardAdd from "@components/eCommerce/Dashboard/DashboardAdd";
const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log(user);
  if (!user?.isAdmin) {
    return (
      <Container>
        <div className="d-flex flex-column align-items-center">
          <LottieHandler type="error" />
          <h2>You don't have a permission to access the dashboard</h2>
          <Link to="/" replace={true}>
            Go back to home page!
          </Link>
        </div>
      </Container>
    );
  }
  return <DashboardAdd />;
};

export default Dashboard;
