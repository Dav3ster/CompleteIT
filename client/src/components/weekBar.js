import React from "react";
import Container from "react-bootstrap/esm/Container";
import Calendar from "react-calendar";
import "./styling/weekBarStyle.css"

function weekBar() {
  const today = new Date();
  const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
  const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7);

  
  return (
    <Container>
      <center>
        <Calendar value={today} minDate={startOfWeek} maxDate={endOfWeek} />
      </center>
    </Container>
  );
}

export default weekBar;
