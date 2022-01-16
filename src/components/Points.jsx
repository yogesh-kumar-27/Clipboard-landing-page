import React from "react";

const Points = ({ title, text }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Points;
