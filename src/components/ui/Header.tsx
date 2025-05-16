import "./Header.scss";
import headerBg from "./../../assets/header.png";

import React from "react";
import { Col, Container, Row } from "reactstrap";

function Header() {
  return (
    <div className='header-index p-0'>
      <Container fluid style={{ background: `url(${headerBg}) center` }}>
        <Row style={{ padding: 0 }}>
          <Col style={{ padding: 0 }}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
