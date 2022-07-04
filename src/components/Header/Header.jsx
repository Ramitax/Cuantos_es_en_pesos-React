import React from "react";
import Subtitle from "./Subtitle/Subtitle";
import Title from "./Title/Title";

const Header = ({ title, subtitle }) => {
  return (
    <>
      <Title title={title} />
      <Subtitle subtitle={subtitle} />
    </>
  );
};

export default Header;
