import { Link } from 'react-router-dom';

// css
import '../MainCont/MainCont.css';

// componenti
import SearchBar from "../SearchBar/SearchBar"

//img
import logo from "../../image/logo.png";

function MainCont() {
  return (
    <div className='main'>
      <div className='main-image'></div>
      <div className='main-content'>
        <Link to={'/Veggy_Mood/'}>
          <img className='logo' src={logo} alt="" />
        </Link>
        <SearchBar></SearchBar>
      </div>
    </div>
  )
}

export default MainCont