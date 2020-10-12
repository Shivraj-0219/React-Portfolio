import React from "react";

function skillView() {
  return (
    <section class="skills section" id="skills">
      <span class="section-subtitle">Look on</span>
      <h2 class="section-title">MY SKILL SET</h2>
      <div class="skills__container bd-grid">
        <div class="skills__content">
          <h3 class="skills__subtitle">Frontend</h3>
          <div class="skills__data">
            <span class="skills__name">Html/css</span>
            <span class="skills__number">90%</span>
            <span class="skills__bar skills__html"></span>
          </div>

          <div class="skills__data">
            <span class="skills__name">Javascript</span>
            <span class="skills__number">75%</span>
            <span class="skills__bar skills__js"></span>
          </div>

          <div class="skills__data">
            <span class="skills__name">React</span>
            <span class="skills__number">60%</span>
            <span class="skills__bar skills__react"></span>
          </div>

          <div class="skills__data">
            <span class="skills__name">redux</span>
            <span class="skills__number">50%</span>
            <span class="skills__bar skills__redux"></span>
          </div>
          <div class="skills__data">
            <span class="skills__name">material ui</span>
            <span class="skills__number">50%</span>
            <span class="skills__bar skills__material"></span>
          </div>
        </div>
        <div class="skills__content">
          <h3 class="skills__subtitle">Backend</h3>
          <div class="skills__data">
            <span class="skills__name">nodeJS</span>
            <span class="skills__number">70%</span>
            <span class="skills__bar skills__node"></span>
          </div>
          <div class="skills__data">
            <span class="skills__name">Rest API</span>
            <span class="skills__number">70%</span>
            <span class="skills__bar skills__restapi"></span>
          </div>
          <div class="skills__data">
            <span class="skills__name">express</span>
            <span class="skills__number">60%</span>
            <span class="skills__bar skills__python"></span>
          </div>

          <div class="skills__data">
            <span class="skills__name">Mongodb</span>
            <span class="skills__number">70%</span>
            <span class="skills__bar skills__mongodb"></span>
          </div>
          <div class="skills__data">
            <span class="skills__name">python</span>
            <span class="skills__number">60%</span>
            <span class="skills__bar skills__python"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default skillView;
