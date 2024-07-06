import "../styles/NavBar.css";

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
          <Link to={"/Veggy_Mood/"}>
            <li>
              <FaHome />
            </li>
          </Link>
        </ul>

      </div>

      <div className="contact-box">
        <ul>
          <li>
            <FaGithub />
            <a href="https://github.com/Giangy25?tab=repositories" target='blank'>
            </a>
          </li>
          <li>
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/angela-rosace-744925291/" target='blank'>
            </a>
          </li>
        </ul>

      </div>
    </>
  )
}

export default Header;