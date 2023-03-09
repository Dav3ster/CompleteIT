import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom"

import "../components/styling/homestyle.css"

export default function home() {
  return (
    <>
      <Container fluid className="home">
        <div className="site-Title">
            <h1>Complete It!</h1>
            <p className="site-desc">Login or Signup below to start your productivity journey!</p>
        </div>

        <div className="logSign">
        <Link to={"/Login"} className="logButtons" id="loginBtn">login</Link>
        <Link to={"/Signup"} className="logButtons" id="signupBtn">Sign up</Link>
        </div>

      </Container>
    </>
  );
}
