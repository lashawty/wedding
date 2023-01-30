import "./info.styles.sass";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import List from "../list/list.component"
import gsap from "gsap";
import {Observer} from "gsap/Observer";
gsap.registerPlugin(Observer);



const Info = () => {

  const [reversed, setReversed] = useState(false);
  const [isActive, setActive] = useState("false");
  const app = useRef();
  // store the timeline in a ref.
  const tl = useRef();

  useLayoutEffect(() => {
    const imgBoxes = document.querySelectorAll('.img-box')
    const formButton = document.querySelector('.form-button')
    gsap.set(formButton, { xPercent: 200 });
    gsap.set(imgBoxes, { opacity: 0 });
    const ctx = gsap.context(() => {
      // add a box and circle animation to our timeline and play on first render
    console.log("creating timeline");
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline()
      .to(".list", {
        opacity: 0,
        yPercent: -100,
        duration: 1.2,
      })
      .to(formButton, {
        xPercent: 0,
        duration: 1.2,
      })
      .to(imgBoxes, {
        duration: .6,
        ease: "power1.inOut", 
        opacity: 1,
      });
    }, app);
    return () => ctx.revert();
  }, []);
  
  useEffect(() => {
    // toggle the direction of our timeline
    console.log("toggling reverse to", reversed);
    tl.current.reversed(reversed);
  }, [reversed]);

  const handleList = () => {
    setActive(!isActive);
    setReversed(!reversed)
  }
  return (
    <div className="info-wrap" ref={app}>
      <div
      className={isActive ? "burger" : "burger active"}
      onClick={handleList}>
        <p className="show">Info</p>
        <p className="close">Close</p>
      </div>
      <List></List>
    </div>
  );
};

export default Info;
