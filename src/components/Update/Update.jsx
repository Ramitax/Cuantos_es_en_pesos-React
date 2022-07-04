import React from "react";

const Update = ({ lastUpdate }) => {
  return (
    <>
      <i className="fa-solid fa-calendar me-2 text-dark-mode"></i>El tipo de
      cambio fue actualizado hoy a las {lastUpdate}
    </>
  );
};

export default Update;
