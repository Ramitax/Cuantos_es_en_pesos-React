import React from "react";
import Question from "./Question/Question";
import { Container } from "react-bootstrap";
import Description from "./Description/Description";

const Footer = ({ question, description }) => {
  return (
    <Container className="p-0">
      <Question question={question} />
      <Description description={description} />
    </Container>
  );
};

export default Footer;
