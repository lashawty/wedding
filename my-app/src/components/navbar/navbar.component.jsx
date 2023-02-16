import './navbar.styles.sass';
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Info from '../info/info.component'
import FormWrap from '../formwrap/formwrap.component'
const Navbar = () => {
  
  const [buttonHeight, setButtonHeight] = useState(0);
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const [isFormClicked, setIsFormClicked] = useState(false);
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
    tl.to(".img-box", {
      duration: 1, 
      xPercent: 100, 
      stagger: {
        amount: .3,
        from: "edges",
      },
      ease: "back.in"
    })
    .to(".img-wrap", {
      pointerEvents: "none"
    })
    .to('.list', {
      duration: 1, 
      yPercent: 0,  
      ease: "power4",
      delay: 1,
    });
    console.log('info-leave');
  } else {
    gsap.to('.form-wrap', {duration: 1, x: 0})
    gsap.to('.info-show', {duration: 1, y: 0})
    gsap.to('.info-close', {duration: 1, y: 0})
    tl.to('.list', {
      duration: 1, 
      yPercent: -200,
      ease: "power4"
    })
    .to(".img-wrap", {
      pointerEvents: "auto"
    })
    .to(".img-box", {
      duration: 1, 
      xPercent: -50, 
      stagger: {
        amount: .3,
        from: "edges",
      },
      ease: "back.out"
    })
    console.log('info-back');
  }
}, [isInfoClicked]);

  
  useEffect(() => {

  const tl = gsap.timeline();

  if (isFormClicked) {
    gsap.to('.info-wrap', {duration: 1, x: -200});
    gsap.to('.form-show', {duration: 1, y: -1 * buttonHeight})
    gsap.to('.form-close', {duration: 1, y: -1 * buttonHeight})
    gsap.to('.form-container',{
      pointerEvents: "auto"
    })
    tl.to(".img-box", {
      duration: 1, 
      xPercent: -200, 
      stagger: {
        amount: .3,
        from: "edges",
      },
      ease: "back.in"
    })
    .to(".img-wrap", {
      pointerEvents: "none"
    })
    .to('.box', {
      duration: 1,
      xPercent: 0,
      opacity: 1,
      stagger: .2,
      ease: "power4.in"
    });
    console.log('form-leave');
  } else {
    gsap.to('.info-wrap', {duration: 1, x: 0});
    gsap.to('.form-show', {duration: 1, y: 0})
    gsap.to('.form-close', {duration: 1, y: 0})
    gsap.to('.form-container',{
      pointerEvents: "none"
    })
    tl.to('.box', {
      duration: 1,
      xPercent: 100,
      stagger: .2,
      opacity: 0,
      ease: "power4.out"
    })
    .to(".img-wrap", {
      pointerEvents: "auto"
    })

    .to(".img-box", {
      duration: 1, 
      xPercent: -50, 
      stagger: {
        amount: .3,
        from: "edges",
      },
      ease: "back.out"
    })
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
      <a href='index.html' className='title tracking-in-expand-fwd-top'>
        <h2>2023</h2>
        <h1>Sean & Chloe's wedding</h1>
        <h2>OCTOBER 15th</h2>
      </a>
      <FormWrap handleClick={handleFormClick}/>
    </nav>
  );
};

export default Navbar;