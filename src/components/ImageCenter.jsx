import React from "react";
import img from "../images/image-devices.png";
import Heading from "./Heading";

const Image = () => {
  return (
    <section className="image">
      <Heading
        title="Access Clipboard anywhere"
        text="Whether you’re on the go, or at your computer, you can access all your Clipboard 
  snippets in a few simple clicks."
      />
      <img src={img} alt="image-devices.png" />
    </section>
  );
};

export default Image;
