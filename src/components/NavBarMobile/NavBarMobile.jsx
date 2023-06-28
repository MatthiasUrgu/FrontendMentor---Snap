import Logo from "../Logo/Logo";
/* import NavBar from '../NavBar/Navbar' */
import { List,ChevronDoubleUp,XLg,ChevronDoubleDown} from "react-bootstrap-icons";
import Planning from "../../assets/img/icon-planning.svg"
import Reminders from "../../assets/img/icon-reminders.svg"
import TodoList from "../../assets/img/icon-todo.svg"
import Calendar from "../../assets/img/icon-calendar.svg"

import { useState, useRef ,useEffect} from "react";
import {motion} from 'framer-motion'
import s from "./style.module.scss";

function NavBarMobile() {
  const [isHamburger, setHamburger] = useState(false);
  const [isFeatures, setFeatures] = useState(false);
  const [isCompagny, setCompagny] = useState(false);

  let menuRef = useRef()


  /* State pour les menus */
  function hamburgerMenu() {
    setHamburger(!isHamburger);
  }
  function featuresMenu() {
    setFeatures(!isFeatures);
  }
  function compagnyMenu() {
    setCompagny(!isCompagny);
  }
/* Const Switch menu hamburger On */
const hamburgerOff = <div className={s.hamburger} style={{position: isHamburger ? "fixed" : "absolute"}}>
<List size={30} onClick={hamburgerMenu} />
</div>
/* const switch menu hamburger Off */
const hamburgerOn = <div className={s.hamburger} style={{position: isHamburger ? "fixed" : "absolute"}}>
<XLg size={25} onClick={hamburgerMenu} />
</div>

/* const switch Features Up */
const featuresUp = <span className={s.chevron}>   <ChevronDoubleUp size={10}/></span>
/* const switch Features Down */
const featuresDown = <span className={s.chevron}><ChevronDoubleDown size={10}/></span>
/* const switch Compagny Up */
const CompagnyUp = <span className={s.chevron}><ChevronDoubleUp size={10}/></span>
/* const switch Compagny Down */
const CompagnyDown = <span className={s.chevron}><ChevronDoubleDown size={10}/></span>




/* framer motion animation */
const animateFrom = {opacity:0 , y:-20}
const animateTo = {opacity:1 , y:0 }

/* useEffect pour écouter et désactiver les menus  */
useEffect(()=>{
  let cancel =(e)=>
    {
      if (!menuRef.current.contains(e.target)){
        setHamburger(false)
        
      }
    }
    document.addEventListener('mousedown', cancel)
})


  return (
    <div className={s.header_mobile} ref={menuRef}>
      {isHamburger ? hamburgerOn : hamburgerOff}
      <div className={s.hamburgerShow} style={{ display: isHamburger ? "block" : "none" }}>
        <ul className={s.hamburgerList}>
          <motion.li
            initial={animateFrom}
            animate={isHamburger ?animateTo : animateFrom}
            transition={{delay:0.6}} className={s.featuresLi} onClick={featuresMenu}><a href="#">Features {isFeatures ? featuresUp : featuresDown}</a></motion.li>
            <ul className={s.featuresMenu} style={{display: isFeatures ? "flex" : "none"}} >
                <li><a href="#"><img src={TodoList} alt="TodoList"/> To do list</a></li>
                <li><a href="#"><img src={Calendar} alt="Calendar"/> Calendar</a></li>
                <li><a href="#"><img src={Reminders} alt="Reminders"/> Reminders</a></li>
                <li><a href="#"><img src={Planning} alt="Planning"/> Planing</a></li>
            </ul>
          <motion.li
            initial={animateFrom}
            animate={isHamburger ?animateTo : animateFrom}
            transition={{delay:0.7}} onClick={compagnyMenu}><a href="#">Compagny {isCompagny ? CompagnyUp : CompagnyDown} </a></motion.li>
          <ul className={s.compagnyMenu} style={{display: isCompagny ? "flex" : "none"}} >
                <li><a href="#">History</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
          <motion.li
            initial={animateFrom}
            animate={isHamburger ? animateTo : animateFrom}
            transition={{delay:0.8}}><a href="#">Careers</a></motion.li>
          <motion.li
            initial={animateFrom}
            animate={isHamburger ?animateTo : animateFrom}
            transition={{delay:0.9}}><a href="#">About</a></motion.li>
        </ul>
        <div className={s.hamburgerButton} >
            
            <button>Login</button>
            <button>Register</button>
        </div>
      </div>
     
    </div>
  );
}

export default NavBarMobile;
