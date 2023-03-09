import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Nav";
import Col from "react-bootstrap/Navbar";

import MyToDo from "../components/myToDo";
import WeekBar from "../components/WeekBar";
import PriorityList from "../components/priorityList";


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
