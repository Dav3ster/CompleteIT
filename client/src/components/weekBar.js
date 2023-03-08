import React from "react";
import Container from "react-bootstrap/esm/Container";
import Calendar from "react-calendar";
import "./styling/weekBarStyle.css"

function weekBar() {
  return (
    <Container>
      <center>
        <Calendar  />
      </center>
    </Container>
  );
}

export default weekBar;
