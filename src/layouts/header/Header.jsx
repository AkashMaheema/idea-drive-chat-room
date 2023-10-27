import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return <div>
    <Link to='/'>home</Link>
    <Link to='About-Us'>about</Link>
    <Link to='Contact-Us'>contact</Link>
  </div>;
};

export default Header;
