import axios from "axios";
import { useEffect, useState } from "react";

// css 
import "../Recipes/Recipes.css";

// componenti
import Card from "../Card/Card"
import Loader from "../Loader/Loader"

function Recipes() {
  const [getRecipe, setGetReacipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRandomRecipe = async () => {
      try {
        const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=10&tags=vegetarian`);
        const data = api.data;
        console.log(data);
        setGetReacipe(data.recipes)
      } catch (error) {
        console.log('Failed to feth data', error)
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    getRandomRecipe();
  }, [])


  return (
    <div className="content-box">
      <h2 className="title">Popular Recipe</h2>
      {isLoading === true && (
        <div>
          <Loader />
        </div>
      )}
      <div className="box-recipe">
        {isLoading === false && getRecipe.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              id={recipe.id}
              vegan={recipe.vegan}
              vegetarian={recipe.vegetarian}
              dairyFree={recipe.dairyFree}
              glutenFree={recipe.glutenFree}
              veryHealthy={recipe.veryHealthy} />
          )
        })}
      </div>
    </div>
  )
}

export default Recipes