import React from "react";
import work1 from "./img/work1.jpg";
import work2 from "./img/work2.jpg";
import work3 from "./img/work3.jpg";
import work4 from "./img/work4.jpg";
import work5 from "./img/work5.jpg";
import work6 from "./img/work6.jpg";

function WorkView() {
  const style1 = {
    color: "#1e1c1d",
    fontWeight: "900",
  };
  return (
    <section className="works section " id="works">
      <span className="section-subtitle" style={style1}>
        My portfolio
      </span>
      <h3 className="section-title" style={{ color: "#1e1c1d", fontWeight: "900" }}>
        Recent Work
      </h3>
      <div className="sort__box">
        <span className="dropbtn">
          <i style={{ "font-weight": "bold" }} className="bx bx-sort"></i>
          sort by
        </span>
        <div className="dropdown-content">
          <a href="#works">Starter</a>
          <a href="#works">Intermediate</a>
          <a href="#works">Advanced </a>
        </div>
      </div>
      <div className="works__container bd-grid">
        <div className="works__img">
          <img src={work1} alt="vg"></img>
          <div className="works__data">
            <a href="#works" className="works__Link">
              <i className="bx bxs-like" undefined>
                100
              </i>
            </a>
            <a href="#works" className="works__Link">
              <i className="bx bx-link-alt"></i>
            </a>
            <span className="works__title">Work1</span>
          </div>
        </div>

        <div className="works__img">
          <img src={work2} alt="vg"></img>
          <div className="works__data">
            <a href="#works" className="works__Link">
              <i className="bx bxs-like" undefined>
                100
              </i>
            </a>
            <a href="#works" className="works__Link">
              <i className="bx bx-link-alt"></i>
            </a>
            <span className="works__title">Work2</span>
          </div>
        </div>

        <div className="works__img">
          <img src={work3} alt="vg"></img>
          <div className="works__data">
            <a href="#works" className="works__Link">
              <i className="bx bxs-like" undefined>
                100
              </i>
            </a>
            <a href="#works" className="works__Link">
              <i className="bx bx-link-alt"></i>
            </a>
            <span className="works__title">Work3</span>
          </div>
        </div>

        <div className="works__img">
          <img src={work4} alt="vg"></img>
          <div className="works__data">
            <a href="#works" className="works__Link">
              <i className="bx bxs-like" undefined>
                100
              </i>
            </a>
            <a href="#works" className="works__Link">
              <i className="bx bx-link-alt"></i>
            </a>
            <span className="works__title">Work4</span>
          </div>
        </div>

        <div className="works__img">
          <img src={work5} alt="vg"></img>
          <div className="works__data">
            <a href="#works" className="works__Link">
              <i className="bx bxs-like" undefined>
                100
              </i>
            </a>
            <a href="#works" className="works__Link">
              <i className="bx bx-link-alt"></i>
            </a>
            <span className="works__title">Work5</span>
          </div>
        </div>

        <div className="works__img">
          <img src={work6} alt="vg"></img>
          <div className="works__data">
            <a href="#works" className="works__Link">
              <i className="bx bxs-like" undefined>
                100
              </i>
            </a>
            <a href="#works" className="works__Link">
              <i className="bx bx-link-alt"></i>
            </a>
            <span className="works__title">Work6</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WorkView;
