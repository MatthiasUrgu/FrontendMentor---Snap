import React from "react";
import Logo from "./components/Logo/Logo";
import NavBarMobile from "./components/NavBarMobile/NavBarMobile";
import Navbar from "./components/NavBar/Navbar";
import SectionDesktop from "./components/SectionDesktop/SectionDesktop";
import SectionMobile from  "./components/SectionMobile/SectionMobile";

import s from './style.module.scss'
function App() {
  
  return (
    <>
      <div className={s.container}>
      <Logo/>
      <span className={s.NavbarMobile}><NavBarMobile/></span>
      <span className={s.Navbar}><Navbar/></span>
      </div>
      <section>
        <span className={s.sectionMobile}><SectionMobile/></span>
        <span className={s.sectionDesktop}><SectionDesktop/></span>
      </section>
    </>
  );
}

export default App;
