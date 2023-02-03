import './navbar.styles.sass';
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Info from '../info/info.component'
import FormWrap from '../formwrap/formwrap.component'

const Navbar = () => {
 
  const [buttonHeight, setButtonHeight] = useState(0);
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const [isFormClicked, setIsFormClicked] = useState(false);
  let delta
  let win = document.body.clientWidth
  if (win > 767) {
    delta = 30
  } else {
    delta = 15
  }
  //取得按鈕高度
  useEffect(() => {
    const el = document.querySelector(".info-wrap");
    if (el) {
      setButtonHeight(el.offsetHeight);
    }
  }, []);

  useEffect(() => {

  const tl = gsap.timeline();

  if (isInfoClicked) {
    gsap.to('.form-wrap', {duration: 1, x: 200});
    gsap.to('.info-show', {duration: 1, y: -1 * buttonHeight})
    gsap.to('.info-close', {duration: 1, y: -1 * buttonHeight})
    tl.to('.first', {duration: 1, y: 1000, xPercent: -50})
    .to('.second', {duration: 1, y: 1000, xPercent: -50}, '-=0.5')
    .to('.third', {duration: 1, y: 1000, xPercent: -50}, '-=0.5')
    .to('.fourth', {duration: 1, y: 1000, xPercent: -50}, '-=0.5')
    .to('.fifth', {duration: 1, y: 1000, xPercent: -50}, '-=0.5')
    .to('.list', {
      duration: 2, 
      yPercent: 0,  
      ease: "power4"
    });
    console.log('info-leave');
  } else {
    gsap.to('.form-wrap', {duration: 1, x: 0});
    gsap.to('.info-show', {duration: 1, y: 0})
    gsap.to('.info-close', {duration: 1, y: 0})
    tl.to('.list', {
      duration: 1, 
      yPercent: -200,
      ease: "power4"
    })
    .to('.fifth', {duration: 1, y: 0, xPercent: -50}, '-=0.5')
    .to('.fourth', {duration: 1, y: delta, xPercent: -50}, '-=0.5')
    .to('.third', {duration: 1, y: delta * 2, xPercent: -50}, '-=0.5')
    .to('.second', {duration: 1, y: delta * 3, xPercent: -50}, '-=0.5')
    .to('.first', {duration: 1, y: delta * 4, xPercent: -50}, '-=0.5')
    console.log('info-back');
  }
}, [isInfoClicked]);

  
  useEffect(() => {

  const tl = gsap.timeline();

  if (isFormClicked) {
    gsap.to('.info-wrap', {duration: 1, x: -200});
    gsap.to('.form-show', {duration: 1, y: -1 * buttonHeight})
    gsap.to('.form-close', {duration: 1, y: -1 * buttonHeight})
    tl.to('.first', {duration: 1, y: 1000, xPercent: -50})
    .to('.second', {duration: 1, y: 1000, xPercent: -50}, '-=0.5')
    .to('.third', {duration: 1, y: 1000, xPercent: -50}, '-=0.5')
    .to('.fourth', {duration: 1, y: 1000, xPercent: -50}, '-=0.5')
    .to('.fifth', {duration: 1, y: 1000, xPercent: -50}, '-=0.5')
    .to('.form-container', {
      duration: 2,
      x: 0,
      yPercent: 0,  
      ease: "power4"
    });
    console.log('form-leave');
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
    .to('.fifth', {duration: 1, xPercent: -50, y: 1, }, '-=0.5')
    .to('.fourth', {duration: 1, y: delta, xPercent: -50}, '-=0.5')
    .to('.third', {duration: 1, y: delta * 2, xPercent: -50}, '-=0.5')
    .to('.second', {duration: 1, y: delta * 3, xPercent: -50}, '-=0.5')
    .to('.first', {duration: 1, y: delta * 4, xPercent: -50}, '-=0.5')
    console.log('form-back');
  }
}, [isFormClicked]);

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