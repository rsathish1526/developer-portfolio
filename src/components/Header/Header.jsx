import "./Header.css"

import headerImage from "../../assets/Header.png"

function Header() {
  return (
    <header className="header">

      <img
        src={headerImage}
        alt="Portfolio Header"
        className="header-image"
      />

      <nav className="header-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  )
}

export default Header