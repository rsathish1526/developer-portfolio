import "./Hero.css"

import getInTouchButton from "../../assets/Get In Touch Button.png"
import rectangle from "../../assets/Rectangle 2.png"

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-avatar">
        <div className="hero-avatar-face">
          👨🏻‍💻
        </div>
      </div>

      <h1 className="hero-title">
        I do code and
        <br />
        make content <span>about it!</span>
      </h1>

      <p className="hero-description">
        I'm a seasoned full-stack software engineer with over 8 years of
        professional experience, specializing in backend development.
        My expertise lies in crafting robust and scalable SaaS-based
        architectures on the Amazon AWS platform.
      </p>

      <div className="hero-buttons">

        <a href="#contact" className="hero-contact">
          <img
            src={getInTouchButton}
            alt="Get In Touch"
          />
        </a>

        <a href="#" className="hero-cv">
          <img
            src={rectangle}
            alt=""
          />

          <span>Download CV</span>
        </a>

      </div>

    </section>
  )
}

export default Hero