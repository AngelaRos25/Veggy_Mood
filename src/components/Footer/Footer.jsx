// css
import "../Footer/Footer.css"
// icon
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-box">
      <p>
        By Angela Rosace - 2024
        <br />
        Start2impact React Course Project
      </p>
      <div className="contact-box">
        <ul>
          <li>

            <a href="https://github.com/Giangy25?tab=repositories" target='blank'>
              <FaGithub />
            </a>
          </li>
          <li>

            <a href="https://www.linkedin.com/in/angela-rosace-744925291/" target='blank'>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/angiirosi/"
              target='blank'>
              <FaInstagram />
            </a>
          </li>
          <li>

            <a href="https://talent.start2impact.it/profile/angela-rosace"
              target='blank'>
              <FaTelegramPlane />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer