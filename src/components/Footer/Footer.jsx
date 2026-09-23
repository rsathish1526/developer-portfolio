import "./Footer.css"

import footerImage from "../../assets/Footer.png"

function Footer() {
  return (
    <footer id="contact" className="footer">

      <img
        src={footerImage}
        alt="Contact"
        className="footer-image"
      />

    </footer>
  )
}

export default Footer