import React from "react";
import logo from "../images/logo.svg";
import Button from "./Button";
const Header = () => {
  return (
    <header className="header">
      <div className="content">
        <img src={logo} alt="" />
        <h1>A history of everything you copy</h1>
        <div className="para">
          <p>
            {" "}
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
        </div>
        <div className="button">
          {/* <button className=" btn-1">Download for ios</button>
          <button className=" btn-2">Download for MAC</button> */}
          <Button color="btn-1" text="Download for ios" />
          <Button color="btn-2" text="Download for MAC" />

        </div>
      </div>
    </header>
  );
};

export default Header;
