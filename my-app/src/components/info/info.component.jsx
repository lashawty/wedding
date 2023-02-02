import "./info.styles.sass";
// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import List from "../list/list.component"
// import gsap from "gsap";
// import {Observer} from "gsap/Observer";
// gsap.registerPlugin(Observer);

const Info = ({ handleClick }) => {
  return (
    <div className="info-wrap"
    // ref={app}
    
    >
      <div
      className="burger"
      onClick={handleClick}
      >
        <p className="show info-show">Info</p>
        <p className="close info-close">Close</p>
      </div>
      <List></List>
    </div>
  );
};

export default Info;
