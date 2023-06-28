import React from "react";
import ImgSection from "..//../assets/img/image-hero-desktop.png";
import DataBiz from "../../assets/img/client-databiz.svg";
import AudioPhile from "../../assets/img/client-audiophile.svg";
import Meet from "../../assets/img/client-meet.svg";
import Maker from "../../assets/img/client-maker.svg";

import s from "./style.module.scss";
function SectionDesktop() {
  return (
    <div className={s.desktopContainer}>
      <div className={s.text}>
        <h1>
          Make <br /> remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn More</button>
        <div className={s.marque}>
        <img src={DataBiz} alt="logoData" />
        <img src={AudioPhile} alt="logoAudio" />
        <img src={Meet} alt="logoMeet" />
        <img src={Maker} alt="logoMaker" />
      </div>
      </div>
      <div className={s.imgContainer}>
        <img src={ImgSection} alt="img" srcset="" />
      </div>
      
    </div>
  );
}

export default SectionDesktop;
