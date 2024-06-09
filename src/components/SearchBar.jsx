import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


import '../styles/SearchBar.css';

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  }

  return (
    <div className='central-header'>
      <div className='text'>
        <h2>Welcome</h2>
        <h1>FRESH VEGGIE RECIPES</h1>
        <p>Are you looking for healthy dishes?
          Here, you will find them. Start now by typing your ingredients in the searchbar. </p>
      </div>
      <div className="submit-box">
        <form className='search-form' onSubmit={submitHandler}>
          <input className='search-bar' onChange={(e) => setInput(e.target.value)} value={input} type="text" name="ingredient" placeholder='Type here your ingredient!' />
          <button className='search-button'>
            <FaSearch></FaSearch>
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;