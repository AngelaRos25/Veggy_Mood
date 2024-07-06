import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import Badge from "../components/Badge";



import NavBar from '../components/NavBar';
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
    <div className="app2">
      <NavBar />
      <div className="principal-box">
        <div className="box-details">
          <div className="header-recipe-box">
            <div className="box-title-badge">
              <h1>{details.title}</h1>
              <Badge
                vegan={details.vegan}
                vegetarian={details.vegetarian}
                glutenFree={details.glutenFree}
                dairyFree={details.dairyFree}
                veryHealthy={details.veryHealthy} />
            </div>

            <img className="img-recipe" src={details.image} alt="" />
          </div>
          <div className="body-recipe">
            <div className="box-summ-ing">
              <div className="summary-recipe">
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              </div>
              <div className="ingredient">
                <h2>Ingredients:</h2>
                <ol>
                  {details.extendedIngredients?.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="instructions">
              <h2>Instructions:</h2>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }} className="text-instructions"></p>
            </div>
          </div>
          <div className="box-return">
            <ul>
              <Link to={"/Veggy_Mood/"}>
                <li>
                  <BsArrowLeftSquareFill />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RecipeDetails;