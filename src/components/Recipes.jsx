import axios from "axios";
import { useEffect, useState } from 'react';
import Card from "./Card";


// import icon
import { TbArrowBadgeUpFilled } from "react-icons/tb";

// import style
import "../styles/Recipes.css";


function Recipes() {

  const [getRecipe, setGetRecipe] = useState([]);
  const [number, setNumber] = useState(10);

  useEffect(() => {
    const getRandomRecipe = async () => {
      try {
        const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=${number}&tags=vegetarian`);
        const data = api.data;
        console.log(data)
        setGetRecipe(data.recipes);
      } catch (error) {
        console.log("opss!, there is an error");
      }
    }
    getRandomRecipe();
  }, [number]);

  return (
    <>
      <div className="popular-recipes">
        <h1>Popular Recipes</h1>
      </div>
      <div className="box">
        {getRecipe.map((recipe) => {
          return (
            <div key={recipe.id} className="box-recipe">
              <Card key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id}
              vegan={recipe.vegan}
              vegetarian={recipe.vegetarian}
              glutenFree={recipe.glutenFree}
              dairyFree={recipe.dairyFree}
              veryHealthy={recipe.veryHealthy}/>
            </div>
          )
        })}
      </div>
      <div className='button-box'>
        <button onClick={() => setNumber(number + 10)} className='search-button  button2'>Load More</button>
      </div>
      <div className="arrow arrow-recipe">
        <a href="#section-1">
          <TbArrowBadgeUpFilled />
        </a>
      </div>
    </>
  )
}

export default Recipes