import Image from "react-bootstrap/Image";
import "./Header.scss";
import image from "./../../assets/header.png";
import headerBg from "./../../assets/header.png";

import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

function Header() {
  return (
    <>
      <Container
        fluid
        className="header-index p-0"
        style={{ background: `url(${headerBg}) center` }}
      >
        <Row style={{ padding: 0 }}>
          <Col style={{ padding: 0 }}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
