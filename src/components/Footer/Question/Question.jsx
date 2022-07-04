import React from "react";

const Question = ({ question }) => {
  return (
    <>
      <h2 className="text-dark-mode">¿{question}?</h2>
    </>
  );
};

export default Question;
