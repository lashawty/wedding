import './navbar.styles.sass';
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Info from '../info/info.component'
import FormWrap from '../formwrap/formwrap.component'

const Navbar = () => {
 
  const [buttonHeight, setButtonHeight] = useState(0);

  useEffect(() => {
    const el = document.querySelector(".info-wrap");
    if (el) {
      setButtonHeight(el.offsetHeight);
    }
  }, []);

  const [isInfoClicked, setIsInfoClicked] = useState(false);
   useEffect(() => {

    const tl = gsap.timeline();

    if (isInfoClicked) {
      gsap.to('.form-wrap', {duration: 1, x: 200});
      gsap.to('.info-show', {duration: 1, y: -1 * buttonHeight})
      gsap.to('.info-close', {duration: 1, y: -1 * buttonHeight})
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
      gsap.to('.info-show', {duration: 1, y: 0})
      gsap.to('.info-close', {duration: 1, y: 0})
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

  const [isFormClicked, setIsFormClicked] = useState(false);
   useEffect(() => {

    const tl = gsap.timeline();

    if (isFormClicked) {
      gsap.to('.info-wrap', {duration: 1, x: -200});
      gsap.to('.form-show', {duration: 1, y: -1 * buttonHeight})
      gsap.to('.form-close', {duration: 1, y: -1 * buttonHeight})
      tl.to('.first', {duration: 1, y: 1000})
      .to('.second', {duration: 1, y: 1000}, '-=0.5')
      .to('.third', {duration: 1, y: 1000}, '-=0.5')
      .to('.fourth', {duration: 1, y: 1000}, '-=0.5')
      .to('.fifth', {duration: 1, y: 1000}, '-=0.5')
      .to('.form-container', {
        duration: 2,
        x: 0,
        yPercent: 0,  
        ease: "power4"
      });
    } else {
      gsap.to('.info-wrap', {duration: 1, x: 0});
      gsap.to('.form-show', {duration: 1, y: 0})
      gsap.to('.form-close', {duration: 1, y: 0})
      tl.to('.form-container', {
        duration: 1,
        x: 0,
        yPercent: -200,
        ease: "power4"
      })
      .to('.fifth', {duration: 1, y: 0}, '-=0.5')
      .to('.fourth', {duration: 1, y: 30}, '-=0.5')
      .to('.third', {duration: 1, y: 60}, '-=0.5')
      .to('.second', {duration: 1, y: 90 }, '-=0.5')
      .to('.first', {duration: 1, y: 120}, '-=0.5')
      
    }
  }, [isFormClicked, gsap.getProperty('.form-wrap', 'x')]);

  const handleInfoClick = () => {
    setIsInfoClicked(!isInfoClicked);
  };
  const handleFormClick = () => {
    setIsFormClicked(!isFormClicked);
  };

  return (
    <nav className='nav'>
      <Info handleClick={handleInfoClick}/>
      <div className='title tracking-in-expand-fwd-top'>
        <h2>2023</h2>
        <h1> Sean & Chloe's wedding</h1>
        <h2>OCTOBER 15th</h2>
      </div>
      <FormWrap handleClick={handleFormClick}/>
    </nav>
  );
};

export default Navbar;