import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="flex-grow-1">
        <Outlet className="flex-grow-0" />
      </Container>
      <Footer className="footer mt-auto py-3 bg-body-tertiary" />
    </div>
  );
}

export default Layout;
