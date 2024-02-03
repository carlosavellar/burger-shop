import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Badge } from "reactstrap";
import "./Footer.scss";

function Footer() {
  return (
    <Row className="info">
      <Col>
        <Link to="/allergy-information" className="nav-link">
          <Badge color="white">View allergy information - </Badge>
        </Link>
      </Col>
    </Row>
  );
}

export default Footer;
