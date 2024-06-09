import "../styles/Header.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import logo from '../image/logo-veggymood.png';



function Header() {
  return (
    <div className='content-header'>
      <img className="logo-img" src={logo} alt="" />
      <div className='navbar-contact'>
        <ul>
          <li>
            <Link className="home-bar" to={"/"}><FaHome/></Link>
          </li>
          <li>
            <a href="https://www.linkedib5269297fb334aab8b3071c9927cfc4fn.com/in/angela-rosace-744925291/" target='blank'><FaLinkedin/></a>
          </li>
          <li>
            <a href="https://github.com/Giangy25?tab=repositories" target='blank'><FaGithub/></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;