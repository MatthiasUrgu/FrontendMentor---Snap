import React from 'react';
import { useState } from 'react';
import {List,ChevronDoubleUp,ChevronDoubleDown} from 'react-bootstrap-icons'
import Planning from "../../assets/img/icon-planning.svg"
import Reminders from "../../assets/img/icon-reminders.svg"
import TodoList from "../../assets/img/icon-todo.svg"
import Calendar from "../../assets/img/icon-calendar.svg"
import {motion} from 'framer-motion'
import s from './style.module.scss'

function Navbar() {
    
 
  const [isFeatures, setFeatures] = useState(false);
  const [isCompagny, setCompagny] = useState(false);


  function featuresMenu() {
    setFeatures(!isFeatures);
  }
  function compagnyMenu() {
    setCompagny(!isCompagny);
  }

/* const switch Features Up */
const featuresUp = <span className={s.chevron}><ChevronDoubleUp size={10}/></span>
/* const switch Features Down */
const featuresDown = <span className={s.chevron}><ChevronDoubleDown size={10}/></span>
/* const switch Compagny Up */
const CompagnyUp = <span className={s.chevron}><ChevronDoubleUp size={10}/></span>
/* const switch Compagny Down */
const CompagnyDown = <span className={s.chevron}><ChevronDoubleDown size={10}/></span>

const animateFrom = {opacity:0 , y:-10}
const animateTo = {opacity:1 , y:0 }

  return (
    <div className={s.DesktopHeader}>
      
      <div className={s.navbarContainer} >
        <ul className={s.NavbarUl}>
          <li className={s.featuresLi} onClick={featuresMenu}><a href="#">Features {isFeatures ? featuresUp : featuresDown}</a></li>
            <ul className={s.featuresDrop} style={{display: isFeatures ? "flex" : "none"}} >
                <motion.li
                  initial={isFeatures? animateFrom : animateTo}
                  animate={ isFeatures? animateTo : animateFrom}
                  transition= {{delay: 0.05}} 
                  className={s.featuresDropLi}>
                    <a href="#"><img src={Calendar} alt="Calendar"/> Calendar</a>
                  </motion.li>
                <motion.li
                  initial={isFeatures? animateFrom : animateTo}
                  animate={ isFeatures? animateTo : animateFrom}
                  transition= {{delay: 0.1}}
                  className={s.featuresDropLi}>
                    <a href="#">
                      <img src={Reminders} alt="Reminders"/> Reminders</a></motion.li>
                <motion.li
                  initial={isFeatures? animateFrom : animateTo}
                  animate={ isFeatures? animateTo : animateFrom}
                  transition= {{delay: 0.15}}
                  className={s.featuresDropLi}>
                    <a href="#">
                      <img src={Planning} alt="Planning"/> Planing</a></motion.li>
                <motion.li
                  initial={isFeatures? animateFrom : animateTo}
                  animate={ isFeatures? animateTo : animateFrom}
                  transition= {{delay: 0.20}}
                  className={s.featuresDropLi}>
                    <a href="#">
                      <img src={TodoList} alt="TodoList"/> To do list</a></motion.li>
            </ul>
          <li className={s.featuresLi} onClick={compagnyMenu}><a href="#">Compagny {isCompagny ? CompagnyUp : CompagnyDown} </a></li>
          <ul className={s.compagnyMenu} style={{display: isCompagny ? "flex" : "none"}} >
                <motion.li
                  initial={isCompagny? animateFrom : animateTo}
                  animate={ isCompagny? animateTo : animateFrom}
                  transition= {{delay: 0.1}}>
                  <a href="#">History</a></motion.li>
                <motion.li 
                  initial={isCompagny? animateFrom : animateTo}
                  animate={ isCompagny? animateTo : animateFrom}
                  transition= {{delay: 0.15}}>
                    <a href="#">Our Team</a></motion.li>
                <motion.li
                  initial={isCompagny? animateFrom : animateTo}
                  animate={ isCompagny? animateTo : animateFrom}
                  transition= {{delay: 0.20}}>
                    <a href="#">Blog</a></motion.li>
            </ul>
          <li className={s.featuresLi}><a href="#">Careers</a></li>
          <li className={s.featuresLi}><a href="#">About</a></li>
        </ul>
        <div className={s.DesktopButton} >
            
            <button>Login</button>
            <button>Register</button>
        </div>
      </div>
     
    </div>
  );
}

export default Navbar;