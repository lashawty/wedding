import './logo.styles.sass';
import './lashawty.svg'
import {ReactComponent as Logo} from  './lashawty.svg'
const LogoWrap = () => {
  return (
    <div className="entry">
      <div className="logo-wrap">
        <Logo className="lashawty" alt="logo" stroke="#000" strokeWidth="1px"/>
      </div>
    </div>
  );
};

export default LogoWrap;