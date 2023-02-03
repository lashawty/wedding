import "./images.styles.sass";
import React, {useEffect, useState, useRef, useContext} from "react";
import pictureArr from "../picture/picture.component";
import gsap from "gsap";
import {Observer} from "gsap/Observer";
gsap.registerPlugin(Observer);
const Images = ({getColor}) => {
  const containerRef = useRef(null);
  const [bg, setBg] = useState("");
  const [color, setColor] = useState("")
  const [element, setElement] = useState(".first");
  const [mounted, setMounted] = useState(false);
  let delta
  let win = document.body.clientWidth
  if (win > 767) {
    delta = 30
  } else {
    delta = 15
  }
  const goDown = () => {
    console.log('render');
    const first = document.querySelector(".first");
    const second = document.querySelector(".second");
    const third = document.querySelector(".third");
    const fourth = document.querySelector(".fourth");
    const fifth = document.querySelector(".fifth");

    gsap.to('.first', {duration:1, y: 0, xPercent: -50, zIndex: 1, opacity: .2,}, )
    gsap.to('.second', {duration:1, y: delta * 4, xPercent: -50, zIndex: 5, opacity: 1})
    gsap.to('.third', {duration:1, y: delta * 3, xPercent: -50, zIndex: 4, opacity: .8},)
    gsap.to('.fourth', {duration:1, y: delta * 2, xPercent: -50, zIndex: 3, opacity: .6},)
    gsap.to('.fifth', {duration:1, y: delta , xPercent: -50, zIndex: 2, opacity: .4},)
    
    
    
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
    const showColor = currentFirst.getAttribute("color");
    setColor(showColor);
  };

  
  useEffect(() => {
    if (mounted && containerRef.current) {
      let fired = false;
      Observer.create({
        target: containerRef.current,
        type: "wheel,touch",
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

  useEffect(() => {
    const selectedElement = document.querySelector(element);
    if (selectedElement) {
      const showColor = selectedElement.getAttribute("color");
      setColor(showColor);
      if (getColor) {
        getColor(showColor);
      }
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
            color={data.color}
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

