import './formwrap.styles.sass'
import Form from '../form/form.component'
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {Observer} from "gsap/Observer";
gsap.registerPlugin(Observer);

const FormWrap =()=>{
  const [reversed, setReversed] = useState(false);
  const [isActive, setActive] = useState("false");
  const app = useRef();
  // store the timeline in a ref.
  const tl = useRef();

  useLayoutEffect(() => {
    const imgBoxes = document.querySelectorAll('.img-box')
    gsap.set(imgBoxes, { opacity: 0 });
    const ctx = gsap.context(() => {
      // add a box and circle animation to our timeline and play on first render
    console.log("creating timeline");
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline()
      .to(".form-container", {
        opacity: 0,
        yPercent: -100,
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
    <div ref={app} >
      <p className='form-button' onClick={handleList}>Form</p>
      <Form />
    </div>
  );
}

export default FormWrap;