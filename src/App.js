import React from "react";
import Header from "./components/Header";
// import About from "./components/About";
import SideImage from "./components/SideImage";
import Heading from "./components/Heading";
import ImageCenter from "./components/ImageCenter";
import Service from "./components/Service";
import Logos from "./components/Logos";
import Clip from "./components/Clip";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      {/* <About /> */}
      <Heading
        title="Keep track of your snippets"
        text="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
      />
      <SideImage />
      <ImageCenter/>
      <Service/>
      <Logos/>
      <Clip/>
      <Footer/>
    </div>
  );
};

export default App;
