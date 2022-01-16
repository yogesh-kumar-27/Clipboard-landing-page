import React from "react";
import img1 from "../images/logo-google.png";
import img2 from "../images/logo-ibm.png";
import img3 from "../images/logo-microsoft.png";
import img4 from "../images/logo-hp.png";
import img5 from "../images/logo-vector-graphics.png";

const Logos = () => {
  const logos = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
  ];
  return (
    <section className="logo">
      <div className="box-container">
        {logos.map(({ img }) => (
          <div className="box" key={img}>
            <img src={img} alt="logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
