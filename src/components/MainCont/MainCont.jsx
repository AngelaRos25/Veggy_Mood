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
        <img className='logo' src={logo} alt="" />
        <SearchBar></SearchBar>
      </div>
    </div>
  )
}

export default MainCont