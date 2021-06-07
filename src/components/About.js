import React from "react";

function AboutView() {
  return (
    <section class="about section" id="about">
      <span class="section-subtitle">My intro</span>
      <h2 class="section-title">About Me</h2>
      <div class="about__container bd-grid">
        <div class="about__data">
          <img src="./images/pexels-media-2524368.png" alt="about__img" class="about__img"></img>
          <p class="about__description">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisqua
          </p>
        </div>

        <div class="first__data">
          <div class="about__information">
            <h3 class="about__information-title">Information</h3>
            <div class="about__information-data">
              <i class="bx bx-user about__information-icon"></i>
              <span>Shivraj Muttagi</span>
            </div>
            <div class="about__information-data">
              <i class="bx bx-phone about__information-icon"></i>
              <span>+91-7204696349</span>
            </div>
            <div class="about__information-data">
              <i class="bx bx-envelope about__information-icon"></i>
              <span>shivrajsm0219@gmail.com</span>
            </div>
          </div>
          <div class="about__information">
            <h3 class="about__information-title">Expierence and Support</h3>
            <div class="about__information-data">
              <i class="bx bx-medal about__information-icon"></i>
              <div>
                <span class="about__information-subtitle">1 years</span>
                <span class="about__information-subtitle-small">Expierence</span>
              </div>
            </div>
            <div class="about__information-data">
              <i class="bx bx-briefcase about__information-icon"></i>
              <div>
                <span class="about__information-subtitle">1 projects</span>
                <span class="about__information-subtitle-small">Complete</span>
              </div>
            </div>
            <div class="about__information-data">
              <i class="bx bx-support about__information-icon"></i>
              <div>
                <span class="about__information-subtitle">support</span>
                <span class="about__information-subtitle-small">Online 24*7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutView;
