import ImgSection from "..//../assets/img/image-hero-mobile.png";
import DataBiz from "../../assets/img/client-databiz.svg";
import AudioPhile from "../../assets/img/client-audiophile.svg";
import Meet from "../../assets/img/client-meet.svg";
import Maker from "../../assets/img/client-maker.svg";
import s from "./style.module.scss";
function SectionMobile() {
  return (
    <div className={s.sectionContainer}>
      <img  className={s.imgSection} src={ImgSection} alt='imgSection' />
      <div className={s.textSection}>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className={s.marque}>
          <img src={DataBiz} alt="logoData" />
          <img src={AudioPhile} alt="logoAudio" />
          <img src={Meet} alt="logoMeet" />
          <img src={Maker} alt="logoMaker" />
        </div>
      </div>
    </div>
  );
}

export default SectionMobile;
