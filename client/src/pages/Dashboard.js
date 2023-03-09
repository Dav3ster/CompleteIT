import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Nav";
import Col from "react-bootstrap/Navbar";
import MyToDo from "../components/myToDo";
import WeekBar from "../components/weekBar";
import PriorityList from "../components/priorityList";

import "../components/styling/dashboardStyle.css";

export default function dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="tasksSorted">
            <PriorityList></PriorityList>
          </Col>
          <Col>
            {/* <h2 className="Weekly Forecast"></h2> */}
            <div id="todayToDo">
              <center>
                <h2 className="page-Title">
                  Welcome! Time to CompleteIt!
                </h2>
              </center>
              <WeekBar></WeekBar>
              <MyToDo></MyToDo>
            </div>
          </Col>
          <Col>
            {/* Placeholder for spacing reasons and for the potential Leaderboard? */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
