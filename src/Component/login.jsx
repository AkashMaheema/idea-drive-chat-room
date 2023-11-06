import React, { useState, useRef, useEffect } from "react";
import "./Main.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { gsap } from "gsap";
import Chat from "./Chat";
import AdminPanel from "./AdminPanel";

const Login=() =>{

  const [showChat, setShowComponent] = useState(false);

  const Login = () => {
    setShowComponent(!showChat);
  };

  return (
    <div>
      <Container className="loginContainer">
        <Row className="loginRow1">
          <Col className="loginCol1">
            <label className="chatRoomName">Live Chat</label>
          </Col>
        </Row>
        <Row className="loginRow2">
          <Col className="loginCol2">
          <label className="email">Email Address</label>
          <input type="text" className="Input"/>
          </Col>
        </Row>
        <Row className="loginRow3">
          <Col className="loginCol3">
          <label className="password">Password</label>
          <input type="text" className="Input"/>
          </Col>
        </Row>
        <Row className="loginRow4">
          <Col className="loginCol4">
              <input type="submit" value='Login' className="submit" onClick={Login}/>
              
          </Col>
        </Row>
      </Container>
      {showChat && <Chat/>}
    </div>
  )
}

export default Login