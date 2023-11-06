import React, { useState, useRef, useEffect } from "react";
import "./Main.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { gsap } from "gsap";
import Chat from "./Chat";
import Login from "./Login";

const Regsiter = () => {

    const [showChat, setShowComponent] = useState(false);

    const Register = () => {
      setShowComponent(!showChat);
    };
  
  
    return (
      <div>
        <Container className="regContainer">
          <Row className="regRow1">
            <Col className="regCol1">
              <label className="chatRoomName">Live Chat</label>
            </Col>
          </Row>
          <Row className="regRow2">
            <Col className="regCol2">
              <label className="userName"> User Name </label>
              <input type="text" className="Input"/>      
            </Col>
          </Row> 
          <Row className="regRow3">
            <Col className="regCol3">
            <label className="email">Email Address</label>
            <input type="text" className="Input"/>
            </Col>
          </Row>
          <Row className="regRow4">
            <Col className="regCol4">
            <label className="password">Password</label>
            <input type="text" className="Input"/>
            </Col>
          </Row>
          <Row className="regRow5">
            <Col className="regCol5">
                <input type="submit" value='Register' className="submit" onClick={Register}/>
                {showChat && <Login/>}
            </Col>
          </Row>
        </Container>
      </div>
    )
}
export default Regsiter