import React from "react";
import imageComputer from "../images/image-computer.png";
// import data from "../data";
import Points from "./Points";
const SideImage = () => {
  const data = [
    {
      title: "Quick Search",
      text: "Easily search your snippets by content, category, web address, application, and more.",
    },
    {
      title: "iCloud Sync",
      text: "  Instantly saves and syncs snippets across all your devices.",
    },
    {
      title: "Complete History",
      text: "Retrieve any snippets from the first moment you started using the app.",
    },
  ];
  return (
    <section className="sideImage">
      <div className="box-container">
        <div className="image">
          <img src={imageComputer} alt="" />
        </div>
        <div className="content">
            {
                data.map(({title,text})=>(
                    <Points
                    key={title}
                    title={title}
                    text={text}
                    />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default SideImage;
