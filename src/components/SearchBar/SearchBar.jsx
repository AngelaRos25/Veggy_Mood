import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//icone 
import { FaSearch } from 'react-icons/fa';
// css
import '../SearchBar/SearchBar.css';


function SearchBar() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${id}`);
  }
  return (
    <>
      <h1>Search Your Recipe</h1>
      <form onSubmit={submitHandler}>
        <input className='search-bar' onChange={(e) => setId(e.target.value)} value={id} type="text" placeholder=' Type your ingredient..' />
        <button className='button-search' onClick={submitHandler} >
          <FaSearch />
        </button>
      </form>
    </>
  )
}

export default SearchBar