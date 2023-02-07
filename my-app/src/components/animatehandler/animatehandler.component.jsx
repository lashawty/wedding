import "./animatehandler.styles.sass";
import { useState, useRef} from "react";
import { gsap } from "gsap";
import Navbar from "../navbar/navbar.component";
import Images from '../image/image.component';
import LogoWrap from '../logo/logo.component'
const AnimateHandler = () => {
    const [color, setColor] = useState('')
    const getColor = (color) => {
        setColor(color)
      }

    const changeColor = () => {
        console.log({color});
    }
    return(
    <div className="animate-handler" style={{color: color}} onClick={changeColor}>
        <Navbar />
        <Images getColor={getColor}/>
        <LogoWrap />
    </div>
    )
}

export default AnimateHandler