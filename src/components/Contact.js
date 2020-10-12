import React from "react";

function contactView() {
  return (
    <section className="contact section" id="contact">
      <span className="section-subtitle" style={{ color: "#1e1c1d", fontWeight: "900" }}>
        Contact Me
      </span>
      <h3 className="section-title" style={{ color: "#1e1c1d", fontWeight: "900" }}>
        Get In Touch
      </h3>
      <div className="contact__container bd-grid">
        <form action="#contact" className="contact__form">
          <div className="contact__inputs">
            <input type="text" placeholder="Name" className="contact__input"></input>
            <input type="mail" placeholder="Email" className="contact__input"></input>
          </div>
          <textarea name="textmessage" cols="0" rows="10" placeholder="Message" className="contact__input"></textarea>
          <input type="text" placeholder="Project" className="contact__input"></input>
          <input type="submit" value="Send Message" className="button contact__button"></input>
        </form>
        <div>
          <div className="contact__info">
            <h3 className="contact__subtitle">Call me</h3>
            <span className="contact__text">+91 7204696349</span>
            <span className="contact__text">+91 6363475357</span>
          </div>
          <div className="contact__info">
            <h3 className="contact__subtitle">E-mail</h3>
            <span className="contact__text">shivrajsm0219@gamil.com</span>
            <span className="contact__text">muttagi.shivraj@gmail.com</span>
          </div>
          <div className="contact__info">
            <h3 className="contact__subtitle">Location</h3>
            <span className="contact__text">Vijayapur</span>
            <span className="contact__text">Bangalore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default contactView;
