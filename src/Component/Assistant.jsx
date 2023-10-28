import React, { useState, useRef, useEffect } from "react";
import assistant from "../asset/assistant.png";
import Chat from "./Chat";
import "./Main.css"
import { gsap } from "gsap";

function Assistant() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };
  const tl=useRef();
  const Assistant=useRef();


  useEffect(()=> {
    tl.current = gsap.timeline({
      paused:true
    })
  },[])
  useEffect(()=>{
    let duv=0.7;
    tl.current.to(Assistant.current,{
      duration:duv,
    })
  },[])
  useEffect(()=>{
    showComponent ? tl.current.play() : tl.current.reverse();
  },[showComponent])


  return (
    <div className="assistant">
      <img src={assistant} alt="assistant png" onClick={handleClick} ref={Assistant}/>
      {showComponent && <Chat/>}
    </div>
  );
}

export default Assistant;
