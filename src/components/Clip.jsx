import React from "react";
import Button from "./Button";

const Clip = () => {
  return (
    <section className="clipbord">
      <div className="content">
        <h1>Clipboard for iOS and Mac OS</h1>
        <div className="para">
          <p>
            {" "}
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
        </div>
        <div className="button">
          <Button color="btn-1" text="Download for ios" />
          <Button color="btn-2" text="Download for MAC" />
        </div>
      </div>
    </section>
  );
};

export default Clip;
