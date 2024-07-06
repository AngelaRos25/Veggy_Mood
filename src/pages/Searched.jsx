import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// componenti
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

// icon
import { TbArrowBadgeUpFilled } from "react-icons/tb";

//pagina per le ricette cercate
function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [number, setNumber] = useState(10);
  let params = useParams();

  useEffect(() => {
    /*chiamo l'api per cercare le ricette nel form*/
    const getSearched = async (name) => {
      try {
        const api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&diet=vegetarian&query=${name}&number=${number}`);
        const data = api.data;
        console.log(data)
        setSearchedRecipes(data.results);
      } catch (error) {
        console.log("opss!, there is an error");
      }
    }
    getSearched(params.search);
  }, [params.search, number]);


  return (
    <>
      <NavBar />
      <SearchBar />
      <div id='section-2' className='body-cont'>
        <div>
          <h1>Recipes with&nbsp;
            <span style={{ color: "red" }}>{params.search}</span>
          </h1>
        </div>
        <div className="box">
          {searchedRecipes.map((item) => {
            return (
              <div key={item.id} className="recipe-container">
                <Link to={'/Veggy_Mood/RecipeDetails/' + item.id}>
                  <img className="recipe-img" src={item.image} alt="" />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            )
          })}
        </div>
        <div className='button-box'>
          <button onClick={() => setNumber(number + 10)} className='search-button  button2'>Load More</button>
        </div>
        <div className="arrow">
          <a href="#section-1">
            <TbArrowBadgeUpFilled />
          </a>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Searched;