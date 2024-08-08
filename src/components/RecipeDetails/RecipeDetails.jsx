import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// componenti 
import DetailsCard from "../DetailsCard/DetailsCard";
import FootButton from "../FootButton/FootButton";
import Loader from "../Loader/Loader";

// css
import "../RecipeDetails/RecipeDetails.css"

export default function RecipeDetails() {
  let { id } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const api = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_APP_API_KEY}`);
        const recipeData = api.data;
        console.log(recipeData);
        setDetails(recipeData);
      } catch (error) {
        console.log('Failed to feth data', error)
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
    getDetails()
  }, [id]);

  return (
    <div className="recipe-details-box">
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <h1 className="title-recipe-details">{details.title}</h1>
          <div className="box-details-card">
            <DetailsCard
              image={details.image}
              vegan={details.vegan}
              vegetarian={details.vegetarian}
              glutenFree={details.glutenFree}
              dairyFree={details.dairyFree}
              veryHealthy={details.veryHealthy}
              readyInMinutes={details.readyInMinutes}
              servings={details.servings}
            />
            <div className="summary-recipe">
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </div>
          </div>
          <div className="box-in">
            <div className="ingredient">
              <h2>Ingredients:</h2>
              <ol>
                {details.extendedIngredients?.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ol>
            </div>
            <div className="instructions">
              <h2>Instructions:</h2>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          </div>
        </>
      )}

      <FootButton />
    </div>
  )
}
