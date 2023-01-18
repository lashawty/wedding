import './navbar.styles.sass';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, TextPlugin);

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='title tracking-in-expand-fwd-top'>
        <h2>2023</h2>
        <h1> Sean & Chloe's wedding</h1>
        <h2>OCTOBER 15th</h2>
      </div>
    </nav>
  );
};

export default Navbar;