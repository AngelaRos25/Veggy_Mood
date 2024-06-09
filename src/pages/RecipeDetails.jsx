import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { TiArrowBack } from "react-icons/ti";

import Header from "../components/Header";
import Footer from "../components/Footer";

import '../styles/RecipeDetails.css'

function RecipeDetails() {
  let params = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {

    const getDetails = async () => {
      const api = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_APP_API_KEY}`)
      const recipeData = api.data;
      console.log(recipeData)
      setDetails(recipeData);
    }
    getDetails();
  }, [params.name]);

  return (
    <>
      <Header />
      <div className="title-recipe">
        <h1>{details.title}</h1>
      </div>
      <div className="body-recipe">
        <div className="img-box">
          <Link to={"/"}>
            <TiArrowBack className="return" />
          </Link>
          <img className="image" src={details.image} alt={details.recipe} />
        </div>
        <div className="info-recipe">
          <div className="ingredient">
            <h2>Ingredients:</h2>
            <ol>
              {details.extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ol>
          </div>
          <div className="instruction">
            <h2>Instructions:</h2>
            <div className="text-instructions">
              {details.instructions}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RecipeDetails;