import './navbar.styles.sass';
import Info from '../info/info.component'
import FormWrap from '../formwrap/formwrap.component'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Info />
      <div className='title tracking-in-expand-fwd-top'>
        <h2>2023</h2>
        <h1> Sean & Chloe's wedding</h1>
        <h2>OCTOBER 15th</h2>
      </div>
      <FormWrap />
    </nav>
  );
};

export default Navbar;