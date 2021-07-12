import React from "react";
import { Navbar, Container, Form, Button, Col } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Navbar className="search-nav-bar" variant="dark">
      <Container>
        <Col sm={11} className="search-bar">
          <Form.Control
            type="text"
            placeholder="Search by Address / Txn Hash / Block Hash"
            className="search-bg-color"
          />
        </Col>
        <Col style={{ padding: 0 }}>
          <Button
            variant="light"
            type="submit"
            href=""
            block
            className="search-bg-color"
          >
            Search
          </Button>
        </Col>
      </Container>
    </Navbar>
  );
};

export default SearchBar;
