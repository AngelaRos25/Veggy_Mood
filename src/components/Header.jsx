import "../styles/Header.css";

// importo icon
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Header() {
  return (
    <>
      <div className="home-box">
        <ul>
          <li>
            <Link to={"/Veggy_Mood/"}>
              <FaHome />
            </Link>
          </li>
        </ul>

      </div>

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
        </ul>

      </div>
    </>
  )
}

export default Header;