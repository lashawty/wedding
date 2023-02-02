import "./animatehandler.styles.sass";
import { useState} from "react";
import { gsap } from "gsap";
import Navbar from "../navbar/navbar.component";
import Images from '../image/image.component';
import LogoWrap from '../logo/logo.component'
const AnimateHandler = () => {
    return(
    <div className="animate-handler">
        <Navbar />
        <Images />
        <LogoWrap />
    </div>
    )
}

export default AnimateHandler