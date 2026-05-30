import React from "react";
import s from "./Ourteam.module.sass";
import img1 from "../../assets/arlene.png";
import img2 from "../../assets/henry.png";
import img3 from "../../assets/bell.png";
import img4 from "../../assets/jenny.png";

const Ourteam = () => {
  return (
    <section className={s.team_section}>
      <div className={s.team_header}>
        <h1>Our Team</h1>
        <a href="/">View All ↗</a>
      </div>
      <div className={s.team_grid}>
        <div>
          <img src={img2}alt="" />
          <h2>Courtney Henry</h2>
          <h3>Development Manager</h3>
        </div>
        <div>
          <img src={img3} alt="" />
          <h2>Jerome Bell</h2>
          <h3>Software Tester</h3>
        </div>
        <div>
          <img src={img1} alt="" />
          <h2>Arlene McCoy</h2>
          <h3>Software Developer</h3>
        </div>
        <div>
          <img src={img4} alt="" />
          <h2>Jenny Wilson</h2>
          <h3>UI/UX Designer</h3>
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
