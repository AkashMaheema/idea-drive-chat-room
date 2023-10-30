import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { gsap } from "gsap";
import './Main.css'

const AdminPanel = () => {

    const tl=useRef();
    const container=useRef();
  
  
    useEffect(()=> {
      tl.current = gsap.timeline({
      })
    },[])

    useEffect(()=>{
      let duv=0.7;
      tl.current.to(container.current,{
        height:'53.1%',
        duration:duv,
      })
      tl.current.to(container.current,{
        width:'20%',
        duration:duv,
      })
    },[])

  return (
    <div>
      <Container className="apContainer" ref={container}>
        <Row className="apRow2">
          <Col>1 of 1</Col>
        </Row> 
      </Container>
    </div>
  );
};

export default AdminPanel;
