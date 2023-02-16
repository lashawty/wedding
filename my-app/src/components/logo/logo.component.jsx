import './logo.styles.sass';
import './lashawty.svg'
import {ReactComponent as Logo} from  './lashawty.svg'
import React, { useState, useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import animateJson from "./animate.json";
import { gsap } from "gsap";
const LogoWrap = () => {

  const lottieRef = useRef();
  useEffect(() => {
    lottieRef.current.setSpeed(2);
    gsap.to('.lottie', {
      y: 40,
      scale: 1.2,
      duration: 2
    })
  }, []);

  const dnone = () => {
    const entry = document.querySelector('.entry')
    entry.classList.add('dnone')
  }

  const handleAnimationComplete = (e) => {
    gsap.to('.entry', {
      opacity: 0,
      onComplete: ()=>{
        dnone()
      }
    })
  };
  return (
    <div className="entry">
      {/* <div className="logo-wrap">
        <Logo className="lashawty" alt="logo" stroke="#000" strokeWidth="1px"/>
      </div> */}
      <Lottie
      className='lottie'
      lottieRef={lottieRef}
      animationData={animateJson}
      onComplete={handleAnimationComplete}
      loop="false"
      />;
    </div>
  );
};

export default LogoWrap;