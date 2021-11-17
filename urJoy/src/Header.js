import React from "react";
import Heading from "./Heading";
import SolidButton from "./SolidButton";
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <Heading></Heading>
        <SolidButton name="SIGN IN"></SolidButton>
      </div>
    </div>
  );
};

export default Header;
