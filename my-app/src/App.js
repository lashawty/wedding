import React from 'react';
import Navbar from "./components/navbar/navbar.component";
import Images from './components/image/image.component';
import LogoWrap from './components/logo/logo.component'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Images />
      <LogoWrap />
    </div>
  );
}


export default App;