import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { TbArrowBadgeDownFilled } from "react-icons/tb";

import image from '../image/verdura-di-stagione.jpg'
import logo from '../image/logo.png';
import '../styles/SearchBar.css';

function CentralHeader() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/Veggy_Mood/searched/${input}`);
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };


  return (
    <div id='section-1' className='central-header'>
      <div className='box-header'>
        <div className='box-img'>
          <img src={logo} alt="" />
        </div>
        <div className='box-title-search'>
          <div className='background-img'>
            <img src={image} alt="" />
          </div>
          <div className='text'>
            <h1>FRESH VEGGIE RECIPES</h1>
            <p>Are you looking for healthy dishes?
              Here, you will find them. Start now by typing your ingredients in the searchbar. </p>
          </div>
          <div className="submit-box">
            <form className='search-form' onSubmit={submitHandler}>
              <input className='search-bar' onChange={(e) => setInput(e.target.value)} value={input} type="text" name="ingredient" placeholder='Type here your ingredient!' />
              <button className='search-button' onClick={scrollToBottom}>
                  <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='arrow'>
        <a href="#section-2">
          <TbArrowBadgeDownFilled />
        </a>
      </div>

    </div>
  )
}

export default CentralHeader;