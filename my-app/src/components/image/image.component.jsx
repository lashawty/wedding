import "./images.styles.sass";
import React, {useEffect, useState, useRef, useLayoutEffect} from "react";
import pictureArr from "../picture/picture.component";
import gsap from "gsap";
import {Observer} from "gsap/Observer";
gsap.registerPlugin(Observer);
const Images = ({getColor}) => {
  const containerRef = useRef(null);
  const [bg, setBg] = useState("");
  const [color, setColor] = useState("")
  const [element, setElement] = useState(".first");
  const [reversed, setReversed] = useState(false);
  let deltaY, deltaX
  deltaY = 30 //
  deltaX = .8

  const changeClass = () => {
    const first = document.querySelector(".first");
    const second = document.querySelector(".second");
    const third = document.querySelector(".third");
    const fourth = document.querySelector(".fourth");
    const fifth = document.querySelector(".fifth");

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
    console.log('change class')
  }

  useLayoutEffect(() => {
    const goDown = () => {
      console.log('render');
      const arr = ['.first','.fifth','.fourth','.third','.second']
      for (let i = 0; i < arr.length; i++) {
        gsap.to(arr[i], {
          xPercent: -50,
          y: i * deltaY,
          zIndex: i + 1,
          opacity: 0.2 * (i + 1),
          scale: deltaX + (.05 * i)
        });
      }
      const currentFirst = document.querySelector(".first");
      const showBg = currentFirst.getAttribute("bg");
      setBg(showBg);
      const showColor = currentFirst.getAttribute("color");
      setColor(showColor);
    };
    let ctx = gsap.context(() => {
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
        changeClass()
      },
    });
    });
    
    return () => ctx.revert(); // <-- cleanup!
  }, []);

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
    <div className="img-container" >
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
            <p className="text-content">{data.content}</p>
          </div>
        ))}
        <div className="bg" style={{backgroundColor: bg}}></div>
      </div>
    </div>
  );
};

export default Images;

