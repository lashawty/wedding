import './navbar.styles.sass';
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Info from '../info/info.component'
import FormWrap from '../formwrap/formwrap.component'

const Navbar = () => {

  const [isInfoClicked, setIsInfoClicked] = useState(false);
   useEffect(() => {

    const tl = gsap.timeline();

    if (isInfoClicked) {
      gsap.to('.form-wrap', {duration: 1, x: 200});
      
      tl.to('.first', {duration: 1, y: 1000})
      .to('.second', {duration: 1, y: 1000}, '-=0.5')
      .to('.third', {duration: 1, y: 1000}, '-=0.5')
      .to('.fourth', {duration: 1, y: 1000}, '-=0.5')
      .to('.fifth', {duration: 1, y: 1000}, '-=0.5')
      .to('.list', {
        duration: 2, 
        yPercent: 0,  
        ease: "power4"
      });
    } else {
      gsap.to('.form-wrap', {duration: 1, x: 0});
      
      tl.to('.list', {
        duration: 1, 
        yPercent: -200,
        ease: "power4"
      })
      .to('.fifth', {duration: 1, y: 0}, '-=0.5')
      .to('.fourth', {duration: 1, y: 30}, '-=0.5')
      .to('.third', {duration: 1, y: 60}, '-=0.5')
      .to('.second', {duration: 1, y: 90 }, '-=0.5')
      .to('.first', {duration: 1, y: 120}, '-=0.5')
      
    }
  }, [isInfoClicked, gsap.getProperty('.form-wrap', 'x')]);

  const handleClick = () => {
    setIsInfoClicked(!isInfoClicked);
  };

  return (
    <nav className='nav'>
      <Info handleClick={handleClick}/>
      <div className='title tracking-in-expand-fwd-top'>
        <h2>2023</h2>
        <h1> Sean & Chloe's wedding</h1>
        <h2>OCTOBER 15th</h2>
      </div>
      <FormWrap />
    </nav>
  );
};

export default Navbar;