import React, { useState, useRef, useEffect } from "react";
import assistant from "../asset/assistant.png";
import Chat from "./Chat";
import "./Main.css";
import { gsap } from "gsap";
import AdminPanel from "./AdminPanel";
import Login from "./Login";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Regsiter from "./Regsiter";


function Assistant() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };
  const tl = useRef();
  const Assistant = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });
  }, []);
  useEffect(() => {
    let duv = 0.7;
    tl.current.to(Assistant.current, {
      duration: duv,
    });
  }, []);
  useEffect(() => {
    showComponent ? tl.current.play() : tl.current.reverse();
  }, [showComponent]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="assistant">
              <img
                src={assistant}
                alt="assistant png"
                onClick={handleClick}
                ref={Assistant}
              />
              {showComponent && <Regsiter/>}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Assistant;
