import "./animatehandler.styles.sass";
import { useState, useRef, useContext, createContext} from "react";
import { gsap } from "gsap";
import Navbar from "../navbar/navbar.component";
import Images from '../image/image.component';
import LogoWrap from '../logo/logo.component'
const SelectedContext = createContext();
const AnimateHandler = () => {
    
    const [color, setColor] = useState('')
    const getColor = (color) => {
        setColor(color)
      }

    const changeColor = () => {
        console.log({color});
    }
    return(
    <div className="animate-handler" style={{color: color}} onChange={changeColor}>
        <Navbar />
        <Images getColor={getColor}/>
        <LogoWrap />
    </div>
    )
}

export default AnimateHandler