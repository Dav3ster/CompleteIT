import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Navbar';

const styles = {
    colStyles: {
        fontSize: "30px"
    }
}

export default function footer() {
  return (
    <Container fluid>
      <Row>
        <Col md={12} style={styles.colStyles}>
          <center>
            <p>Developed by The Three Musketeers</p>
          </center>
        </Col>
      </Row>
    </Container>
  );
}
