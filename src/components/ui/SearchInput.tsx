import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { Button, Col, Container, Input, Row } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import "./SearchInput.scss";

function SearchInput() {
  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3 wrap-form">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Search menu items"
              aria-label="Search menu items"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchInput;
