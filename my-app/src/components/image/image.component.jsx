import "./images.styles.sass";
import React, {useEffect, useState, useRef, useContext} from "react";
import pictureArr from "../picture/picture.component";
import gsap from "gsap";
import {Observer} from "gsap/Observer";
gsap.registerPlugin(Observer);
const Images = () => {
  const containerRef = useRef(null);
  const [bg, setBg] = useState("");
  const [element, setElement] = useState(".first");
  let delta = 30
  let win = document.body.clientWidth
  const goDown = () => {
    console.log('render');
    const first = document.querySelector(".first");
    const second = document.querySelector(".second");
    const third = document.querySelector(".third");
    const fourth = document.querySelector(".fourth");
    const fifth = document.querySelector(".fifth");

    gsap.to('.first', {duration:1, y: 0, zIndex: 1, opacity: .2,}, )
    gsap.to('.second', {duration:1, y: delta * 4, zIndex: 5, opacity: 1})
    gsap.to('.third', {duration:1, y: delta * 3, zIndex: 4, opacity: .8},)
    gsap.to('.fourth', {duration:1, y: delta * 2, zIndex: 3, opacity: .6},)
    gsap.to('.fifth', {duration:1, y: delta , zIndex: 2, opacity: .4},)
    
    
    
      if (first) {
        first.classList.remove("first");
        first.classList.add("fifth");
      }
  
      if (second) {
        second.classList.remove("second");
        second.classList.add("first");
      }
  
      if (third) {
        third.classList.remove("third");
        third.classList.add("second");
      }
  
      if (fourth) {
        fourth.classList.remove("fourth");
        fourth.classList.add("third");
      }
  
      if (fifth) {
        fifth.classList.remove("fifth");
        fifth.classList.add("fourth");
      }

    const currentFirst = document.querySelector(".first");
    const showBg = currentFirst.getAttribute("bg");
    setBg(showBg);

  };

  // const goUp = () => {
  //   const first = document.querySelector(".first");
  //   const second = document.querySelector(".second");
  //   const third = document.querySelector(".third");
  //   const fourth = document.querySelector(".fourth");
  //   const fifth = document.querySelector(".fifth");

  //   if (first) {
  //     first.classList.remove("first");
  //     first.classList.add("second");
  //   }

  //   if (second) {
  //     second.classList.remove("second");
  //     second.classList.add("third");
  //   }

  //   if (third) {
  //     third.classList.remove("third");
  //     third.classList.add("fourth");
  //   }

  //   if (fourth) {
  //     fourth.classList.remove("fourth");
  //     fourth.classList.add("fifth");
  //   }

  //   if (fifth) {
  //     fifth.classList.remove("fifth");
  //     fifth.classList.add("first");
  //   }

  //   const currentFirst = document.querySelector(".first");
  //   const showBg = currentFirst.getAttribute("bg");
  //   setBg(showBg);
  // };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (mounted && containerRef.current) {
      let fired = false;
      Observer.create({
        target: containerRef.current,
        type: "wheel,touch",
        // onUp: goUp,
        scrollSpeed: -1,
        onDown: () => {
          if (!fired) {
            goDown();
            fired = true;
          }
        },
        onStop: () => {
          fired = false
        }
      });
    }
    setMounted(true)
  }, [containerRef.current, mounted]);

  useEffect(() => {
    const selectedElement = document.querySelector(element);
    if (selectedElement) {
      const showBg = selectedElement.getAttribute("bg");
      setBg(showBg);
    }
  }, [element]);


  return (
    <div className="img-container">
      <div className="img-wrap" ref={containerRef}>
        {pictureArr.map((data) => (
          <div
            className={`${data.position} img-box`}
            key={data.id}
            order={data.order}
            bg={data.bg}
          >
            <img src={data.src} alt="image" />
            <p className="text">{data.text}</p>
          </div>
        ))}
        <div className="bg" style={{backgroundColor: bg}}></div>
      </div>
    </div>
  );
};

export default Images;

